
// input mask
// let phoneInput = document.getElementById('phone');
// let myForm = document.forms.myForm;
// let result = document.getElementById('result');

// phoneInput.addEventListener('input', function (e) {
//     let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//     e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });

// myForm.addEventListener('submit', function(e) {
//   phoneInput.value = phoneInput.value.replace(/\D/g, '');
//   result.innerText = phoneInput.value; 
  
//   e.preventDefault();
// });
// input mask



// newsSlider
let swiper_news = new Swiper(".coperationSwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation: {
        nextEl: ".coperation-button-next",
        prevEl: ".coperation-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          // spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          // spaceBetween: 24,
        },
        1024: {
          slidesPerView: 6,
          // spaceBetween: 24,
        },
    },
});

// newSlider
let swiper_new = new Swiper(".newSwiper", {
    spaceBetween: 24,
    initialSlide: 1,
    autoplay: {
      delay: 2000,
    },
    hashNavigation: {
      watchState: true,
    },
    loop: false,
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation: {
        nextEl: ".new-button-next",
        prevEl: ".new-button-prev",
    },
});



// donateSlider
let donateSwiper = document.querySelector('.donateSwiper');
if(donateSwiper){
  let swiper_donate = new Swiper(donateSwiper, {
  
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation: {
        nextEl: ".donate-button-next",
        prevEl: ".donate-button-prev",
    },
    breakpoints: {
        300: {
          slidesPerView: 2,
          // spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          // spaceBetween: 24,
        },
        1024: {
          slidesPerView: 5,
          // spaceBetween: 24,
        },
    },
  });
  checkRadio();
  swiper_donate.on('slideChange', () => checkRadio())
};

function checkRadio (){
  let radio_btn = document.querySelectorAll('.slider_radio .radio_btn');
  radio_btn.forEach(btn => {
    btn.addEventListener('click', function () {
      radio_btn.forEach(btn2 => {
        if(btn2.querySelector('input[type="radio"]').checked) {
          btn2.classList.add('active')
        } else {
          btn2.classList.remove('active')
        }
      })
    })
  }) 
}

// newsSlider
let swiper_newss = new Swiper(".newsSwiper", {
  scrollbar: {
      el: ".swiper-scrollbar",
      // hide: true,
  },
  navigation: {
      nextEl: ".news-button-next",
      prevEl: ".news-button-prev",
  },
  breakpoints: {
      300: {
        slidesPerView: 1,
        // spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 24,
      },
      993: {
        slidesPerView: 3,
        // spaceBetween: 24,
      },
  },
});

// newsSlider
let swiper_newsss = new Swiper(".news_twoSwiper", {
  spaceBetween: 24,
  scrollbar: {
      el: ".swiper-scrollbar",
      // hide: true,

  },
  navigation: {
      nextEl: ".news-button-next",
      prevEl: ".news-button-prev",
  },
});

// newsSlider
let news_bottomSwiper = new Swiper(".news_bottomSwiper", {
  spaceBetween: 34,
  scrollbar: {
      el: ".swiper-scrollbar",
      // hide: true,

  },
  navigation: {
      nextEl: ".news-button-next",
      prevEl: ".news-button-prev",
  },
  breakpoints: {
      300: {
        slidesPerView: 1,
        // spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 24,
      },
      993: {
        slidesPerView: 3,
        // spaceBetween: 24,
      },
  },
});

let home_slider = document.querySelector('.home_slider');
if (home_slider) {
  let homeSlider = new Swiper(home_slider, {
    slidesPerView: 1,
    mousewheel: true,
    speed: 800,
    pagination: {
      el: ".home_slider_navs .slider_pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".home_slider_navs .next_btn",
      prevEl: ".home_slider_navs .prev_btn",
    },
  })

// mobile menu

// newsSlider
let swiper_news = new Swiper(".newsSwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation: {
      nextEl: ".home_slider_navs .next_btn",
      prevEl: ".home_slider_navs .prev_btn",
    },
  })

  const makeFraction = async () => {
      let real_idx = await homeSlider.realIndex + 1;
      real_idx = real_idx < 10 ? '0' + String(real_idx) : real_idx;
      let slid_length = await homeSlider.slides.length;
      slid_length = slid_length < 10 ? '0' + String(slid_length) : slid_length;
      let home_slide_count = document.querySelector('.home_slider_navs .slider_numbers');
      home_slide_count.innerHTML = `${real_idx} <span>/ ${slid_length}</span>`;
  }
  homeSlider.on('slideChange', () => makeFraction())

  makeFraction();
}


// mobile menu
let dropdown_link = document.querySelector('.dropdown_link button.main_link');
let dropdown_link_dropdown = document.querySelector('.dropdown_link_dropdown');
// console.log(dropdown_link);

dropdown_link.addEventListener('click', () => {
  dropdown_link_dropdown.classList.toggle('active')
})


let burger_open = document.querySelectorAll('.burger_open');
let header_mobile_menu = document.querySelector('.menu_mobile');
let menu_close = document.querySelector('.mobile_menu_close');
if (burger_open.length) {
  burger_open.forEach(btn => {
    btn.onclick = () => {
      header_mobile_menu.classList.remove("active_end");
      header_mobile_menu.classList.add("active");
    }
  })
  menu_close.onclick = () => {
    header_mobile_menu.classList.remove("active");
    header_mobile_menu.classList.add("active_end");
  }
}


let radio_btn = document.querySelectorAll('.radio_btn');

if (radio_btn.length){
  radio_btn.forEach(btn => {
    let radio_input = btn.querySelector('input[type="radio"]')
    btn.onclick = () => {
      radio_input.click()
    }
  })
}

$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });
  
  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});

$(document).ready(function() {
  const minus = $('.quantity__minus_two');
  const plus = $('.quantity__plus_two');
  const input = $('.quantity__input_two');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });
  
  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});


let swiper_child_wrap = document.querySelector('.swiper_child_wrap');
if (swiper_child_wrap) {
  document.addEventListener('scroll', function () {
    if ($('.slider_parent .slide_block.active').length) {
      $('.slider_parent .slide_block').not($($('.slider_parent .slide_block.active')[$('.slider_parent .slide_block.active').length - 1])).removeClass('checked');
      $($('.slider_parent .slide_block.active')[$('.slider_parent .slide_block.active').length - 1]).addClass('checked')
    }
    $('.slider_parent .slide_block').each(function (idx, el) {
      if (el.classList.contains('checked')) {
        $('.swiper_child_wrap .img_wrapper').not($($('.swiper_child_wrap .img_wrapper')[idx])).removeClass('active');
        $($('.swiper_child_wrap .img_wrapper')[idx]).addClass('active');
      }
    })
  })

  gsap.registerPlugin(ScrollTrigger);
  $('.slider_parent .slide_block').each(function (idx, el) {
    gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          // markers: true,
          toggleClass: 'active'
        }
    })
  })

  $('.swiper_child_wrap .img_wrapper').each(function (idx, el) {
    $(el).click(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $($('.slider_parent .slide_block')[idx]).offset().top
      }, 600);
    })
  })
}




const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


$(".title_error").append("<div class='glitch-window'></div>");
$( "h1.glitched" ).clone().appendTo( ".glitch-window" );