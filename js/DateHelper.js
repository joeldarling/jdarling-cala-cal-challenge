"use strict";

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
