"use strict";

class SuperDate {
  constructor(startDate = new Date()) {
    this.startDate = startDate;
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }
  
  // returns the actual day in week (0 - 6) in current month
  getDay(day = 0) {
    return new Date(this.startDate.getFullYear(), this.startDate.getMonth(), day).getDay();
  }
  
  // returns month name
  getMonthName() {
    return this.monthNames[this.startDate.getMonth()]
  }
  
  // returns year name
  getYearName() {
    return this.startDate.getFullYear();
  }
  
  // returns total number of days in current month
  getDaysInMonth() {
    return new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0).getDate();
  }
  
  // returns the actual day of in week (0 - 6) of the first day of the month
  // useful for setting offset in cal render
  getFirstDayInMonth() {
    return new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1).getDay();
  }
  
  // changes startDate by 'delta' amount
  // it would be better to return a new DateHelper object instead of mutating the internal date
  changeMonthByDelta(delta) {
    this.startDate = new Date(this.startDate.getFullYear(), (this.startDate.getMonth() + 1) + delta, 0);
  }
  
  // returns true / false if given day is Saturday or Sunday
  isWeekend(day) {
    const dayNumber = this.getDay(day);
    return dayNumber === 0 || dayNumber === 6;
  }
  
  // returns an array of days in month
  toArray() {
    const array = [];
    for(let i = 0; i < this.getDaysInMonth(); i++) {
      array.push(i + 1);
    }
    return array;
  }
}
