// SWIPER sliders

const swiper = new Swiper('.swiper1', {
  // активный слайд будет центрирован
  centeredSlides: true,
  // будет анимироваться когда его отпустите
  followFinger: false,
  // цикл
  loop: true,
  // количество слайдов, которые будут клонированы после создания цикла
  loopAdditionalSlides: 0,
  // Расстояние между слайдами в px
  spaceBetween: 0,
  // слайды, видимые одновременно в контейнере слайдера
  slidesPerView: 1,
  
  // адаптив
  breakpoints: {
    // >= 320
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    // >= 375
    375: {
      slidesPerView: 1.4,
      spaceBetween: 15
    },
    // >= 425
    425: {
      slidesPerView: 1.55,
      spaceBetween: 20
    },
    // >= 480
    480: {
      slidesPerView: 1.7,
      spaceBetween: 20
    },
    // >= 640
    640: {
      slidesPerView: 2.3,
      spaceBetween: 25
    },
    // >= 720
    720: {
      slidesPerView: 2.6,
      spaceBetween: 25
    },
    // >= 820
    820: {
      slidesPerView: 2.9,
      spaceBetween: 25
    },
    // >= 960
    960: {
      slidesPerView: 3.4,
      spaceBetween: 30
    },
    // >= 1140
    1140: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // >= 1200
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // >= 1340
    1340: {
      slidesPerView: 4.766,
      spaceBetween: 30
    },
  },

  // автопрокрутка
  autoplay: {
    // пауза
    delay: 4000,
    // остановка после ручной прокрутки
    disableOnInteraction: false,
  },
});


// ************************* 2

const swiper2 = new Swiper('.swiper-2', {
  // активный слайд будет центрирован
  centeredSlides: true,
  // Расстояние между слайдами в px
  spaceBetween: 50,
  // слайды, видимые одновременно в контейнере слайдера
  slidesPerView: 1.01,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function addZero(num){
  return (num > 9) ? num : '0' + num;
}


// ************************* 3 Mobile Menu

const swiper3 = new Swiper('.swiper-3', {
  // активный слайд будет центрирован
  centeredSlides: true,
  // Расстояние между слайдами в px
  spaceBetween: 10,
  // слайды, видимые одновременно в контейнере слайдера
  slidesPerView: 1,
  freeMode: true,
  width: 730,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // type: 'custom',
    renderBullet: function(index, className) {
      const tabsName = [
        ['По Отрасли'],
        ['По Сценарию использования'],
        ['По Роли'],
      ]
      
      let text = `<li class="tab__item ${className}"><a class="tab__link"><span>${tabsName[index]}</span></a></li>`

      return text
    },
  },
});

swiper3.on('activeIndexChange', () => {
  // id кнопки для текущего слайда
  let id = '#btn_tab_mobile-'
  id += swiper3.realIndex + 1

  // находим все кнопки и отключаем их
  const btnsTab = document.querySelectorAll('.btn_tab')

  if (btnsTab.length > 0) {
    btnsTab.forEach (btn => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })
  }

  // активируем нужную нам кнопку
  const btnTabTarget = document.querySelector(id)
  if (btnTabTarget) {
    btnTabTarget.classList.add('active')
  }
  console.log(btnTabTarget);
})


//************************************* */ reviews__swiper

const swiper1 = new Swiper(".reviews__swiper", {
  navigation: {
    nextEl: ".reviews__btn-swiper-next",
    prevEl: ".reviews__btn-swiper-prev",
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },
});


//********************************* */ Catalog sources

const swiperCatalogSources = new Swiper(".swiper__sources", {
  navigation: {
    nextEl: ".swiper-sources-button-next",
    prevEl: ".swiper-sources-button-prev",
  },
  slidesPerView: 4.75,
  spaceBetween: 30,
  // активный слайд будет центрирован
  centeredSlides: true,
  // адаптив
  breakpoints: {
    // >= 320
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    // >= 375
    375: {
      slidesPerView: 1.4,
      spaceBetween: 15
    },
    // >= 425
    425: {
      slidesPerView: 1.55,
      spaceBetween: 20
    },
    // >= 480
    480: {
      slidesPerView: 1.7,
      spaceBetween: 20
    },
    // >= 640
    640: {
      slidesPerView: 2.3,
      spaceBetween: 25
    },
    // >= 720
    720: {
      slidesPerView: 2.6,
      spaceBetween: 25
    },
    // >= 820
    820: {
      slidesPerView: 2.9,
      spaceBetween: 25
    },
    // >= 960
    960: {
      slidesPerView: 3.4,
      spaceBetween: 30
    },
    // >= 1140
    1140: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // >= 1200
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // >= 1340
    1340: {
      centeredSlides: false,
      slidesPerView: 4.766,
      spaceBetween: 30
    },
  },
});


// SERVICES open/close map

function ToggleMap() {
  // btn
  const btnMapToggle = document.querySelector('#btnMapToggle')
  // text on btn
  const btnTextOpen = document.querySelector('#btnTextOpen')
  const btnTextClose = document.querySelector('#btnTextClose')
  // block toggle
  const mapInfo = document.querySelector('#mapInfo')

  // toggle classes
  btnMapToggle.classList.toggle('active')
  btnTextOpen.classList.toggle('active')
  btnTextClose.classList.toggle('active')
  mapInfo.classList.toggle('hidden')
}