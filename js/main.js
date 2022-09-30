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

// Закрытие меню при нажатии на ссылку

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

var openModals = document.querySelector('.hero__btn'),
  modal = document.querySelector('.popup'),
  overlay = document.querySelector('.overlay'),
  close = document.querySelector('.popup__close');
bodyPopup = document.body;

openModals.addEventListener("click", popupOpen);
close.addEventListener("click", popupClose);
overlay.addEventListener("click", popupClose);

function popupOpen(q) {
  modal.classList.add('open');
  overlay.classList.add('open');
  bodyPopup.classList.add('noscroll');
}

function popupClose(q) {
  modal.classList.remove('open');
  overlay.classList.remove('open');
  bodyPopup.classList.remove('noscroll');
}

// openModal.onclick = function () {
//   modal.classList.add('open');
//   overlay.classList.add('open');
//   bodyPopup.classList.add('noscroll');
// }

// close.onclick = function () {
//   modal.classList.remove('open');
//   overlay.classList.remove('open');
//   bodyPopup.classList.remove('noscroll');
// }

// overlay.onclick = function () {
//   modal.classList.remove('open');
//   this.classList.remove('open');
//   bodyPopup.classList.remove('noscroll');
// }

//Плавная прокрутка до нужной секции

$('.header__nav a, .footer__nav a, .hero__slider-link').on('click', function () {
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
      $('.scroll-top').show();
    } else {
      $('.scroll-top').hide();
    }
  });

  $('.scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false
  });
});

// Аккордион

$(function () {
  $("#accordion").accordion({
    active: false,
    heightStyle: "content",
    collapsible: true,
  });
})

// Табы

$("#tabs").tabs({
  show: { effect: "blind", duration: 800 },
  hide: { effect: "blind", duration: 800 },
  heightStyle: "content",
  collapsible: true,
  active: false,
});

// Слайдер

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

// Открыть модальном
function openModal() {
  document.getElementById("myModal").classList.add('visible');
  document.querySelector(".gallery__overlay").classList.add('visible');
  document.body.classList.add('noscroll');
}

// Закрыть модальное
function closeModal() {
  document.getElementById("myModal").classList.remove('visible');
  document.querySelector(".gallery__overlay").classList.remove('visible');
  document.body.classList.remove('noscroll');
}

var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад контроль
function plusSlides(n) {
  showSlides(slideIndex += n);
  return false
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  return false
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery__slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("gallery__actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "gallery__actives";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
