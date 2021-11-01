const cursor = document.querySelector("#cursor");
// gsap.fromTo(cursor, {scale: 1}, {scale: 8, duration: 0.8, repeat: -1});
document.addEventListener("mousemove", (evt) => {
  gsap.to(cursor, {duration: 0.6, top: evt.pageY, left: evt.pageX});
  // setTimeout(() => {
  //   // cursor.setAttribute("style", `top: ${evt.pageY}px; left: ${evt.pageX}px`);
  // }, 60);

  if (
    evt.target.tagName.toLowerCase() === "a" ||
    evt.target.dataset.isClickable
  ) {
    // cursor.classList.add("hover");
    gsap.to(cursor, {
      duration: 0.4,
      className: "+=hover",
      width: 52,
      height: 52,
    });
  } else {
    // cursor.classList.remove("hover");
    gsap.to(cursor, {
      duration: 0.6,
      className: "",
      width: 22,
      height: 22,
    });
  }
});

document.addEventListener("click", (e) => {
  cursor.classList.add("clicked");
  // console.log(e);
  setTimeout(() => {
    cursor.classList.remove("clicked");
  }, 200);
});

/**
 * Draggable
 */
const switcher = document.querySelector("#switcher");
const switcherMainContainer = document.querySelector(".intro__switch");
const switcherMainContainerLeftPosition =
  switcherMainContainer.getBoundingClientRect().x;
const switcherContainer = document.querySelector("#switch-wrp");
const switcherText = document.querySelector("#switch-text");

let interpValue = gsap.utils.interpolate(0, 200);
let clampValue = gsap.utils.clamp(0, 200);

//progress
let withToProgress = gsap.utils.mapRange(
  // switcherMainContainer.getBoundingClientRect().x,
  0,
  switcherMainContainer.clientWidth,
  0,
  1
);

const switcherDraggable = Draggable.create(switcher, {
  bounds: switcherContainer,
  type: "x",
  // type: "y",
  // onClick: function (e) {
  //   console.log(e, this, "onClick");
  // },
  onDragEnd: function () {
    console.log("drag ended");
  },

  onDrag: function () {
    // console.log("Direction: ", this.getDirection());
    // quando colide com determinado elemento
    if (this.hitTest(switcherText)) {
      console.log("colision");
      gsap.to(switcherText, {duration: 0.4, opacity: 0});
    } else {
      gsap.to(switcherText, {duration: 0.4, opacity: 1});
    }
    // podemos passar um elemento de ref" para saber a posição em relação a esseelemento e "padding"
    console.log("em relação ao texto: ", this.getDirection(switcherText, "2"));

    let ratio = this.x / this.maxX;
    // let ratio = this.y / this.maxY;

    console.log(this);

    console.log(
      "withToProgress switcher",

      // withToProgress(
      //   switcher.getBoundingClientRect().x - switcherMainContainerLeftPosition
      // ),

      "ou withRatio: ",
      ratio
    );

    console.log("ou clampValue:", clampValue(interpValue(ratio)));
  },
  // // movimentos tipo roda dentada
  // liveSnap: {
  //   x: [0, 10, 40, 70, 100],
  // },
  // // magnétic ao objecto mais próximo
  // liveSnap: {
  //   x: [30],
  //   radius: 30,
  // },
});

// var tween = KUTE.fromTo(
//   "#E",
//   {path: "#E"},
//   {path: "#EX"},
//   {easing: "easingCubicOut"}
// );
// setTimeout(() => {
//   // tween.start();
//   // var tween2 = KUTE.fromTo("#E2", {path: "#E2"}, {path: "#EX2"}).start();
// }, 2000);

/*
 * scrollTrigger
 */

//is possible to set defaults
// ScrollTrigger.defaults({
//   toggleActions: "restart none none none",
//   markers: true,
// });

// ScrollTrigger.refresh()

// simple
// gsap.to(".text-one__ente-que-e-r", {
//   scrollTrigger: {
//     trigger: ".scene-one", // trigger start
//     endTrigger: ".text-one__ente-que-e-r", // trigger end, can be other element
//     // keys/values: top, center, bottom, pixels, percentages(relative to top), functions
//     // actions: 1º - elementTriggerPoint 2º - scroller-star
//     start: "290 center",
//     // the same of start
//     end: "+=250", // precisamente 250px depois do elemento
//     // keys: play, resume, reverse, restart, reset, complete, none
//     // actions: 1º - enterOnViewport 2º - passTheEndPoint 3º - backIn 4º - allTheWayBack
//     toggleActions: "restart none none none",
//     // pinSpacing: false,
//     // to animate with scroll movement
//     // keys/values: true, false, number(time in seconds for smooth the animation)
//     scrub: 0.2,
//     // visual markers
//     markers: true,
//   },
//   transform: "translateX(0%)",
//   duration: 3,
// });

// scrollTrigger with TimeLine
let TimeLineTextOne = gsap.timeline({
  scrollTrigger: {
    // if you need other scroll to watch
    // scroller: "body",
    //to switch horizontal scroll
    // horizontal: true,
    trigger: ".scene-one", // trigger start
    endTrigger: "#text-one__real", // trigger end, can be other element
    // keys/values: top, center, bottom, pixels, percentages(relative to top), functions
    // actions: 1º - elementTriggerPoint 2º - scroller-star
    start: "290 center",
    // the same of start
    end: "+=850", // precisamente 300px depois do elemento
    // keys: play, resume, reverse, restart, reset, complete, none
    // actions: 1º - enterOnViewport 2º - passTheEndPoint 3º - backIn 4º - allTheWayBack
    toggleActions: "restart none none none",
    // to animate with scroll movement
    // keys/values: true, false, number(time in seconds for smooth the animation)
    scrub: 0.2,
    // to fix element
    // keys/values: true, false, element
    pin: ".scene-one",
    // to remove pin spacing
    pinSpacing: false,
    // visual markers
    markers: true,
    // id: "id-marker",

    //callbacks
    onEnter: () => console.log("onEnter"),
    onEnterBack: () => console.log("onEnterBack"),
    onLeave: () => console.log("onLeave"),
    onLeaveBack: () => console.log("onLeaveBack"),
    onUpdate: (self) => console.log("onUpdate", self.progress.toFixed(3)),
    onToggle: (self) => console.log("onToggle", self.isActive),
    // to toggle class
    toggleClass: "active",
  },
});

TimeLineTextOne.to(
  "#text-one__real, .text-one__real, .text-one__ente-que-e-r",
  {
    transform: "translateX(0%)",
    // clipPath: "polygon(69% 0px, 100% 0px, 100% 100%, 69% 100%)",
    duration: 12,
    ease: "circ.inOut",
    // ease: CustomEase.create(
    //   "custom",
    //   "M0,0 C0.42,0 0.548,0.224 0.584,0.286 0.794,0.65 0.752,0.946 1,1 "
    // ),
  }
);

// scrollTrigger appended to TimeLine
// let TimeLineTextTow = gsap.timeline({});

// ScrollTrigger.create({
//   animation: TimeLineTextTow,
//   trigger: "#text-one__real", // trigger start
//   endTrigger: "#text-one__real", // trigger end, can be other element
//   // keys/values: top, center, bottom, pixels, percentages(relative to top), functions
//   // actions: 1º - elementTriggerPoint 2º - scroller-star
//   start: "center center",
//   // the same of start
//   end: "+=300", // precisamente 300px depois do elemento
//   // keys: play, resume, reverse, restart, reset, complete, none
//   // actions: 1º - enterOnViewport 2º - passTheEndPoint 3º - backIn 4º - allTheWayBack
//   toggleActions: "restart none none none",
//   // to animate with scroll movement
//   // keys/values: true, false, number(time in seconds for smooth the animation)
//   scrub: 0.2,
//   // to fix element
//   // keys/values: true, false, element
//   pin: ".text-one",
//   // visual markers
//   markers: true,
// });

TimeLineTextOne.to(
  ".video__wrp",
  {
    width: "600px",
    height: "600px",
    duration: 12,
  },
  "-=10"
);
