import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const n=document.getElementById("datetime-picker"),o=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");let d=null,i=null;o.addEventListener("click",I);const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=new Date?y.info({position:"topRight",message:"Please choose a date in the future"}):(i=t[0],o.removeAttribute("disabled"))}};h(n,E);function I(){d=setInterval(g,1e3),o.setAttribute("disabled",!0),n.setAttribute("disabled",!0)}function g(){const t=i-new Date,{days:r,hours:s,minutes:a,seconds:u}=q(t);p.textContent=e(r),b.textContent=e(s),S.textContent=e(a),v.textContent=e(u),t<1e3&&(clearInterval(d),n.removeAttribute("disabled"))}function e(t){return String(t).padStart(2,"0")}function q(t){const c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=1-timer.js.map
