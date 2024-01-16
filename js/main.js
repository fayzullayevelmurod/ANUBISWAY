// $(".error").append("<div class='glitch-window'></div>");
// $( "h1.glitched" ).clone().appendTo( ".glitch-window" );
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






// mobile menu

// newsSlider
let swiper_news = new Swiper(".newsSwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
    },
});

// newsSlider
let swiper_coperation = new Swiper(".coperationSwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation: {
        nextEl: ".coperation-button-next",
        prevEl: ".coperation-button-prev",
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


// newsSlider
let swiper_donate = new Swiper(".donateSwiper", {
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


// mobile menu
let dropdown_link = document.querySelector('.dropdown_link button.main_link');
let dropdown_link_dropdown = document.querySelector('.dropdown_link_dropdown');
console.log(dropdown_link);

dropdown_link.addEventListener('click', () => {
  dropdown_link_dropdown.classList.toggle('active')
})