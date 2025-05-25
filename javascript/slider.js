$(document).ready(function () {
  $('.portfolio-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  });
});

console.log('JS is loaded');