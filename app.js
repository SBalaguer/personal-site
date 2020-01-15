const test2Left = document.querySelector(".test2-left");
const test2Right = document.querySelector(".test2-right");

const tl = new TimelineLite({ paused: false });
tl.to(".test2-left", 1.5, {
  width: "550%",
  ease: Power2.easeOut
});
tl.fromTo(
  ".test-hi",
  1.5,
  {
    x: 0
  },
  {
    x: "50vw",
    ease: Power2.easeOut
  },
  "-=1.5"
);
