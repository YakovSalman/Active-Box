$(function () {
  // fixed Teader

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  $(window).on("scroll load resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    nav.removeClass("show");

    let elementId = $(this).data("scroll");
    let elemrntOffset = $(elementId).offset().top;

    $("html, body").animate(
      {
        scrollTop: elemrntOffset - 70,
      },
      700
    );
  });

  // navToggle

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
  });

  // reviewsSlider : https://kenwheeler.github.io/slick/
  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
