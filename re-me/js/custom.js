$(document).ready(function() {

  

  // Tabs

  $('.tabs__title').on('click', function() {
    var id = $(this).data('id');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.tabs-content__item').siblings().removeClass('active');
    $('.tabs-content__item[data-id=' + id + ']').addClass('active');
  });


    // Swipe-btn animation
  
  
    $('.swipe').click(function() {
    $('.main-menu').show('300');
  });
  
  $('.main-menu__close').click(function() {
    $('.main-menu').hide('300');
  });
  
  
   $('.btn-promotion').click(function() {
    $('.promotion-container').show('300');
  });
  
  $('.promotion-container__close').click(function() {
    $('.promotion-container').hide('300');
  });
  
  

  
 // Seen-slider

  $('.seen-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: $('.arrows-main--seen'),
    prevArrow: '<div class="arrow-btn arrow-btn--prev"></div>',
    nextArrow: '<div class="arrow-btn arrow-btn--next"></div>',
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
  
  
  
  // Animation input
  
$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});
  
  
   // Adaptive
  
//    if(device.desktop() != true) {
//       $(".wrapper-scroll").addClass("horwheel");
//    }

  
//  
//  // Scroll
//  
//  $('.scroll-list').mCustomScrollbar({
//    scrollButtons: {
//      enable: true
//    },
//    theme: "dark-thick"
//  });
//      

  
  
//  $('.catalog-menu-list').moreNav();
//  
// // Mmenu
//
//  $("#menu").mmenu({
//    navbar: {
//      title: "Меню"
//    }
//  });
//  

//
//  // Count
//
//  $('.minus').click(function() {
//    var $input = $(this).parent().find('input');
//    var count = parseInt($input.val()) - 1;
//    count = count < 1 ? 1 : count;
//    $input.eq(0).val(count);
//    return false;
//  });
//  $('.plus').click(function() {
//    var $input = $(this).parent().find('input'),
//      count = parseInt($input.val()) + 1;
//    console.log('SP_LOG: ', $input);
//    $input.eq(0).val(count);
//    return false;
//  });
//
//
//  // Count
//  $('.single-item').slick();
//
//


//  $('.slider-product').slick({
//    arrows: false,
//    dots: false,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    fade: true,
//    asNavFor: '.slider-thumb',
//  });
//  $('.slider-thumb').slick({
//    arrows: true,
//    vertical: true,
//    slidesToShow: 4,
//    slidesToScroll: 1,
//    asNavFor: '.slider-product',
//    appendArrows: $('.arrows-circle--product'),
//    prevArrow: '<div class="arrow-btn arrow-btn--prev"></div>',
//    nextArrow: '<div class="arrow-btn arrow-btn--next"></div>',
//    dots: false,
//    focusOnSelect: true,
//    responsive: [{
//      breakpoint: 900,
//      settings: {
//        slidesToShow: 3,
//        slidesToScroll: 1
//      }
//    }, {
//      breakpoint: 600,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 1
//      }
//    }]
//  });
//
//
//  $('.tab-slider').each(function() {
//    $(this).slick({
//      dots: false,
//      arrows: true,
//      infinite: true,
//      slidesToShow: 4,
//      slidesToScroll: 1,
//      responsive: [{
//        breakpoint: 1300,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 1
//        }
//      }, {
//        breakpoint: 1000,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 1
//        }
//      }, {
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 1,
//          slidesToScroll: 1
//        }
//      }]
//    });
//  });
//
//
//  // Accordeon menu
//
//  $('.accordeon-menu__list-item .toggle-arrow').on('click', function() {
//    var $li_wrap = $(this).closest('li');
//    if ($li_wrap.hasClass('active'))
//      $li_wrap.removeClass('active').find('.subcategory').slideUp();
//    else
//      $li_wrap.addClass('active').find('.subcategory').slideDown();
//    return false;
//  });
//
//
//  // Range slider
//
//  $("#slider").slider({
//    min: 100,
//    max: 5000,
//    values: [100, 2700],
//    range: true,
//    stop: function(event, ui) {
//      $("input#minCost").val($("#slider").slider("values", 0));
//      $("input#maxCost").val($("#slider").slider("values", 1));
//
//    },
//    slide: function(event, ui) {
//      $("input#minCost").val($("#slider").slider("values", 0));
//      $("input#maxCost").val($("#slider").slider("values", 1));
//    }
//  });
//
//  $("input#minCost").change(function() {
//
//    var value1 = $("input#minCost").val();
//    var value2 = $("input#maxCost").val();
//
//    if (parseInt(value1) > parseInt(value2)) {
//      value1 = value2;
//      $("input#minCost").val(value1);
//    }
//    $("#slider").slider("values", 0, value1);
//  });
//
//
//  $("input#maxCost").change(function() {
//
//    var value1 = $("input#minCost").val();
//    var value2 = $("input#maxCost").val();
//
//    if (value2 > 1000) {
//      value2 = 1000;
//      $("input#maxCost").val(1000)
//    }
//
//    if (parseInt(value1) > parseInt(value2)) {
//      value2 = value1;
//      $("input#maxCost").val(value2);
//    }
//    $("#slider").slider("values", 1, value2);
//  });
//
//
//  // Card height
//
////  $('.card').matchHeight();
//
//
//  // Filter
//
//  $(".filter-category__title").click(function(e) {
//    $(this).toggleClass("active").parent().toggleClass("active");
//    $(this).parent().find(".filter-category__content").slideToggle();
//  });
//
//
//  // Filter spoiler
//
//  $('.filter-category__spoiler').click(function() {
//    var id = $(this).data("id");
//    if ($('.filter-category__content[data-id=' + id + '] li:gt(4)').is(":hidden")) {
//      $('.filter-category__content[data-id=' + id + '] li:gt(4)').show('normal').css('display', 'block');
//      $(this).addClass('active').html('Скрыть');
//    } else {
//      $('.filter-category__content[data-id=' + id + '] li:gt(4)').hide('normal');
//      $('.filter-category__content[data-id=' + id + '] li:gt(4)').fadeOut(300)
//      $(this).removeClass('active').html('Показать все');
//    }
//    return false;
//  });
//
//

//  $('.product-tabs__name-item').on('click', function() {
//    var id = $(this).data('id');
//    $(this).siblings().removeClass('active');
//    $(this).addClass('active');
//    $('.product-tabs__info-item').removeClass('active');
//    $('.product-tabs__info-item[data-id=' + id + ']').addClass('active');
//  });
//  
//   $('.tabs-map__title-item').on('click', function() {
//    var id = $(this).data('id');
//    $(this).siblings().removeClass('active');
//    $(this).addClass('active');
//    $('.tabs-map__inner-item').removeClass('active');
//    $('.tabs-map__inner-item[data-id=' + id + ']').addClass('active');
//  });
//

  // Lightgallery

  $('.content-grid').lightGallery({
    selector: 'a'
  });

 $('.sert-card__info-img').lightGallery({
    selector: 'a'
  });

  $('.product-foto').lightGallery({
    selector: 'a'
  });

    
 // Select
    
//    $('select').niceSelect();
    
    
  
//  // Search adaptive
//
//  $(".search-filter-btn").click(function() {
//    $(".sidebar").toggleClass('search-open');
//
//  });
//
//  $(".tablet-link").click(function() {
//    $(".sidebar").toggleClass('search-open');
//
//  });
//  

  
  
  // Swipe-btn animation
  
//  
//    $('.swipe').click(function() {
//    $('.swipe-btn').toggleClass('open');
//    $('.submenu').slideToggle();
//  });

  
  
  // Modal

  $(".js-modal").on("click", function (e) {
    e.preventDefault();
    var currentModal = $(this).attr("href");
    $(currentModal + ", #js-overlay").fadeIn(500);
    $("body").addClass("open-modal");

  });


  $("#js-overlay, .js-modal-close").on("click", function (e) {
    e.preventDefault();
    $(".modal, #js-overlay").fadeOut(100);
    $("body").removeClass("open-modal");
  });

  
  
  // Phone mask

  $('input[type=tel]').inputmask({
    "mask": "+7 (Z99) 999-99-99",
    definitions: {
      'Z': {
        validator: "[0-6,9]"
      }
    }
  });
  
  
// Select
  
  $('.selected--sort').click(function(){
        $('.option-list').slideToggle(200);
        $('.select').toggleClass('select-active');
    });
    $('.option').click(function(){
        select_val = $(this).attr('data-select-val');
        select_div = $(this).parent().parent();
        $(select_div).children('.selected--sort').html($(this).html());
        $(select_div).children('input').val(select_val);

        $('.option-list').slideToggle(200);
        $('.select').toggleClass('select-active');
    });

  
  // Filter
  
    $(".selected--filter").click(function () {
    $(".filter-list").slideToggle();
  });


  $(".filter-list__title").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().children(".filter-category__list").slideToggle();
  });
  
  
  
  
  
  
  
});

