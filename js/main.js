// Бургер меню

const hamb = document.querySelector("#hamb");
const hambPopup = document.querySelector("#hamb__popup");
const menu = document.querySelector("#hamb__menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  hambPopup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  hambPopup.appendChild(menu);
};

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  hambPopup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// popup оставить заявку

const openPopup = document.getElementById('popup__open'); // ссылка открытия
const closePopup = document.getElementById('popup__close'); //ссылка закрытия
const popup = document.getElementById('popup'); // тело popup
const popupBody = document.getElementById('popup');
const bodyPopup = document.body;

openPopup.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.add('active');
  bodyPopup.classList.toggle("noscroll");

});

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  bodyPopup.classList.remove("noscroll");
});

popupBody.addEventListener('click', () => {
  popup.classList.remove('active');
  bodyPopup.classList.remove("noscroll");
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

// Слайдер

$(function () {
  $('.hero__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          arrows: false
        }
      }
    ]
  });
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

$(function () {
  $("#accordion").accordion({
    active: false,
    heightStyle: "content",
    collapsible: true
  });
})

$("#tabs").tabs({
  show: { effect: "blind", duration: 800 },
  hide: { effect: "blind", duration: 800 },
  heightStyle: "content",
  collapsible: true,
  active: false
});

$(function () {
  $('.gallery__list').slick({
    responsive: [{
      breakpoint: 2048,
      settings: "unslick"
    },
    {
      breakpoint: 430,
      settings: {
        arrows: false,
        infinite: true,
        dots: true,
        adaptiveHeight: true
      }
    },
    ]
  });
});
