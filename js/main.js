// Слайдер

$('.hero__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//Плавная прокрутка до нужной секции

$('.header__nav a, .footer__nav a').on('click', function () {
  let href = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 600,
    easing: "linear"
  });

  return false
})

// Кнопка прокрутки вверх

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('.scroll_top').show();
    } else {
      $('.scroll_top').hide();
    }
  });

  $('.scroll_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false
  });
});

// popup оставить заявку

const openPopup = document.getElementById('popup__open');
const closePopup = document.getElementById('popup__close');
const popup = document.getElementById('popup');

openPopup.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.add('active');
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
});


// Tabs

$( function() {
  $( "#tabs" ).tabs({
    heightStyle: "content",
    collapsible: true,
    active: false
  });
} );
