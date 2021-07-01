const swiper = new Swiper('.portfolio__list', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 100,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

$('.menu a, .intro a, .footer__head a, .nav__items a').on('click', function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate(
    {
      scrollTop: top,
    },
    1100,
  );
});

$('.menu__btn').on('click', function () {
  $('.nav__items').toggleClass('nav__items--active');
});

$('.nav__link, .logo').on('click', function () {
  $('.nav__items--active').removeClass('nav__items--active');
});
