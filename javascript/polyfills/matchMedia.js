// https://github.com/lukePeavey/matchMedia
window.matchMedia=function(a,b,c){function d(a){this.media="string"==typeof a?a:"not all",this._data={listeners:[],status:c}}var e,f,g,h,i;a.matchMedia||a.msMatchMedia;return(f=a.styleMedia||a.media)||(g=b.createElement("style"),h=b.getElementsByTagName("script")[0],g.id="_mq-test",g.type="text/css",h&&h.parentNode.insertBefore(g,h)||b.head.appendChild(g),i="getComputedStyle"in a&&a.getComputedStyle(g,null)||g.currentStyle,f={matchMedium:function(a){var b="@media "+a+"{ #_mq-test { width: 1px; } }";return g.styleSheet?g.styleSheet.cssText=b:g.textContent=b,"1px"===i.width}}),Function.prototype.bind&&a.addEventListener&&Array.prototype.map?(e={mediaQueryLists:[],bind:function(a){this.mediaQueryLists.push(a)},unbind:function(a){this.mediaQueryLists=this.mediaQueryLists.filter(function(b){return b!==a})},observeMediaQueries:function(){this.mediaQueryLists.length&&this.mediaQueryLists.forEach(function(a){a.matches!==a._data.status&&(a._data.status=!a._data.status,a._data.listeners.forEach(function(b){b.call(a,a)}))})},init:function(){a.MediaQueryObserver&&a.MediaQueryObserver.destroy(),a.addEventListener("resize",this.observeMediaQueries=this.observeMediaQueries.bind(this)),a.MediaQueryObserver=this},destroy:function(){a.removeEventListener("resize",this.observeMediaQueries)}},e.init(),Object.defineProperties(d.prototype,{addListener:{value:function(a){var b=this._data.listeners;"function"==typeof a&&(0===b.length&&(this._data.status=this.matches,e.bind(this)),b.push(a))},writable:!0},removeListener:{value:function(a){this._data.listeners=this._data.listeners.filter(function(b){return b!==a}),0===this._data.listeners.length&&e.unbind(this)},writable:!0},matches:{get:function(){return f.matchMedium(this.media)}}}),function(a){return new d(a)}):function(a){return{media:"string"==typeof a?a:"all",matches:f.matchMedium(a)}}}(window,document);