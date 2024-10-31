(function ($) {
  "use strict";

  // Configuración de constantes
  const NAV_TEXT = ["next", "previous"];
  const AUTOPLAY_TIMEOUT = 5000;
  const SLIDE_SPEED = 1000;

  // Popup para videos
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // Función para inicializar carousels
  function initCarousel(selector, options) {
    if ($(selector).length) {
      $(selector).owlCarousel(options);
    }
  }

  // Carousel de testimonios
  initCarousel('.textimonial_iner', {
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: AUTOPLAY_TIMEOUT,
    nav: false
  });

  // Carousel de productos
  initCarousel('.best_product_slider', {
    items: 4,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: AUTOPLAY_TIMEOUT,
    nav: true,
    navText: NAV_TEXT,
    responsive: {
      0: { margin: 15, items: 1, nav: false },
      576: { margin: 15, items: 2, nav: false },
      768: { margin: 30, items: 3, nav: true },
      991: { margin: 30, items: 4, nav: true }
    }
  });

  // Carousel de lista de productos
  initCarousel('.product_list_slider', {
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: AUTOPLAY_TIMEOUT,
    nav: true,
    navText: NAV_TEXT,
    smartSpeed: SLIDE_SPEED,
    responsive: {
      0: { margin: 15, nav: false, items: 1 },
      600: { margin: 15, items: 1, nav: false },
      768: { margin: 30, nav: true, items: 1 }
    }
  });

  // Popup para galería de imágenes
  if ($('.img-gal').length) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });
  }

  // Carousel del banner
  $('.banner_slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    const carousel = e.relatedTarget;
    $('.slider-counter').text(pad2(carousel.current()));
  }).owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: AUTOPLAY_TIMEOUT,
    nav: true,
    navText: NAV_TEXT,
    smartSpeed: SLIDE_SPEED,
    responsive: {
      0: { nav: false },
      600: { nav: false },
      768: { nav: true }
    }
  });

  // Función para agregar ceros a la izquierda
  function pad2(number) {
    return (number < 10 ? '0' : '') + number;
  }

  // Inicialización de niceSelect
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // Contador
  $('.counter').counterUp({ time: 2000 });

  // Slick slider
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay: true,
    pauseOnFocus: true,
    dots: true
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [{ breakpoint: 480, settings: { centerMode: false } }]
  });

  // Toggle de búsqueda
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  // Función para Mailchimp
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  // Temporizador
  function makeTimer() {
    const endTime = new Date("27 Sep 2019 12:56:00 GMT+01:00");
    const now = new Date();
    const timeLeft = (endTime - now) / 1000;

    const days = Math.floor(timeLeft / 86400);
    const hours = Math.floor((timeLeft % 86400) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);

    $("#days").html("<span>Days</span>" + pad2(days));
    $("#hours").html("<span>Hours</span>" + pad2(hours));
    $("#minutes").html("<span>Minutes</span>" + pad2(minutes));
    $("#seconds").html("<span>Seconds</span>" + pad2(seconds));
  }

  setInterval(makeTimer, 1000);

  // Click counter
  (function () {
    window.inputNumber = function (el) {
      const min = el.attr('min') || false;
      const max = el.attr('max') || false;

      el.each(function () {
        const input = $(this);
        const dec = input.prev('.inumber-decrement');
        const inc = input.next('.number-increment');

        dec.on('click', function () {
          let value = parseInt(input.val()) || 0;
          if (!min || value > min) {
            input.val(--value);
          }
        });

        inc.on('click', function () {
          let value = parseInt(input.val()) || 0;
          if (!max || value < max) {
            input.val(++value);
          }
        });
      });
    };
  })();

  // Inicializar click counter
  inputNumber($('.input-number'));

  // Carousel de producto vertical
  var product_overview = $('#vertical');
  if (product_overview.length) {
    product_overview.lightSlider({
      gallery: true,
      item: 1,
      vertical: true,
      verticalHeight: 450,
      thumbItem: 3,
      slideMargin: 0,
      speed: 600,
      autoplay: true,
      responsive: [
        { breakpoint: 991, settings: { item: 1 } },
        { breakpoint: 576, settings: { item: 1, verticalHeight: 350 } }
      ]
    });
  }

  // Dropdown en mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown').hover(
          function () {
            $('.dropdown-toggle', this).trigger('click');
          },
          function () {
            $('.dropdown-toggle', this).trigger('click').blur();
          }
        );
      } else {
        $('.navbar .dropdown').off('mouseenter mouseleave');
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Botón de volver al principio
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Carousel de proveedores
  initCarousel('.vendor-carousel', {
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: SLIDE_SPEED,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
      1200: { items: 6 }
    }
  });

  // Carousel relacionado
  initCarousel('.related-carousel', {
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: SLIDE_SPEED,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  });

  // Cantidad de productos en el carrito
  $('.quantity button').on('click', function () {
    const button = $(this);
    const input = button.closest('.quantity').find('input');
    let oldValue = parseInt(input.val());

    const newValue = button.text() === "+" ? oldValue + 1 : Math.max(oldValue - 1, 1);
    input.val(newValue);
  });

})(jQuery);
