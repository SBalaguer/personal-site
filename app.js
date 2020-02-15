const $test2Left = document.querySelector(".test2-left");
const $test2Right = document.querySelector(".test2-right");

const tl = new TimelineLite({ paused: true });
tl.to(".test2-right", 1.3, {
  width: "0%",
  ease: Power2.easeOut
})
  .to(
    ".test2-left",
    1.3,
    {
      width: "100%",
      ease: Power2.easeOut
    },
    "-=1.3"
  )
  .fromTo(
    ".test-hi",
    1.3,
    {
      x: 0
    },
    {
      x: "50vw",
      ease: Power2.easeOut
    },
    "-=1.3"
  );

window.addEventListener("click", () => {
  tl.play();
});
