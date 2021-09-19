<?php //avoid duplicate content
if($_SERVER['HTTP_HOST'] != "www.koi-writer.com")
{Header("HTTP/1.1 301 Moved Permanently");Header("Location: http://www.koi-writer.com");  
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
    <script type="text/javascript" src="js/jquery-1.3.2.min.js"></script> 
	<script type="text/javascript" src="js/ui.core.js"></script> 
	<script type="text/javascript" src="js/ui.accordion.js"></script>
	<link type="text/css" href="css/style.css" rel="stylesheet" /> 
    <link type="text/css" href="http://fonts.googleapis.com/css?family=Droid+Serif:regular,italic,bold,bolditalic" rel="stylesheet" /> 
    <script type="text/javascript" src="http://www.hellobar.com/hellobar.js"></script>
	<script type="text/javascript"> 
	$(function() 
    {
       $("#accordion").accordion
       ({
            autoHeight: false
        });
	});
    
	</script> 
</head> 
<body> 
 <script type="text/javascript"> 
 new HelloBar(20665,21538);
 </script> 
<div class="center-accordion">
	<div class="wrapper-top"></div>
	<div id="wrapper-logo">
		<img src="img/logo.png" alt="logo" width="360" height="239"/>
		<p>
			<!-- here could be a slogan -->
		</p>
	</div>
	<div id="accordion"> 
		<h3><a href="#">Koi Writer Text Editor</a></h3> 
            <div> 
                <p>
                Literary, subject-specific or personal text writing - as easy as using paper and pen. The user-friendly Koi Kriter application requires a short settling in period, allowing you to fully concentrate on your topic.</p>
                <hr />
                <p>Literarische, fachliche oder pers&ouml;nliche Texte schreiben - so einfach wie mit Block und Stift. Die Bedienung der Koi Writer online Anwendung erfordert ein Minimum an Eingew&ouml;hnungszeit. Dank der reduzierten Bedienungsoberfl&auml;che kannst Du dich ganz auf dein Thema konzentrieren.</p> 
            </div>
        <h3><a href="#">Credits</a></h3>
            <div> 
                <p>
                <b>Design</b><br/>Simon Siegenthaler<br /> 
                <b>Development</b><br/>Matthias Jost<br /> 
                <b>Idea and Concept</b><br/>Moritz Laass
                </p> 
            </div> 
		<h3><a href="#">Reviews</a></h3> 
            <div> 
            <ul>
                <li>
                <a href="http://www.makeuseof.com/dir/koi-writer-distraction-free-writing-environment/" target="_blank">Koi-Writer: Type in a distraction-free writing environment (makeuseof.com)</a><br />
                </li>
                <li>
                <a href="http://wwwhatsnew.com/2011/03/08/koi-writer-un-simple-e-impresionante-editor-de-texto-en-la-web/" target="_blank">Koi Writer - Un simple e impresionante editor de texto en la web (wwwhatsnew.com)</a><br />
                </li>
                <li>
                <a href="http://www.kabytes.com/aplicaciones-online/koi-writer-escribe-sin-distracciones/" target="_blank">Koi writer: escribe sin distracciones (kabytes.com)</a><br />
                </li>
                <li>
                <a href="http://www.appappeal.com/app/koi-writer/" target="_blank">Koi Writer Review (appappeal.com)</a><br />
                </li>
            </ul>
            </div> 
	</div>  
    <div id="starteditor"><div id="starteditorbutton"><h3><a href="editor/">Start Text Editor</a></h3></div></div>
	<div class="wrapper-bottom"></div>
</div>


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