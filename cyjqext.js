/********************************************
 *   CYJQext - Extends the jQuery
 *   made with 13 of <3 from Andalusia
 * 
 *   (C) Ignacio Ramos 2018 
 *   TW/FB/IG/IN>> @irfaelo
 *   >> indianayourself.com
 *////////////////////////////////////////// 

var ver = 1801;

//extending 

jQuery.fn.extend({

  //>>checks a checkbox or radio
  check: function() {
    return this.each(function() {
      this.checked = true;
    });
  },
  //>> unchecks a checkbox or radio
  uncheck: function() {
    return this.each(function() {
      this.checked = false;
    });
  },
  //>>get class of elm
  getClass: function() {
      return this.attr('class');
  }  
});


/*** visual ***/
		function fade_inout(e_out,e_in )
			{ 
				$(e_out).fadeOut( 250, function(){
				$(e_in).fadeIn( 250 );
				});
			}
      
      
