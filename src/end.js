	if (typeof window != 'undefined') {
		var oldSteal = window.steal;
		window.steal = makeSteal(System);
		window.steal.startup(oldSteal && typeof oldSteal == 'object' && oldSteal  );
		window.steal.addSteal = addSteal;
		
	} else {
    	
		require('systemjs');
			
		global.steal = makeSteal(System);
		global.steal.System = System;
		global.steal.dev = require("./dev.js");
		steal.clone = makeSteal;
		module.exports = global.steal;
		global.steal.addSteal = addSteal;
	}
    
    
})(typeof window == "undefined" ? global : window);