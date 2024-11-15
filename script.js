// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll(".elem").forEach((elem) => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();
  let xTransform = gsap.utils.random(-100, 100);
  let initialBorderRadius = "0%";

  if (image.classList.contains("odd")) {
    initialBorderRadius = "20%";
  } else if (image.classList.contains("even")) {
    initialBorderRadius = "10%";
  }

  // Define scroll speed adjustment factor based on class
  tl.set(
    image,
    {
      transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
      borderRadius: initialBorderRadius,
    },
    "start"
  )
    .to(
      image,
      {
        //scale: 0,
        ease: "none",
        borderRadius: image.classList.contains("odd") ? "40%" : "50%",
        duration: 5,
        delay: 5,
        scrollTrigger: {
          trigger: image,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
      },
      "start"
    )
    .to(elem, {
      yPercent: xTransform,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        //markers: true, 
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
});
