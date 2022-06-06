// GSAP stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// TODO: Calendar stuff - delete if not using
// import { Calendar } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import iCalendarPlugin from "@fullcalendar/icalendar";

gsap.registerPlugin(ScrollTrigger);

// ----------------- NAVbar logo animation ------------------

const navbarToWhite = () => {
  gsap.to(".st0", { fill: "black" });
  gsap.to(".navbar", {
    color: "black",
    backgroundColor: "white",
  });
  gsap.to(".BURGERBAR", {
    backgroundColor: "black",
  });
  gsap.to(".MOBILE-MENU", {
    color: "black",
    backgroundColor: "white",
  });
};

const navbarToTransparent = () => {
  gsap.to(".st0", { fill: "white" });
  gsap.to(".navbar", {
    color: "white",
    backgroundColor: "transparent",
  });
  gsap.to(".BURGERBAR", {
    backgroundColor: "white",
  });
  gsap.to(".MOBILE-MENU", {
    color: "white",
    backgroundColor: "transparent",
  });
};

const showAnim = gsap
  .from(".main-tool-bar", {
    yPercent: -100,
    paused: true,
    // duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "5% top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
  onEnter: navbarToWhite,
  onLeaveBack: navbarToTransparent,
});

// ----------------- burger menu MOBILE navbar ------------------

const button = document.querySelector(".MOBILE-BUTTON");
const menu = document.querySelector(".MOBILE-MENU");

button.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("opacity-0")) {
    navbarToWhite();
  } else {
    navbarToTransparent();
  }
  menu.classList.toggle("opacity-0");
}

// --------------- SLIDING WELCOME on HERO Banner ---------------
gsap.fromTo(
  ".SLIDE-TEXT",
  {
    opacity: 0,
    y: -20,
  },
  {
    y: 0,
    delay: 1,
    opacity: 1,
    duration: 0.8,
  }
);

// const selectedText = document.querySelectorAll(".SLIDE-TEXT");
// selectedText.forEach((text) => {
//   text.classList.add("");
// });

// IMAGE ZOOM on SCROLL animation
// gsap.to(".image-zoom", {
//   scrollTrigger: {
//     trigger: ".image-zoom",
//     start: "50% bottom", // start: trigger, viewport
//     end: "bottom top", // end:   trigger, viewport
//     scrub: true,
//     // markers: true,
//   },
//   scale: 1.3,
//   x: -50,
//   duration: 0.8,
// });

// experimenting with GSAP parallax - looks kind of choppy?
// gsap.to(".parallax", {
//   scrollTrigger: {
//     start: "center center", // start: trigger, viewport
//     end: "bottom top", // end:   trigger, viewport
//     trigger: ".parallax",
//     scrub: true,
//     // markers: true,
//   },
//   y: 500,
//   delay: 300,
//   ease: "none",
// });

// TODO: - make this work
// TODO: - remove @fullcalendar from the packages if not using them
// https://sleepy-spire-45235.herokuapp.com/https://example.com (heroku site that should be proxy, not working)
//
// document.addEventListener("DOMContentLoaded", function () {
//   let calendarEl = document.getElementById("calendar");
//   let calendar = new Calendar(calendarEl, {
//     plugins: [dayGridPlugin, iCalendarPlugin],
//     events: {
//       url: "https://sleepy-spire-45235.herokuapp.com/https://www.vrbo.com/icalendar/293ef3b091d0487fa6d1fcf75a4ac056.ics?nonTentative",
//       format: "ics",
//     },
//   });
//   calendar.render();
// });
