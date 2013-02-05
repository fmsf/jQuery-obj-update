(function ( $ ) {
  $.fn.update = function(){
    var newElements = $(this.selector),i;    
    for(i=0;i<newElements.length;i++){
      this[i] = newElements[i];
    }
    for(;i<this.length;i++){
      this[i] = undefined;
    }
    this.length = newElements.length;
    return this;
  };
})(jQuery);