//Based on the source of: http://www.kuba.co.uk/blog.php?blog_id=20
CKEDITOR.plugins.add
( 
    'statistics',
    {
        init : function( editor )
        {
            var pluginName = 'statistics';

            // Register the command.
            var command = editor.addCommand( pluginName, CKEDITOR.plugins.statistics );

            // Register the toolbar button.
            /*editor.ui.addButton
            ( 
                'wordcount',
                {
                    label : "Word count", 
                    command : pluginName,
                    icon: this.path + 'icon.png'
                }
            );*/
        }
    } 
);

CKEDITOR.plugins.statistics =
{
	exec : function(editor)
	{
       /* var docFull = '';
        var start = '';
        var end = '';
        var snippet = '';
        var matches = '';
        var matches2 = '';
        var wCount = 0;
        var pos = 0;
        var noSpaceText = '';
		docFull = g_CKEditor.getData();
        start = docFull.lastIndexOf("<body>");
        start +=  6;
        end = docFull.lastIndexOf("</body>");
        snippet = docFull.slice(start,end);
        snippet = snippet.replace(/<[^<|>]+?>| /gi,' ');
		matches = snippet.match(/\b/g);
        noSpaceText = snippet.replace(/\s/g,'');
        noSpaceText = noSpaceText.replace(/\n/g,'');
		if(matches) 
        {
			wCount = matches.length/2;
		}
        $('#Statistics').html(wCount+' words ' + noSpaceText.length + ' characters');*/
	}
};