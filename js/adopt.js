/*! Adopt.js - v0.1.0 - Vivek Patel, 2013; MIT License */
(function(b){b.fn.adopt=function(){this.each(function(){b(this).contents().filter(function(){return 3===this.nodeType}).each(function(){var a=this.data.lastIndexOf(" ");0<a&&a<this.data.length-1&&(this.data=this.data.substring(0,a)+"\u00a0"+this.data.substring(a+1))})})}})(jQuery);
