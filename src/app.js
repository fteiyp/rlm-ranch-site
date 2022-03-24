// GSAP stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// TODO Calendar stuff - delete if not using
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import iCalendarPlugin from "@fullcalendar/icalendar";

gsap.registerPlugin(ScrollTrigger);

const showAnim = gsap
  .from(".main-tool-bar", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "5% top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
  onEnter: () => gsap.to(".navbar", { backgroundColor: "white" }),
  onLeaveBack: () => gsap.to(".navbar", { backgroundColor: "transparent" }),
});

// TODO - make this work
// TODO - remove @fullcalendar from the packages if not using them
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
