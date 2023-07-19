$(function () {
  "use strict";

  // Sticky Navbar Navigation
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".stick").addClass("sticky");
    } else {
      $(".stick").removeClass("sticky");
    }
  });

  // Scroll Navbar
  $("body").scrollspy({
    target: ".navbar",
    offset: 25,
  });

  $("#navbarSupported a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Navbar Mobile
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // Preloader
  $(window).on("load", function () {
    $("#preloader").delay(2000).fadeOut("slow");
    $("body").delay(2000).css({
      overflow: "visible",
    });
  });

  // Carousel Custom
  $(".carousel").carousel({
    interval: 3800,
  });

  // Magnific Iframe Popup + Header
  $(".home-center-desc").magnificPopup({
    delegate: "a.icon",
    type: "iframe",
  });

  // Magnific Popup + Projects
  $(".project").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
