/* KOI Writer	http://www.koi-writer.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Name:		writer-data.js
Author: 	Matthias Jost, Simon Siegenthaler
Created:	2011
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var g_CKEditor;
var g_CKEditorIsReady = false;
var g_CKShowSource = false;

var g_CKEditorSettings =
{
    WidthIndex : 0,
    BackgroundIndex: 0
};
var g_CKEditorConfig = 
{
	fullPage : true,
	skin : 'koi' ,
	toolbar:
	[
	]
};
var g_FontSizeSearchPattern = /body.font-size: .+?}/;
var g_FontFamilySearchPattern = /@import url(.+?);.body.font-family: .+?}/;
var g_DefaultFontSize = 5;
var g_FSizeHandle;
var g_CurrentDocumentName = "";
var g_FontSizeSnippets = 
[
	'body{font-size: 8pt;}',//1
    'body{font-size: 9pt;}',//2
    'body{font-size: 10pt;}',//3
    'body{font-size: 11pt;}',//4
    'body{font-size: 12pt;}',//5
    'body{font-size: 13pt;}',//6
    'body{font-size: 14pt;}',//7
    'body{font-size: 15pt;}',//8
    'body{font-size: 16pt;}',//9
    'body{font-size: 17pt;}'//10
];
var g_FontSizeMin = 1;
var g_FontSizeMax = 10;

function execEditorCommand(name, value)
{
    g_CKEditor.execCommand(name, value);
}
function format(name) 
{
   
    execEditorCommand(name, '');
}
function setHeading(size)
{
    var headingTag = 'p';
	g_CKEditor.fire('saveSnapshot');
    switch(size)
    {
        case 0:
            headingTag = 'p';
            break;
        case 1:
            headingTag = 'h1';
            break;
        case 2:
            headingTag = 'h2';
            break;
        case 3:
            headingTag = 'h3';
            break;
        default:
            headingTag = 'h1';
            break;        
    }
	var styles = new CKEDITOR.style
	(
		{
			element : headingTag, 
			overrides : 
				[ 
					{
                        element : 'p',
						element : 'h1',
                        element : 'h2',
                        element : 'h3'
					}
				]
		}
	);
	styles.apply( g_CKEditor.document );
	g_CKEditor.fire('saveSnapshot');
}
$('#FormatP').click
(
	function () 
	{ 
		setHeading(0);
	}
);
    
$('#FormatHeading1').click
(
	function () 
	{ 
		setHeading(1);
	}
);
$('#FormatHeading2').click
(
	function () 
	{ 
		setHeading(2);
	}
);
$('#FormatHeading3').click
(
	function () 
	{
	    setHeading(3);
        
	}
);
    
function applyToStyleSection(find, replace)
{
    var styleSection = $('#cke_editor iframe').contents().find('style').html();
	if(styleSection.match(/.KoiWriter_addNewStylesHere{}/))
	{
			if(styleSection.match(find))
			{
				styleSection = styleSection.replace(
				find, 
				replace);
			}
			else
			{
				styleSection = styleSection.replace(
				/.KoiWriter_addNewStylesHere{}/, 
				replace+'\n\
				.KoiWriter_addNewStylesHere{}\n');				
			}
			$('#cke_editor iframe').contents().find('style').html(styleSection);
    }
}

function initCurrentFontSizeAsynch()
{
    g_FSizeHandle = setInterval
    (
        "refreshCurrentFontSize()",
        1000
    );   
}
function refreshCurrentFontSize()
{
    var fsize = getCurrentFontSize();
    if(fsize != -1)
    {
        $('#FontSizeCurrent').text(fsize);
        clearInterval(g_FSizeHandle);
    }
}
function getCurrentFontSize()
{
    var numSize = g_FontSizeSnippets.length;
    var idx = 0;
    var fontSizeString = "";
    var styleSection = "";

    styleSection = $('#cke_editor iframe').contents().find('style').html();
    
    if(styleSection == "")
        return -1;
    
	if(styleSection.match(/.KoiWriter_addNewStylesHere{}/))
	{
        fontSizeString = styleSection.match(g_FontSizeSearchPattern);
        if (fontSizeString != null)
        {
            for(idx=0; idx<numSize; idx++)
            {
                if(g_FontSizeSnippets[idx] == fontSizeString)
                    return idx + 1;
            }
            return g_DefaultFontSize;
        }
        else
            return g_DefaultFontSize;
    }
    else
        return g_DefaultFontSize;
}
$('#FontSizeIncrement').click
(
	function () 
	{ 
        var newFontSize = g_DefaultFontSize;
        var currentFontSize = getCurrentFontSize();
        newFontSize = currentFontSize + 1;
        if(newFontSize > g_FontSizeMax)
            newFontSize = g_FontSizeMax;
        if(newFontSize < g_FontSizeMin)
            newFontSize = g_FontSizeMin;
		applyToStyleSection(g_FontSizeSearchPattern, g_FontSizeSnippets[newFontSize-1]);
        
        $('#FontSizeCurrent').text(newFontSize);
	}
);
$('#FontSizeDecrement').click
(
	function () 
	{ 
        var newFontSize = g_DefaultFontSize;
        var currentFontSize = getCurrentFontSize();
        newFontSize = currentFontSize - 1;
        if(newFontSize > g_FontSizeMax)
            newFontSize = g_FontSizeMax;
        if(newFontSize < g_FontSizeMin)
            newFontSize = g_FontSizeMin;
		applyToStyleSection(g_FontSizeSearchPattern, g_FontSizeSnippets[newFontSize-1]);
        $('#FontSizeCurrent').text(newFontSize);
	}
);

function applySourceFormatSettings()
{
	//Setup source code format options
	g_CKEditor.dataProcessor.writer.setRules
	( 'html',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
	g_CKEditor.dataProcessor.writer.setRules
	( 'head',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
	g_CKEditor.dataProcessor.writer.setRules
	( 'title',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
	g_CKEditor.dataProcessor.writer.setRules
	( 'style',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
	g_CKEditor.dataProcessor.writer.setRules
	( 'body',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);	
	g_CKEditor.dataProcessor.writer.setRules
	( 'p',
		{
			indent : false,
			breakBeforeOpen : true,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
	g_CKEditor.dataProcessor.writer.setRules
	( 'h1',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
		
	g_CKEditor.dataProcessor.writer.setRules
	( 'h2',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
	g_CKEditor.dataProcessor.writer.setRules
	( 'h3',
		{
			indent : false,
			breakBeforeOpen : false,
			breakAfterOpen : false,
			breakBeforeClose : false,
			breakAfterClose : true
		}
	);
}
function updateStatistics()
{
    /*
    alert(g_CKEditor.execCommand('statistics'));
    
    setTimeout(updateStatistics, 2000);*/
}
function WL_setEditorBackground(idx)
{
    switch(idx)
    {
        case 0:
            $('body').css('background-image', 'url(images/bg/1-full.jpg)');
            $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.2)');
            break;
        case 1:
            $('body').css('background-image', 'url(images/bg/2-full.jpg)');
            $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.2)');
            break;
        case 2:
            $('body').css('background-image', 'url(images/bg/3-full.jpg)');
            $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.2)');
            break;
        case 3:
                $('body').css('background-image', 'url(images/bg/4-full.jpg)');
        $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.4)');
            break;
        case 4:
        $('body').css('background-image', 'url(images/bg/5-full.jpg)');
        $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.7)');
            break;
        case 5:
                $('body').css('background-image', 'url(images/bg/6-full.jpg)');
        $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.3)');
            break;
        
        case 6:
                $('body').css('background-image', 'url(images/bg/7-full.jpg)');
        $('#editor-wrapper').css('background-color', 'rgba(255,255,255,0.58)');
            break;
        default:
            g_CKEditor.resize(600, 500);
    }
    g_CKEditorSettings.BackgroundIndex = idx;
    WD_saveBackgroundSetting(g_CKEditorSettings.BackgroundIndex);
    
}
function WL_setEditorSize(idx)
{
    switch(idx)
    {
        case 0:
            g_CKEditor.resize(500, 500);
            break;
        case 1:
            g_CKEditor.resize(600, 500);
            break;
        case 2:
            g_CKEditor.resize(800, 500);
            break;
        default:
            g_CKEditor.resize(600, 500);
    }
    g_CKEditorSettings.WidthIndex = idx;
    WD_saveSizeSetting(g_CKEditorSettings.WidthIndex);
    
}
function initEditorSettings()
{

}

function ckeditorReady()
{
    var name = getNewDocumentName();
    setCurrentDocumentName(name);
	g_CKEditor = $('#editor').ckeditorGet(); 
    
	applySourceFormatSettings();
	{
		g_CKEditor.setData(
		'<html>\
		<head>\
		<title></title>\
        <link rel=\"stylesheet\" href=\"css/edithtml.css\">\
		<style type=\"text/css\">\
        @import url(\'http://fonts.googleapis.com/css?family=Droid+Serif:regular,italic,bold,bolditalic\'); body{font-family: \'Droid Serif\', arial, serif;}\
        body{font-size: 12pt;}\
		.KoiWriter_addNewStylesHere{}/*Do not delete or modify .KoiWriter_addNewStylesHere*/</style>\
		</head>\
		<body>\
		<h1>Koi</h1><p>Der Nishikigoi (jap. &#37670;&#39881;, w&ouml;rtlich &bdquo;Brokatkarpfen&ldquo;), kurz auch Koi genannt, ist eine Zuchtform des Karpfens (Cyprinus carpio). Koi oder in Zusammensetzungen auch -goi ist einfach das japanische Wort f&uuml;r Karpfen allgemein.<p>\
		</body>\
		</html>',
		function()
		{
			this.checkDirty();    // true
		}
		);
	}
	g_CKEditor.focus();
	g_CKEditorIsReady = true;
    setInterval
    (
        "selectedMenuOpenIfSelected()",
        1000
    );
    jQuery(document).bind
    (
        'keydown', 'Ctrl+c',
        function (evt)
        {
            showSource();
            return false; 
        }
    );
        

	$('#cke_editor iframe').contents().find('html').css('overflow', 'hidden');
        
    var idx = WD_loadSizeSetting();
    WL_setEditorSize(idx);
    
    $('#EditorSmallWidth').click
    (
        function()
        {
            WL_setEditorSize(0);
        }
    )
    $('#EditorMediumWidth').click
    (
        function()
        {
             WL_setEditorSize(1);
             
        }
    )
    $('#EditorLargeWidth').click
    (
        function()
        {
             WL_setEditorSize(2);
             
        }
    )
    $('#FontButtonAnonymousPro').click
	(
        function ()
        {
            applyToStyleSection(g_FontFamilySearchPattern, "@import url(\'http://fonts.googleapis.com/css?family=Anonymous+Pro:regular,italic,bold,bolditalic\'); body{font-family: \'Anonymous Pro\', arial, serif;}");
        }
	)
    $('#FontButtonDroidSerif').click
	(
		function () 
		{ 			
			applyToStyleSection(g_FontFamilySearchPattern, "@import url(\'http://fonts.googleapis.com/css?family=Droid+Serif:regular,italic,bold,bolditalic\'); body{font-family: \'Droid Serif\', arial, serif;}");
		}
	)
     $('#FontButtonNobile').click
	(
		function () 
		{ 	
            applyToStyleSection(g_FontFamilySearchPattern, "@import url(\'http://fonts.googleapis.com/css?family=Nobile:regular,italic,bold,bolditalic\'); body{font-family: \'Nobile\', arial, serif;}");
        }
	)   
    $('#FormatRegular').click
	(
		function () 
		{ 
			format('removeFormat');
		}
	);
	$('#FormatItalic').click
	(
		function () 
		{ 
			format('italic');
		}
	);
	$('#FormatBold').click
	(
		function (event) 
		{ 
            execEditorCommand('MediaEmbed','');
            format('bold');
		}
	);
    $('#FormatBoldItalic').click
	(
		function () 
		{ 
            //execEditorCommand('print','');
			format('bold');
            format('italic');
		}
	);
	$('#FormatUnderline').click
	(
		function () 
		{ 
			format('underline');
		}
	);
	$('#JustifyLeftButton').click
	(
		function () 
		{ 
			format('justifyleft');
		}
	);
	$('#JustifyCenterButton').click
	(
		function () 
		{ 
			format('justifycenter');
		}
	);
	$('#JustifyRightButton').click
	(
		function () 
		{ 
			format('justifyright');
		}
	);
	$('#JustifyBlockButton').click
	(
		function () 
		{ 
            format('justifyblock');
		}
	);
	$('#BulletedListButton').click
	(
		function () 
		{ 
			format('bulletedlist');
		}
	);
	$('#NumberedListButton').click
	(
		function () 
		{ 
			format('numberedlist');
		}
	);

    function showSource()
    {
        if(g_CKShowSource == false)
		{
			// Switch to "source" view.
			g_CKEditor.setMode( 'source' );
			g_CKShowSource = true;
		}
		else
		{
			g_CKEditor.setMode( 'wysiwyg' );
			g_CKShowSource = false;
		}
    }
	$('#OpenDocumentButton').click
	(
		function () 
		{ 
			$('#OpenDocument').click();
		}
	);
	$('#cke_editor').css('display', 'block');
	$('#navigation').css('display', 'block');
    reloadDocumentPanel();
    initCurrentFontSizeAsynch();
    initMenu();
    initPanel();
    initEditorSettings();
    updateStatistics();
    
    
    //PROFILE.show();
}

$(document).ready
(
	function()
	{
        var bgIdx = WD_loadBackgroundSetting();
        WL_setEditorBackground(bgIdx);
		$('#cke_editor').css('display', 'none');
		$( '#editor' ).ckeditor
		(
			function() 
			{ 
				ckeditorReady() 
			}
			, g_CKEditorConfig
		);
            
        //rotatef();
	}		
);


function checkIfTextSelected()
{
    var domSelection;
    var mySelection;
    if(g_CKEditorIsReady == false)
        return false;
    if(g_CKShowSource == true)
        return false;
    
    if(g_CKEditor != undefined)
    mySelection = g_CKEditor.getSelection();
    if (CKEDITOR.env.ie)
    {
        mySelection.unlock(true);
        selectedText = mySelection.getNative().createRange().text;
    } 
    else
    {
        if(mySelection != undefined)
        {
            domSelection = mySelection.getNative();
        }
    }
    
    if(domSelection.toString().length > 0)
        return true;
    else
        return false;
}

function setCurrentDocumentName(name)
{
    g_CurrentDocumentName = name;
}
function getCurrentDocumentName()
{
    return g_CurrentDocumentName;
}

function reloadDocumentPanel()
{
    var num = WD_getNumKoiDocuments();
    var idx = 0;
    var fullSnippet;
    var tmpName = "";
    $('.docSnippet').remove();
    for(idx=0; idx<num; idx++)
    {
        tmpName = WD_getKoiDocumentName(idx);
        fullSnippet =  "<li class=\"docSnippet document hand\"><div class=\"snippetWrapper\" id=\"snippet-"+ tmpName +"\">\
                        <button class=\"open-document\" id=\""+ tmpName +"\"></button>"
                        + WD_getKoiDocumentSnippet(idx) + "</div></li>";
 
        $('#DocumentListing').append(fullSnippet);
        
        if(getCurrentDocumentName() == tmpName)
        {
            $('#snippet-'+getCurrentDocumentName()).hide();
            
            
        }
    }
    $('#snippet-'+getCurrentDocumentName()).fadeIn();
    $('.open-document').click
    (
        function () 
        { 
            var docContents;
            var docName;
            docName = $(this).attr('id');
            docContents = WD_loadDocument(docName) 
            if(docContents != undefined)
            {
                setCurrentDocumentName(docName);
                g_CKEditor.setData(
                docContents
                ,
                function()
                {
                    this.checkDirty();    // true
                }
                );
            }
        }
    );
}
function saveKoiDocument()
{
    WD_saveCurrentDocument(getCurrentDocumentName(), g_CKEditor.getData());
    g_CKEditor.fire('saveSnapshot');
    reloadDocumentPanel();   
}