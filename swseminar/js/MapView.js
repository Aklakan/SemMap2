var semmap;
(function($, _) {

(function(ns) {

	ns.MapView = Backbone.View.extend({
	    tagName: 'div',
	    attributes: {style: 'float: left'},
	    events: { 
//	      'click span.swap':  'swap',
//	      'click span.delete': 'remove'
	    },    
	    initialize: function() {
	      _.bindAll(this, 'render', 'unrender', 'remove'); // every function that uses 'this' as the current object should be in here

	      this.model.bind('change', this.render, this);
	      this.model.bind('remove', this.unrender, this);
	    },
	    render: function() {

	    	// Create the old map widget (this call returns a domElement)
	      this.$el.ssb_map();
	      
	      // Get the actual widget (not the domElement, but the object)
	      var legacyWidget = this.$el.data("ssb_map");
	      
	      // Extract the map
	      this.map = legacyWidget.map;
	      
	      var self = this;
	      
			this.map.events.register("moveend", this, function(event) {
				self.trigger("mapevent", event, {"map": self.map});
			});
			
			this.map.events.register("zoomend", this, function(event) {
				self.trigger("mapevent", event, {"map": self.map});
			});
			    
	      return this;
	    },
	    unrender: function() {
	      $(this.el).remove();
	    },
	    remove: function(){
	      this.model.destroy();
	    }
	});
	
})(semmap || (semmap = {}));
})(jQuery, _);

