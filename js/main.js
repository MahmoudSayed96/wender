$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    stagePadding: 70,
    autoWidth: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $(".navbar-nav .nav-item").on('click',function(){
	   $(this).addClass("active").siblings().removeClass("active");
  });
  $(".navbar-nav .nav-item .nav-link").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      let hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
