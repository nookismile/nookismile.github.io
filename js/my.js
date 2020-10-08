$(document).ready(function() {


    // Sliders

    // Category-slider

    $('.category-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        appendArrows: $('.arrow-main--category'),
        prevArrow: '<div class="arrow-btn arrow-btn--prev"></div>',
        nextArrow: '<div class="arrow-btn arrow-btn--next"></div>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    // Seen-slider

    $('.seen-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        appendArrows: $('.arrow-main--seen'),
        prevArrow: '<div class="arrow-btn arrow-btn--prev"></div>',
        nextArrow: '<div class="arrow-btn arrow-btn--next"></div>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });


    // Similar-slider

    $('.similar-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        appendArrows: $('.arrow-main--similar'),
        prevArrow: '<div class="arrow-btn arrow-btn--prev"></div>',
        nextArrow: '<div class="arrow-btn arrow-btn--next"></div>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });


    // Product-slider

    $('.slider-product').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-thumb',
    });
    $('.slider-thumb').slick({
        arrows: false,
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-product',
        dots: true,
        appendDots: '.slider-dots',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });



    // Mmenu

    $("#menu").mmenu({
        navbar: {
            title: "Меню"
        }
    });


    // Favorite animation


    $(".favorite-icon").click(function() {
        $(this).toggleClass("click");


    });


    // Count

    $('#count').timeTo({
        timeTo: new Date(new Date('Mon Oct 5 2020 9:00:00 GMT+0300 (Москва, стандартное время)')),
        displayDays: 1,
        theme: "white",
        displayCaptions: true,
        fontSize: 36,
        captionSize: 14,
        lang: 'ru'
    });


    // Modal

    $(".js-modal").on("click", function(e) {
        e.preventDefault();
        let currentModal = $(this).attr("href");
        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");

    });


    $("#js-overlay, .js-modal-close").on("click", function(e) {
        e.preventDefault();
        $(".modal, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });


    // Cart plus-minus
    $('.minus').click(function() {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.eq(0).val(count);
        return false;
    });
    $('.plus').click(function() {
        let $input = $(this).parent().find('input'),
            count = parseInt($input.val()) + 1;
        console.log('SP_LOG: ', $input);
        $input.eq(0).val(count);
        return false;
    });


    // Select

    $('select').niceSelect();


  
  // Tabs

  $('.product-tabs__name-item').on('click', function() {
    let id = $(this).data('id');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.product-tabs__info-item').siblings().removeClass('active').hide();
    $('.product-tabs__info-item[data-id=' + id + ']').addClass('active').show();
  });
  
  
  // Choice-img
    
    
$('.choice-acc__thumb li').on('click',function() {
			let id = $(this).data("id");
			$(this).siblings().removeClass("active");
			$(this).addClass('active');
			
			$('.choice-acc__descr').removeClass("active");
			
			$('.choice-acc__descr[data-id='+id+']').addClass("active");
            
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
  
  
    // Anchor


     $('.see-more__link[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 150
        }, 800);
        return false;
    });
  
  
  // Count

  $('.counter__add').click(function() {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.eq(0).val(count);
    return false;
  });
  $('.counter__subtract').click(function() {
    let $input = $(this).parent().find('input'),
      count = parseInt($input.val()) + 1;
    console.log('SP_LOG: ', $input);
    $input.eq(0).val(count);
    return false;
  });
  
  
  //Calc 
  
  $(".head-calc").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  
   $(".option-calc__add-more").on("click", function () {
    let select = $(this).parents(".option-calc__column--two").find(".js-row-calc").eq(0);
    let slectClone = select.clone();
    slectClone.find("input").val(1)
    slectClone.find(".counter__add").click(add)
    slectClone.find(".counter__subtract").click(sub)
    slectClone.insertBefore($(this).parent());
  });

  
  function add() {
    let $input = $(this).parent().find("input");
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.eq(0).val(count);
    return false;
  }
  
   function sub() {
    let $input = $(this).parent().find("input"),
      count = parseInt($input.val()) + 1;
    console.log("SP_LOG: ", $input);
    $input.eq(0).val(count);
    return false;
  }

  $(".counter__add").click(add);
  $(".counter__subtract").click(sub);
  
  
});