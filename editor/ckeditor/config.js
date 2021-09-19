/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	config.language = 'en';
	config.toolbarStartupExpanded = false;
    config.removePlugins =
        'about,' +
		'a11yhelp,' +
		'bidi,' +
		'blockquote,' +
		'button,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		'flash,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'popup,' +
		'preview,' +
		'resize,' +
		'save,' +
		'scayt,' +
		'smiley,' +
		'showblocks,' +
		'showborders,' +
		'stylescombo,' +
		'tab,' +
		'templates,' +
		'toolbar,';
	config.resize_enabled = false;
	config.bodyId = 'ContentsBody';
	config.forcePasteAsPlainText = true;
	config.disableNativeSpellChecker = true;
    config.extraPlugins = 'ckeditor_autogrow';
    config.minHeight = 500;
    config.maxHeight = 0;
    //config.extraPlugins = 'statistics';
    //config.extraPlugins = 'MediaEmbed';
}; 
