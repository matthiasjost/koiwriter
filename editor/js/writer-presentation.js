/* KOI Writer	http://www.koi-writer.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Name:		writer-presentation.js
Author: 	Simon Siegenthaler, Matthias Jost
Created:	2011
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/* Logo */
var g_RibbonNames = 
[
	'.background',
    '.selected',
    '.font',
    '.paragraph'
];
var g_IconNames = 
[
	'.icon-background',
    '.icon-selected',
    '.icon-font',
    '.icon-paragraph'
];
//Menu Watchdog Variables
var g_MenuWDHandle;
var g_MenuWDCounter = 0;

var g_PanelWDHandle;
var g_PanelWDCounter = 0;

//If this variables goes to 1 text has been selected an menu was hidden
var g_TextSelectionState = 0;


function showOrHideCategories(openItem)
{
    var num = g_RibbonNames.length;
    for (idx=0; idx<num; idx++)
    {
        if(g_RibbonNames[idx] == openItem)
        {
             $(g_IconNames[idx]).removeClass('inactive');
             $(g_IconNames[idx]).addClass('active');
            $(g_RibbonNames[idx]).show();
        }
        else
        {
            $(g_IconNames[idx]).removeClass('active');
            $(g_IconNames[idx]).addClass('inactive');
            $(g_RibbonNames[idx]).hide();
        }
    }
}

$('#logo').click
(
    function()
    {
        $('.slogan').toggle();
    }
);
    
function openPanel()
{
    $('#panel-closed').hide(),
    $('#panel-opened').show(),
    $('#footer').css('height','140px'); 
}
function closePanel()
{
    $('#panel-opened').hide(),
    $('#panel-closed').show();
    $('#footer').css('height','7px');
}
function initPanel()
{
    /* Document Panel */
    $('.open-panel').click
    (
        function()
        {
            openPanel();
        }
    );
    $('.close-panel').click
    (
        function()
        {
            closePanel();

        }
    );
}
/* The Watchdog makes the menu a lot more smoother, it only fades out if for two seconds no fadeIn occurs */
/* In case of text selection the same mechanism is used */
function MenuWatchdog()
{
    g_MenuWDCounter++;
    if(g_MenuWDCounter > 20)
    {
        doMenuFadeOut();
    }
}

function doMenuFadeOut()
{
    $('#menu').fadeOut();
    disableMenuWatchdog();     
}
function enableMenuWatchdog()
{
    g_MenuWDHandle = setInterval
    (
        "MenuWatchdog()",
        1000
    );   
    
}
function disableMenuWatchdog()
{
    clearInterval(g_MenuWDHandle);
    g_MenuWDCounter = 0;
}




function initMenu()
{
    $(window).scroll
    (
        function() 
        {
            var height = window.pageYOffset;
            $('#menu-container').css('top', height-5 + 'px');
            doMenuFadeOut();
        }
    );

    $('#menu-container').hoverIntent
    (
        function () 
        {
            if(g_TextSelectionState != 1) //no need to fade in if 'selection opener' already did it
            {
                $('#menu').fadeIn();
                disableMenuWatchdog();
            }
        }
        , 
        function ()
        {
            if(g_TextSelectionState == 0) //keep menu open if text has been selected
                enableMenuWatchdog();
        }
    );
    /* Show or Hide Background Sub-Menu */
    $('.icon-background').click
    (
        function()
        {
            showOrHideCategories('.background');
        }
    );
    /* Show or Hide Selected Sub-Menu */
    $('.icon-selected').click
    (
        function()
        {
             showOrHideCategories('.selected');
        }
    );
    /* Show or Hide Font Sub-Menu */
    $('.icon-font').click
    (
        function()
        {
            showOrHideCategories('.font');
        }
    );
    /* Show or Hide Paragraph Sub-Menu */
    $('.icon-paragraph').click
    (
        function()
        {
            showOrHideCategories('.paragraph');
        }
    );
    /* Menu Items Background Sub-Menu */
    $('.bg-1').click(function()
    {
        WL_setEditorBackground(0);
    });
    $('.bg-2').click(function()
    {
        WL_setEditorBackground(1);

    });
    $('.bg-3').click(function()
    {
        WL_setEditorBackground(2);
    });
    $('.bg-4').click(function()
    {
        WL_setEditorBackground(3);

    });

    $('.bg-5').click(function()
    {
        WL_setEditorBackground(4);

    });

    $('.bg-6').click(function()
    {
        WL_setEditorBackground(5);

    });

    $('.bg-7').click(function()
    {
        WL_setEditorBackground(6);

    });
    
    $('#SaveKoiButton').click
	(
		function() 
		{ 
            saveKoiDocument();
            openPanel();
            reloadDocumentPanel();
		}
	);

    $('#menu').fadeIn();
    $('.reiter .icon').hoverIntent
    (
        function()
        {
            $(this).addClass('active');
            $(this).removeClass('inactive');
        }
        ,
        function()
        {
            $(this).removeClass('active');
            $(this).addClass('inactive');          
        }
    );
    $('.icon-save').hoverIntent
    (
        function()
        {
            $(this).addClass('active');
            $(this).removeClass('inactive');
        }
        ,
        function()
        {
            $(this).removeClass('active');
            $(this).addClass('inactive');          
        }
    );
    enableMenuWatchdog();
}


//this function will be called every few milliseconds from writer logic:  
function selectedMenuOpenIfSelected() 
{
    {
        if(checkIfTextSelected() == true)
        {
            if(g_TextSelectionState == 0)
                showOrHideCategories('.selected');
            if($('#menu').is(':visible') == false) 
            {
                //text is selected an menu is not visible (we do not want to close another menu if user is not in selected menu but somewhere else)
               
                $('#menu').fadeIn();
            }
            disableMenuWatchdog();
            g_TextSelectionState = 1;
        }
        else
        {
            if(g_TextSelectionState == 1) 
            {
                //ensures that menu will not fade out in case if text selection is not involved (normal menu usage)
                g_TextSelectionState = 0;
                enableMenuWatchdog();
            }
        }
    }
}
