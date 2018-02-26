export default () => {
  window.scrollTo(0,0);
};


function scrollTo(element, to, duration) {
  if (duration < 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 2;

  setTimeout( () => {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
  }, 10);
}
export const animateScrollToTop = function () {
  scrollTo(document.documentElement, 0, 50); // For Chrome, FireFox, Opera
  scrollTo(document.body, 0, 50); // For Safari
}
