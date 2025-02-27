$(document).ready(function () {

    // SCROLL HEADER
    $(window).on("scroll", function () {
        let scrolled = $(this).scrollTop();
        let heightHeader = $(".header").innerHeight();
        if (scrolled > heightHeader) {
            $(".header").addClass("scrolled");
            $(".header").next().addClass("scrolled");
        }
        if (scrolled <= heightHeader) {
            $(".header").removeClass("scrolled");
            $(".header").next().removeClass("scrolled");
        }
    });

    // BURGER
    $(".nav__burger").on("click", function () {
        $(this).addClass("active");
        $(".nav__menu").addClass("active")
        $("body").addClass("lock")
    })

    $(".nav__close-mobil").on("click", function () {
        $(".nav__burger").removeClass("active");
        $(".nav__menu").removeClass("active")
        $("body").removeClass("lock")
    })
    // SCROLLBAR

    $(".tablet-content__wrap").mCustomScrollbar({
        theme: "my-theme",
        autoDraggerLength: false,
    });

    $(".scrollbar-rail").mCustomScrollbar({
        theme: "my-theme-2",
        autoDraggerLength: false,
    });




    // =====SLIDER
    $(".cases__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $(".cases__arrow"),
    });
    $(".team__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
    });

    $(".certificate__slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: false,
                },
            },
        ],
    });

    $(".privileges__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        // speed: 800,
        responsive: [
            {
                breakpoint: 1590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                },
            },
        ],
    });

    // $(".privileges__slider").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     $(".privileges__slide").css({ "transition": "all 0.3s ease" });
    // });

    // $(".privileges__slider").on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //     $(".privileges__slider").find(".slick-center").css({ "max-width": "570px" });
    //     // $(".privileges__slide").css({ "max-width": "370px" });
    // });

    $(".portfolio__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $(".portfolio__arrow"),
    });

    //====== ANCHOR
    $('.js-anchor[href^="#form-contact"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 150
        }, 800);
        return false;
    });

    //====== PARALAX

    let paralxItems = [".team__image-bg-1", ".team__image-bg-2"];

    $.each(paralxItems, function (index, val) {
        let bg = $(val);
        $(document).on("mousemove", function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            bg.css({ transform: `translate(${-x - 0}%, ${-y * 30}px)` });
        });
    })

    //====== SLIDER COUNT
    let slider = $('.team__slider');
    $('.all-slide').text(slider.slick("getSlick").slideCount);
    $(".team__slider").on('afterChange', function (event, slick, currentSlide) {
        $(".current-slide").text(currentSlide + 1);
    });

    //==== INPUTMASK
    $("input[type=tel]").inputmask({
        mask: "+7 (Z99) 999-99-99",
        definitions: {
            Z: {
                validator: "[0-6,9]",
            },
        },
    });

    //======RANGE

    let sliderTooltip = function (event, ui) {
        let tooltip = '<div class="tooltip"><input type="text" id="amount" readonly="true"></div>';
        $('.ui-slider-handle:first').html(tooltip);

        let tooltipTwo = '<div class="tooltip"><input type="text" id="amount-2" readonly="true"></div>';
        $('.ui-slider-handle:last').html(tooltipTwo);
    }

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 50000,
        values: [0, 30000],
        create: sliderTooltip,
        slide: function (event, ui) {
            $("#amount").val(ui.values[0]);
            $("#amount-2").val(ui.values[1]);
        }
    });

    $('#amount').val($("#slider-range").slider("values", 0))
    $('#amount-2').val($("#slider-range").slider("values", 1))

    //==== MACH

    let match = [window.matchMedia("(max-width: 992px)"), window.matchMedia("(max-width: 500px)")]

    function movingEl992() {
        if (match[0].matches) {
            $(".nav__menu").append($(".nav__button"))
        } else {
            $(".header__row:first").append($(".nav__button"))

        }
    }
    match[0].addListener(movingEl992)
    movingEl992()

    function movingEl500() {
        if (match[1].matches) {
            $(".nav__menu").prepend($(".nav__phone"))
        } else {
            $(".nav__group").append($(".nav__phone"))
        }
    }
    match[1].addListener(movingEl500)
    movingEl500()

    //================GALLARY

    $("#lightgallery").lightGallery({
        selector: 'a'
    });

    //================FONT SIZE card-item__number
    $.each($(".card-item__number"), function (index, val) {
        if ($(val).text().length > 6) {
            $(val).css("fontSize", "-=8");
        }
    })

    //===============ACCORD SIDE MENU
    $(".side-menu__name").on("click", function () {
        $(".side-menu__name").not($(this)).removeClass("current");
        $(".side-menu__name").next().not($(this).next()).slideUp(300);

        $(this).toggleClass("current").next().slideToggle();
    })

    $(".side-menu__name:first").click()

    $(".side-menu__item").on("click", function () {
        $(".side-menu__item").removeClass("current");
        $(this).addClass("current");
    })


    //===============ANIMATION SCROLL======================
    const animItems = $(".anim-items");

    if (animItems.length > 0) {
        $(window).on("scroll", animOnScroll);
        function animOnScroll() {
            $.each(animItems, function (index, val) {
                const animItem = animItems.eq(index);
                const animItemHeight = animItem.innerHeight();
                const animItemOffset = animItem.offset().top;
                const animStart = 10;

                let animItemPoint = $(window).height() - animItemHeight / animStart;

                if (animItemHeight > $(window).height()) {
                    animItemPoint = $(window).height() - $(window).height() / animStart;
                }

                if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
                    animItem.addClass("animate");
                } else {
                    if (!animItem.hasClass("anim-no-scrollTop")) {
                        animItem.removeClass("animate");
                    }
                }
            });
        }
        setTimeout(animOnScroll, 0);
    }
})

