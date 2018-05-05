"use strict";

(function calendar() {

  class DateHelper {
    constructor(startDate = new Date()) {
      this.startDate = startDate;
      this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    getDay(day = 0) {
      return new Date(this.getYear(), this.startDate.getMonth(), day).getDay();
    }

    getMonth() {
      return this.monthNames[this.startDate.getMonth()]
    }

    getYear() {
      return this.startDate.getFullYear();
    }

    getDaysInMonth() {
      return new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0).getDate();
    }

    getFirstDayInMonth() {
      return new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1).getDay();
    }

    changeMonthByDelta(delta) {
      this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + delta, 0);
    }

    isWeekend(day) {
      const dayNumber = this.getDay(day);
      return dayNumber === 5 || dayNumber === 6;
    }

    toArray() {
      const array = [];
      for(let i = 0; i < this.getDaysInMonth(); i++) {
        array.push(i);
      }
      return array;
    }
  }

  function renderDay(day, isWeekend = false) {
    return `<span class="calendar-square ${isWeekend ? 'weekend' : ''}">${day}</span>`;
  }

  // wait for DOM to load, then render cal
  document.addEventListener("DOMContentLoaded", event => {
    let currentMonth = new DateHelper();
    currentMonth.changeMonthByDelta(2)

    // save DOM elements for later
    const monthTitleEl = document.getElementById('month-title');
    const daysContainerEl = document.getElementById('days');

    function renderCalendar() {
      // render month title
      const monthTitle = `${currentMonth.getMonth()} ${currentMonth.getYear()}`
      monthTitleEl.innerText = monthTitle;

      // render days
      const spacerAmount = currentMonth.getFirstDayInMonth();
      const spacerEl = new Array(spacerAmount).fill('').map(renderDay).join('');
      const days = currentMonth.toArray().map(day => renderDay(day + 1, currentMonth.isWeekend(day))).join('')
      daysContainerEl.innerHTML = spacerEl + days;
    }

    renderCalendar();
    
  });
})()