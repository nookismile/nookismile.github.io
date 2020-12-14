// Swiper

let interleaveOffset = 0.5;

let swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: false,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  pagination: {
        el: '.main-slider__pagination',
        clickable: true,
      },
  on: {
    progress: function() {
      let swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }
    },
    touchStart: function() {
      let swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      let swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
};

let swiper = new Swiper(".main-slider", swiperOptions);

let slider1 = new Swiper('.slider-left', {
  init : true ,
  slidesPerView : 'auto' ,
  loop : true,
  loopedSlides : 0,
  slidesPerGroup : 1 ,
  spaceBetween : 30,
    navigation: {
      nextEl: '.arrow-slider--review .swiper-button-next',
      prevEl: '.arrow-slider--review .swiper-button-prev',
    },
});



//slider1.slideToLoop()

$(".slider-left .swiper-slide-active").addClass("current");

slider1.on("slideChangeTransitionEnd", function() {
    $(".slider-left .slider-left__slide").removeClass("current");
    $(".slider-left .swiper-slide-active").addClass("current");
})

const swiper3 = new Swiper('.slider-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 2,
    loop: true,
    watchOverflow: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.arrow-slider--gallery .swiper-button-next',
      prevEl: '.arrow-slider--gallery .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
    }
  });


gsap.registerPlugin(ScrollTrigger);
gsap.to('progress',{
  value: 100,
  ease: 'none',
  scrollTrigger: {scrub: 0.3}
});

function animateFrom(elem, direction) {
  direction = direction | 1;

  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});


batch(".mans-list__item, .place-list__item .card", {
  interval: 0.05, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha: 0, overwrite: true})
  // you can also define things like start, end, etc.
});




// the magical helper function (no longer necessary in GSAP 3.3.1 because it was added as ScrollTrigger.batch())...
function batch(targets, vars) {
  let varsCopy = {},
      interval = vars.interval || 0.1,
      proxyCallback = (type, callback) => {
        let batch = [],
            delay = gsap.delayedCall(interval, () => {callback(batch); batch.length = 0;}).pause();
        return self => {
          batch.length || delay.restart(true);
          batch.push(self.trigger);
          vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
        };
      },
      p;
  for (p in vars) {
    varsCopy[p] = (~p.indexOf("Enter") || ~p.indexOf("Leave")) ? proxyCallback(p, vars[p]) : vars[p];
  }
  gsap.utils.toArray(targets).forEach(target => {
    let config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    ScrollTrigger.create(config);
  });
}


const delSections = document.querySelectorAll(".block__img");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".block__img-item"), {
    y: "100vh",
    ease: "none"
  });

  const imageAnim = gsap.to(section.querySelectorAll(".animate-img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });

  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });

  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});

$(document).ready(function () {


    // Mmenu

  $("#menu").mmenu({
		extensions: [ "position-left", "theme-light", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset" ],
		navbar: {
			title: ""
		},

				});


  // Select

  $('select').niceSelect();

$(".fold-table tr.view").on("click", function(){
    $(this).toggleClass("open").next(".fold").toggleClass("open");
  });



//$(".spoiler div").on('click',function() {
//			if ($(this).hasClass('active')) {
//				$(this).removeClass('active').text('Показать все');
//				$(this).closest('.mans .wrapper').find('ul li.hidden-block').slideUp();
//			}
//			else {
//				$(this).addClass('active').text('Скрыть');
//				$(this).closest('.mans .wrapper').find('ul li.hidden-block').slideDown();
//			}
//		});


});


TweenMax.to('.services-list', 1.5, {scaleY: 1,  ease: Circ.easeOut });
//# sourceMappingURL=main.js.map
