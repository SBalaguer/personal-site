const $name = document.getElementById("name");
//const $scrollDown = document.getElementById("scroll-down");

const $contact = document.getElementById("contact");

const headerTimeline = new TimelineMax();

headerTimeline.from($name, { duration: 1.8, opacity: 0, scale: 0.6, ease: "back" });
headerTimeline.from(".what", { duration: 0.7, opacity: 0, scale: 0.8, stagger: 0.45 });
headerTimeline.from(".contact", { duration: 0.25, opacity: 0, scale: 0.8, stagger: 0.25 });
//headerTimeline.from("#scroll-down", { duration: 0.25, opacity: 0, scale: 0.8, stagger: 0.25 });
//headerTimeline.to($scrollDown, { duration: 0.8, y: 40, repeat: -1, ease: "linear" });

//const $section1 = document.getElementById("section-1");
//const section1Position = $section1.offsetTop;
let scrollRunning;
/*
function smoothScroll(target, duration) {
  scrollRunning = true;
  const targetTo = document.querySelector(target);
  const targetPosition = targetTo.getBoundingClientRect();
  const top = targetPosition.top;
  const startPosition = window.pageYOffset;
  const distance = top - startPosition;
  let startTime = null;
  console.log(distance);

  function animationScroll(currentTime) {
    startTime === null ? (startTime = currentTime) : null;
    let timeElapsed = currentTime - startTime;
    let run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed <= duration) {
      requestAnimationFrame(animationScroll);
    } else {
      scrollRunning = false;
    }
  }

  function easeInOutQuad(t, b, c, d) {
    //t === time elapsed; b === start position; c === distance; d === duration
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}
*/

//smoothScroll("#section-1", 1500);

let scrollDirection;
let previousScroll;

window.addEventListener("scroll", (event) => {
  const targetTo = document.querySelector("#section-1");
  const targetPosition = targetTo.getBoundingClientRect().top;
  getScrollingDirection(this.scrollY);
  const START_LIMIT = 1;
  //console.log(this.scrollY);
  if (scrollDirection === "down" && this.scrollY <= targetPosition && !scrollRunning) {
    //smoothScroll("#section-1", 1500, START_LIMIT);
    scrollRunning = true;
    gsap.to(window, { duration: 2, scrollTo: "#section-1" });
  }
  //console.log(scrollDirection);
});

getScrollingDirection = (currentScrollPoisition) => {
  if (previousScroll > currentScrollPoisition) {
    scrollDirection = "up";
    //console.log("Scrolling Up");
  } else if (previousScroll < currentScrollPoisition) {
    scrollDirection = "down";
    //console.log("Scrolling Down");
  } else {
    //console.log("not scrolling");
  }
  previousScroll = currentScrollPoisition;
};
