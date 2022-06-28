let options = {
  threshold: [0]
};
let observer = new IntersectionObserver(onEntry, options);
let swiperDescr = document.querySelectorAll('.swiper-slide');

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('slideinup');
    }
  });
};
for (let des of swiperDescr) {
  observer.observe(des);
};







const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  speed: 1500,
  slidesPerGroup: 2,
  // parallax: true,
  // centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // centeredSlidesBounds:true,
  passiveListeners: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 0.7,
    // thresholdTime: 100,
    // thresholdDelta: 0.3,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    // clickable: true,
  },
});
