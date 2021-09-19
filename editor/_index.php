<?php //avoid duplicate content
if($_SERVER['HTTP_HOST'] != "www.koi-writer.com")
{Header("HTTP/1.1 301 Moved Permanently");Header("Location: http://www.koi-writer.com/editor/");  
}
else
{
?> 
<!doctype html>  
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ --> 
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>Koi Writer Text Editor</title>
    <meta name="description" content="Koi Writer Text Editor">
    <meta name="author" content="Simon Siegenthaler, Matthias Jost">
    <!--  Mobile viewport optimized: j.mp/bplateviewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS : implied media="all" -->
    <link rel="stylesheet" href="css/style.css?v=3">
    <link rel="stylesheet" href="css/editor.css?v=3">
    <link rel="stylesheet" href="css/icons.css?v=3">
    <link rel="stylesheet" href="css/footer.css?v=3">
    <link rel="stylesheet" href="css/helpers.css?v=3">
    <!-- Google Fonts WE use -->
    <link href='http://fonts.googleapis.com/css?family=Anonymous+Pro:regular,italic,bold,bolditalic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:regular,italic,bold,bolditalic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Nobile:regular,italic,bold,bolditalic' rel='stylesheet' type='text/css'>
    <!-- Uncomment if you are specifically targeting less enabled mobile browsers
    <link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->
    <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
    <script src="js/libs/modernizr-1.6.min.js"></script>
</head>
<body>
    <div id="container">
        <header>
        </header>
        <div id="main">
            <div id="editor-wrapper" class="h-center clearfix">
                <div id="menu-container">
                    <ul id="menu" style="display:none">
                        <li class="icon icon-font hand inactive"></li>
                            <ul class="ribbon font" style="display:none">
                                <li id="FontButtonAnonymousPro" class="hand anonymus-pro">Anonymus Pro</li>
                                <li id="FontButtonDroidSerif"  class="hand droid-serif">Droid Serif</li>
                                <li id="FontButtonNobile"  class="hand noblie">Nobile</li>
                            </ul>
                        <li class="icon icon-selected hand inactive"></li>
                            <ul class="ribbon selected" style="display:none"><li>
                                <ul class="reiter">
                                    <li id="FormatRegular" class="icon icon-regular inactive hand"></li>
                                    <li id="FormatBold" class="icon icon-bold inactive hand"></li>
                                    <li id="FormatItalic" class="icon icon-italic inactive hand"></li>
                                    <li  id="FormatBoldItalic" class="icon icon-bolditalic inactive hand"></li>
                                    <li  id="FormatUnderline" class="icon icon-underlined inactive hand"></li>
                                </ul>
                        </li>
                        <li>
                            <ul class="reiter">
                                <li id="FormatP" class="icon icon-p inactive hand"></li>
                                <li id="FormatHeading1" class="icon icon-h1 inactive hand"></li>
                                <li id="FormatHeading2" class="icon icon-h2 inactive hand"></li>
                                <li id="FormatHeading3" class="icon icon-h3 inactive hand"></li>
                            </ul>
                        </li>
                        <li>
                            <ul class="reiter">
                                <li id="BulletedListButton" class="icon icon-bulletedlist inactive hand"></li>
                                <li id="NumberedListButton"  class="icon icon-numberedlist inactive hand"></li>
                            </ul>
                        </li>
                    </ul>
                    <li class="icon icon-paragraph hand inactive"></li>
                        <ul class="ribbon paragraph" style="display:none">
                            <li>
                                <ul class="reiter">
                                    <li id="FontSizeIncrement" class="icon icon-plus inactive hand"></li>
                                    <li id="FontSizeDecrement" class="icon icon-minus inactive hand"></li>
                                    <li id="FontSizeCurrent" class="icon white-bg"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="reiter">
                                    <li id="JustifyLeftButton" class="icon icon-textalignleft inactive hand"></li>
                                    <li id="JustifyCenterButton" class="icon icon-textaligncentered inactive hand"></li>
                                    <li id="JustifyRightButton"  class="icon icon-textalignright inactive hand"></li>
                                    <li id="JustifyBlockButton"  class="icon icon-textalignjustify inactive hand"></li>
                                </ul>
                            </li>
                            <li>
                                <ul class="reiter">
                                    <li id="EditorSmallWidth" class="icon icon-smallwidth inactive hand"></li>
                                    <li id="EditorMediumWidth" class="icon icon-mediumwidth inactive hand"></li>
                                    <li id="EditorLargeWidth" class="icon icon-widewidth inactive hand"></li>
                                </ul>
                            </li>
                        </ul>
                    <li class="icon icon-background hand inactive"></li>
                       	<ul class="ribbon background" style="display:none">
							<li class="bg-1 hand"><img height="91" width="91" src="images/bg/1.png" alt="background image 1" /></li>
							<li class="bg-3 hand"><img height="91" width="91" src="images/bg/3.png" alt="background image 3" /></li>
							<li class="bg-2 hand"><img height="91" width="91" src="images/bg/2.png" alt="background image 2" /></li>
							<li class="bg-4 hand"><img height="91" width="91" src="images/bg/4.png" alt="background image 4" /></li>
							<li class="bg-5 hand"><img height="91" width="91" src="images/bg/5.png" alt="background image 5" /></li>
							<li class="bg-6 hand"><img height="91" width="91" src="images/bg/6.png" alt="background image 6" /></li>
							<li class="bg-7 hand"><img height="91" width="91" src="images/bg/7.png" alt="background image 7" /></li>
						</ul>
                    <li id="SaveKoiButton" class="icon icon-save hand inactive"></li>
                </ul>
            </div>
            <div id="editor" class="min-width"></div>
        </div>
    </div>
    <footer>
        <span id="footer">
            <div id="logo" class="hand">
                <div class="slogan">

                <iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.koi-writer.com&amp;layout=box_count&amp;show_faces=false&amp;width=80&amp;action=recommend&amp;font=tahoma&amp;colorscheme=light&amp;height=65" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:80px; height:65px;" allowTransparency="true"></iframe>
                </div>
            </div>
            <div id="panel-closed">
                <div class="open-panel h-center hand"></div>
                </div>
                <div id="panel-opened" style="display:none">
                <div class="close-panel h-center hand"></div>
                <ul id="DocumentListing"></ul>
            </div>
        </span>
        <!-- <div class="animated-bg" style="width: 100%; height: 100%; overflow: hidden; position: absolute; top: 0; left: 0;">
        <div class="animate-one"></div>
            <img class="animated-one" style="width: 100%; height: 100%; overflow: hidden; position: absolute; top: 0; left: 0;" src="images/bg/animated/1.png" />
            <img class="animated-two" style="width: 100%; height: 100%; overflow: hidden; position: absolute; top: 0; left: 0;" src="images/bg/animated/2.png" />
            <img class="animated-three" style="width: 100%; height: 100%; overflow: hidden; position: absolute; top: 0; left: 0;" src="images/bg/animated/3.png" />
            <img class="animated-four" style="width: 100%; height: 100%; overflow: hidden; position: absolute; top: 0; left: 0;" src="images/bg/animated/4.png" />
        <div> -->
    </footer>
    </div> <!-- end of #container -->
    <!-- Javascript at the bottom for fast page loading -->
    <!-- scripts concatenated and minified via ant build script -->
    <!-- <script type="text/javascript" src="js/libs/jquery-1.4.2.min.js"></script> --> 
    <script type="text/javascript" src="js/libs/jquery-1.5.2.min.js"></script>
    <script type="text/javascript" src="js/plugins.js"></script>
    <script type="text/javascript" src="js/libs/jquery.hoverIntent.minified.js"></script>
    <script type="text/javascript" src="js/libs/jquery.hotkeys.js"></script>
    
    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
    <script type="text/javascript" src="ckeditor/adapters/jquery.js"></script>
    <script type="text/javascript" src="js/writer-logic.js"></script>
    <script type="text/javascript" src="js/writer-presentation.js"></script>
    <script type="text/javascript" src="js/writer-data.js"></script>
    <!-- end concatenated and minified scripts -->
    <!--[if lt IE 7 ]>
        <script src="js/libs/dd_belatedpng.js"></script>
        <script> DD_belatedPNG.fix('img, .png_bg'); //fix any <img> or .png_bg background-images </script>
    <![endif]-->
    <!-- yui profiler and profileviewer - remove for production> -->
    <!-- <script src="js/profiling/yahoo-profiling.min.js"></script>
        <script src="js/profiling/config.js"></script> -->
    <!-- end profiling code -->
    <!-- asynchronous google analytics: mathiasbynens.be/notes/async-analytics-snippet 
       change the UA-XXXXX-X to be your site's ID> -->
    <script>
        var _gaq = [['_setAccount', 'UA-19817615-1'], ['_trackPageview']];
        (function(d, t) {
         var g = d.createElement(t),
             s = d.getElementsByTagName(t)[0];
         g.async = true;
         g.src = ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
         s.parentNode.insertBefore(g, s);
        })(document, 'script');
    </script>
  <!-- end analytics code -->
</body>
</html>
<?php
}
?>