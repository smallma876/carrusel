$(document).ready(function(){
  $(".owl-carousel").owlCarousel(opciones());
});

function opciones(){
/*	var options = {};
  options.center =  true;

  options.loop = false;
  options.margin = 2;
                
                options.responsive = {
                  600: {
                    items: 2
                  }
                }*/

  var options = {};
  options.center =  true;
	//options.autoWidth = true;
	options.loop = false;
	options.margin = 2;
	options.nav = true;
	options.dotsEach = true;
  options.dots = true;
  
  options.responsive = {
	  600: {
	    items: 2
	  }
	}
    return options;
}