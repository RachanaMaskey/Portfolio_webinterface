$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,             // How many slides visible
    slidesToScroll: 1,           // Scroll 1 at a time
    infinite: true,
    dots: true,                  // Optional: navigation dots
    arrows: true,                // Optional: left/right arrows
    autoplay: true,              // Optional: autoplay
    autoplaySpeed: 3000,         // Autoplay interval in ms
    responsive: [
      // {
      //   breakpoint: 768,         // Mobile breakpoint
      //   settings: {
      //     slidesToShow: 1
      //   }
      // },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2
      //   }
      // }
    ]
  });
});
