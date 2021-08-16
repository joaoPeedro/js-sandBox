const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (evt) => {
  cursor.setAttribute("style", `top: ${evt.pageY}px; left: ${evt.pageX}px`);

  if (
    evt.target.tagName.toLowerCase() === "a" ||
    evt.target.dataset.isClickable
  ) {
    cursor.classList.add("hover");
  } else {
    cursor.classList.remove("hover");
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
  // onClick: function (e) {
  //   console.log(e, this, "onClick");
  // },
  onDragEnd: function () {
    console.log("drag ended");
  },
  onDrag: function () {
    // console.log("Direction: ", this.getDirection());
    // quando colide com determinado elemento
    // if (this.hitTest(switcherText)) console.log("colision");
    // podemos passar um elemento de ref" para saber a posição em relação a esseelemento e "padding"
    // console.log(
    //   "em relação ao texto: ",
    //   this.getDirection(switcherText, "50%")
    // );

    console.log(
      "withToProgress switcher",

      withToProgress(
        switcher.getBoundingClientRect().x - switcherMainContainerLeftPosition
      )
    );
  },
  // movimentos tipo roda dentada
  // liveSnap: {
  //   x: [0, 10, 40, 70, 100],
  // },
  // magnétic ao objecto mais próximo
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

// simple
gsap.to(".text-one__ente-que-e-r", {
  scrollTrigger: {
    trigger: ".text-one__ente-que-e-r", // trigger start
    endTrigger: ".text-one__ente-que-e-r", // trigger end, can be other element
    // keys/values: top, center, bottom, pixels, percentages(relative to top), functions
    // actions: 1º - elementTriggerPoint 2º - scroller-star
    start: "center center",
    // the same of start
    end: "+=300", // precisamente 300px depois do elemento
    // keys: play, resume, reverse, restart, reset, complete, none
    // actions: 1º - enterOnViewport 2º - passTheEndPoint 3º - backIn 4º - allTheWayBack
    toggleActions: "restart none none none",
    // to animate with scroll movement
    // keys/values: true, false, number(time in seconds for smooth the animation)
    scrub: 0.2,
    // visual markers
    markers: true,
  },
  transform: "translateX(0%)",
  duration: 3,
});

// scrollTrigger with TimeLine
let TimeLineTextOne = gsap.timeline({
  scrollTrigger: {
    // if you need other scroll to watch
    // scroller: "body",
    //to switch horizontal scroll
    // horizontal: true,
    trigger: "#text-one__real", // trigger start
    endTrigger: "#text-one__real", // trigger end, can be other element
    // keys/values: top, center, bottom, pixels, percentages(relative to top), functions
    // actions: 1º - elementTriggerPoint 2º - scroller-star
    start: "center center",
    // the same of start
    end: "+=300", // precisamente 300px depois do elemento
    // keys: play, resume, reverse, restart, reset, complete, none
    // actions: 1º - enterOnViewport 2º - passTheEndPoint 3º - backIn 4º - allTheWayBack
    toggleActions: "restart none none none",
    // to animate with scroll movement
    // keys/values: true, false, number(time in seconds for smooth the animation)
    scrub: 0.2,
    // to fix element
    // keys/values: true, false, element
    pin: ".text-one",
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

TimeLineTextOne.to("#text-one__real, .text-one__real", {
  transform: "translateX(0%)",
  // clipPath: "polygon(69% 0px, 100% 0px, 100% 100%, 69% 100%)",
  duration: 3,
});

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
