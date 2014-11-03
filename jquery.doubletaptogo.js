/*
	Originally by Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;(function($, window, document, undefined) {
	$.fn.doubleTapToGo = function(options) {
		var enabled = ! ( typeof options === 'object' && options.disable === true );

		if (!('ontouchstart' in window) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i )) return false;

		this.each(function() {
			var curItem = false;

			if ( enabled ) {
				$(this).on('click.dttg',function(e){
					var item = $(this);

					if ( item[0] != curItem[0] ) {
						e.preventDefault();
						curItem = item;
					}
				});
			} else {
				$(this).off('click.dttg');
			}

			$(document).on('click touchstart MSPointerDown', function(e) {
				var resetItem = true,
					parents = $(e.target).parents();

				for (var i = 0; i < parents.length; i++)
					if (parents[i] == curItem[0])
						resetItem = false;

				if(resetItem)
					curItem = false;
			});
		});
		return this;
	};
})(jQuery, window, document);
