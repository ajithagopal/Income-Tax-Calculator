

/** Load HTML */
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = $(this).data('include') + '.html'
    $(this).load(file)
  });
});




/* System */  
var prevScrollpos = window.pageYOffset;
$(window).scroll(function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  $(".top-header-menu").removeClass('bl-header-active');
  $(".desktop-popup-menu .header-search").hide();

  //$(".header-bar").css("position","sticky");

  if($(".desktop-popup-menu").hasClass("popup-menu-open")){
    $(".header-bar").addClass("backward-scroll");
    return false;
  }

  $(".header-bar").removeClass("forward-scroll");
  $(".header-bar").addClass("backward-scroll");
    if ($(this).scrollTop()>0)
    {
      $(".pulltorefresh").hide();
    }
    else{
      $(".pulltorefresh").show();
      $(".pulltorefresh").css({"padding-bottom":"10px"});
      //location.reload(true);
    }
  
  
} else {
  $(".top-header-menu").addClass('bl-header-active');
  $(".desktop-popup-menu .header-search").show();

  if($(".desktop-popup-menu").hasClass("popup-menu-open")){
    $(".header-bar").addClass("backward-scroll");
    return false;
  }

  //$(".header-bar").css("position","unset");

  $(".header-bar").removeClass("backward-scroll");
  $(".header-bar").addClass("forward-scroll");

}
prevScrollpos = currentScrollPos;
if ($(window).scrollTop()>200) {
  $(".top-header-menu").addClass('bl-header-active');$(".desktop-popup-menu .header-search").show();
}
else{
  $(".top-header-menu").removeClass('bl-header-active');$(".desktop-popup-menu .header-search").hide();
}
});
/* System */  

$(window).scroll(function() {
  if ($(this).scrollTop()>0)
  { /* on scroll */
      if($(window).width() >= 1000){ /* desktop */
          
      }
      else{ /* mobile */
          $("#header-bar-scroll").hide();
          $("#header-bar-noscroll-mobile").show();
          $(".secondary-menu").hide();
          //$(".mobile-menu-container").css({"margin-top":"50px"});
          //$(".mobile-menu-container").css({"top":"1px"});
          //$(".button-section .app-icon").css({"padding-bottom":"10px"});
          
          return false;
      }
  }
  else
  { /* no scroll */
      if($(window).width() >= 1000){ /* desktop */

      }
     else{ /* mobile */
        $("#header-bar-scroll").hide();
        $("#header-bar-noscroll-mobile").hide();
        $(".secondary-menu").show();
        //$(".mobile-menu-container").css({"top":"80px"});
        //$(".button-section .app-icon").css({"padding-bottom":"90px"});
        $(".header-bar").removeClass("backward-scroll");
        $(".header-bar").addClass("forward-scroll");
        
        return false; 
      }
  }
});

