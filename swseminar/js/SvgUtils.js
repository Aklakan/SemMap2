var SvgUtils = {};

(function() {
(function(ns) {
	
	/**
	 * Check for SVG support
	 * 
	 * Source: http://stackoverflow.com/questions/654112/how-do-you-detect-support-for-vml-or-svg-in-a-browser
	 * @returns true if SVG Shapes are supported.
	 */
	ns.supportsSvg = function() {
	    //var result = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0");
	    var result = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
	    //var result = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect;
	    
	    return result;
	}

})(SvgUtils);
})();