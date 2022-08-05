window.addEventListener("load", (event) => {
  // alert("page is fully loaded");
  setTimeout(() => {
    startTween();
    TimeLine();
  }, 250);
});

/**
 *
 */
const startTween = () => {
  // set from/init state
  gsap.from(".circle", {
    duration: 1,
    opacity: 0,
    // y: () => Math.random() * 400 - 200,
    y: "random(-200, 200)",
    delay: 1.5,
    stagger: 0.5,
  });
  // set destiny
  gsap.to("#img", { duration: 2, left: "100%", opacity: 0 });
};
const TimeLine = () => {
  console.log("ENTÂO");
  // corre animação de forma sequencial
  // repeat: -1 = infinito
  const TL = gsap.timeline({ repeat: -1, yoyo: true });

  TL.to(".circle-2", {
    duration: 1,
    opacity: 0,
    // y: () => Math.random() * 400 - 200,
    y: "random(-200, 200)",
    stagger: 0.5,
  });
  // "-=0.5" - tempo entre uma animação e a outra
  //TL.from("#img-2", { duration: 2, left: "100%", opacity: 1 }, "-=0.5");

  // pode ser criada uma label com este valor entre uma animação e a outra
  TL.addLabel("timeImg", "-=0.5");
  TL.from("#img-2", { duration: 2, left: "100%", opacity: 1 }, "timeImg");
};
