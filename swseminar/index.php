<?php

// If you need PHP code, add it here

?><!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <title>Markers Layer Example</title>

	<!-- Warning: Including (at least this version of) Bootstrap breaks the map -->
    <!-- <link rel="stylesheet" href="lib/bootstrap/2.0.3/css/bootstrap.min.css" /> -->
	<link rel="stylesheet" href="lib/open-layers/2.12/theme/default/style.css" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">

	<!-- Configuration and Utilities -->
    <script type="text/javascript" src="js/SvgUtils.js"></script>
    <script type="text/javascript" src="js/config.js"></script>


	<!-- External Libraries -->
    <script type="text/javascript" src="lib/underscore/1.3.1/underscore.js"></script>
    <script type="text/javascript" src="lib/jquery/1.7.2/jquery.js"></script>
    <script type="text/javascript" src="lib/jquery-ui/1.8.16/ui/jquery-ui.js"></script>
    <script type="text/javascript" src="lib/backbone/0.9.2/backbone.js"></script>
    <script type="text/javascript" src="lib/open-layers/2.12/OpenLayers.js"></script>
    <script type="text/javascript" src="lib/RDFauthor/current/src/rdfauthor.js"></script>    


	<!-- Our files -->    
    <script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/SparqlServiceHttp.js"></script>
    <script type="text/javascript" src="js/jquery.ssb.map.js"></script>
    <script type="text/javascript" src="js/RdfGraph.js"></script>
    <script type="text/javascript" src="js/MapView.js"></script>

  </head>
  <body>
    <h1 id="title">Markers Layer Example</h1>
    <div id="tags">Marker, event, mousedown, popup, inco</div>
    <div id="shortdesc">Show markers layer with different markers</div>
    <div id="map" class="mymap"></div>
    <div id="docs">
        <p>This is an example of an OpenLayers.Layers.Markers layer that shows
        some examples of adding markers.  Also demonstrated is registering a
        mousedown effect on a marker.</p>
    </div>
  </body>
</html>
