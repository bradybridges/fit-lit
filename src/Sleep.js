class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calculateAverageHoursSlept() {
    return +(this.sleepData.reduce((acc, sleepObj) => {
      acc += sleepObj.hoursSlept;
      return acc;
    }, 0) / this.sleepData.length).toFixed(2);  
  }

  calculateAverageSleepQuality() {
    return +(this.sleepData.reduce((acc, sleepObj) => {
      acc += sleepObj.sleepQuality;
      return acc;
    }, 0) / this.sleepData.length).toFixed(2);
  }

  getHoursSlept(date) {
    return this.sleepData.find(sleepObj => sleepObj.date === date).hoursSlept;
  }

  getQuality(date) {
    return this.sleepData.find(sleepObj => sleepObj.date === date).sleepQuality;
  }

  getSleepScore(date) {
    const sleep = this.sleepData.find(sleepObj => sleepObj.date === date);
    return sleep.hoursSlept * sleep.sleepQuality;
  }

  getSleepHoursForWeek(date) {
    const today = this.sleepData.findIndex(data => data.date === date);
    const week = this.sleepData.slice(today - 6, today + 1);
    return week.map(day => ({['x']: day.date, ['y']: day.hoursSlept}));
  } 

  getSleepQualityForWeek(date) {
    const today = this.sleepData.findIndex(data => data.date === date);
    const week = this.sleepData.slice(today - 6, today + 1);
    return week.map(day => ({['x']: day.date, ['y']: day.sleepQuality}));
  } 

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}