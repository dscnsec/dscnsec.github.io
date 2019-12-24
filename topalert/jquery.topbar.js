/*
 *  jQuery TopBar - v0.1.0
 *  A top bar for notifications. Dismiss it by clicking the x.
 *  http://github.com/audreyr/topbar
 *
 *  Made by Audrey Roy
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var topBar = "topBar",
				defaults = {
				slide: false
		};

		// The actual plugin constructor
		function TopBar ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = topBar;
				this.init();
		}

		TopBar.prototype = {
				init: function () {
						// Place initialization logic here
						// You already have access to the DOM element and
						// the options via the instance, e.g. this.element
						// and this.settings
						// you can add more functions like the one below and
						// call them like so: this.yourOtherFunction(this.element, this.settings).
						console.log("xD");
            $(this.element).on("click", this.close);
				},
				close: function () {
						// Close the notification
            var $parent = $(this);
            $parent.remove();
				}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ topBar ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + topBar ) ) {
								$.data( this, "plugin_" + topBar, new TopBar( this, options ) );
						}
				});
		};

})( jQuery, window, document );