"use strict";

(function calendar() {

  // wait for DOM to load, then render cal
  document.addEventListener("DOMContentLoaded", event => {
    let currentMonth = new DateHelper();

    // create / save DOM elements for later
    const calendarWrapper = document.getElementById('calendar-wrapper');
    const monthTitleEl = document.getElementById('month-title');
    const daysContainerEl = document.getElementById('days');
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    // add event handlers
    backButton.onclick = () => {
      currentMonth.changeMonthByDelta(-1);
      renderCalendar();
    }

    nextButton.onclick = () => {
      currentMonth.changeMonthByDelta(1);
      renderCalendar();
    }

    // this gets called on DOM load, and also when we change the month
    function renderCalendar() {
      // render month title
      renderMonthTitle(currentMonth, monthTitleEl);

      // render days
      renderDays(currentMonth, daysContainerEl);
    }

    function renderDay(day, isWeekend = false) {
      return `<span class="calendar-square ${isWeekend ? 'weekend' : ''}">${day}</span>`;
    }

    function renderMonthTitle(currentMonth, targetEl) {
      const monthTitle = `${currentMonth.getMonthName()} ${currentMonth.getYearName()}`;

      targetEl.innerText = monthTitle;
    }

    function renderDays(currentMonth, targetEL) {
      const spacerAmount = currentMonth.getFirstDayInMonth();
      const spacerEl = new Array(spacerAmount).fill('').map(renderDay).join('');
      const days = currentMonth.toArray().map(day => renderDay(day, currentMonth.isWeekend(day))).join('');

      targetEL.innerHTML = spacerEl + days;
    }

    // initial render
    renderCalendar();
  
  });
})()