/* Badges */
// 스크롤에 영향을 받는 요소들을 변수로 선언
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
// _.throttle(함수, 시간); (lodash)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면
  if (window.scrollY > 500) {
    //Badge 요소 숨기기
    //애니메이션 효과 gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // to-top 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
  }
  else {
    //Badge 요소 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // to-top 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// TO-TOP 버튼 클릭 시 페이지 최상단으로 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


/* Fade */
// 이미지 순서대로 나타나는 기능
// .fade-in 요소를 찾아 변수로 선언
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  // 각 요소들을 순서대로 보여지게 처리(delay)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7s, 1.4s, 2.1s, 2.7s
    opacity: 1
  });
});

/* Slide */
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데로 이동
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

//AWARDS Slide
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }
  else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


/* FLOATING ANIMATION */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), { // 애니메이션 동작 시간
      // 옵션
      y: 20,
      repeat: -1, // 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/* SCROLLMAGIC */
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
      triggerHook: .8 // 보여지는 화면의 위치 vh 0~1
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
