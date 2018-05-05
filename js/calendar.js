"use strict";

(function calendar() {

  class DateHelper {
    constructor(startDate = new Date()) {
      this.startDate = startDate;
      this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    getDay(day = 0) {
      return new Date(this.startDate.getFullYear(), this.startDate.getMonth(), day).getDay();
    }

    getMonthName() {
      return this.monthNames[this.startDate.getMonth()]
    }

    getYearName() {
      return this.startDate.getFullYear();
    }

    getDaysInMonth() {
      return new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0).getDate();
    }

    getFirstDayInMonth() {
      return new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1).getDay();
    }

    changeMonthByDelta(delta) {
      this.startDate = new Date(this.startDate.getFullYear(), (this.startDate.getMonth() + 1) + delta, 0);
    }

    isWeekend(day) {
      const dayNumber = this.getDay(day);
      return dayNumber === 5 || dayNumber === 6;
    }

    toArray() {
      const array = [];
      for(let i = 0; i < this.getDaysInMonth(); i++) {
        array.push(i + 1);
      }
      return array;
    }
  }

  // wait for DOM to load, then render cal
  document.addEventListener("DOMContentLoaded", event => {
    let currentMonth = new DateHelper();

    // save DOM elements for later
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

    // this gets called on DOM load, and also when we change month
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