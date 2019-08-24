class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calculateAverageHoursSlept() {
    let sleepTotal = this.sleepData.reduce((acc, sleepObj) => {
      acc += sleepObj.hoursSlept;
      return acc;
    }, 0);
    return  +(sleepTotal / this.sleepData.length).toFixed(2);  
  }

  calculateAverageSleepQuality() {
    let qualityTotal = this.sleepData.reduce((acc, sleepObj) => {
      acc += sleepObj.sleepQuality;
      return acc;
    }, 0);
    return +(qualityTotal / this.sleepData.length).toFixed(2);
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
    const startIndex = this.sleepData.findIndex(sleepObj => sleepObj.date === date) - 6;
    const sleepHours = this.sleepData.reduce((acc, sleepObj, index) => {
      if(index >= startIndex && index <= startIndex + 6) {
        acc.push({['x']: sleepObj.date, ['y']: sleepObj.hoursSlept});
      }
      return acc;
    }, []);
    return sleepHours;  
  } 

  getSleepQualityForWeek(date) {
    const startIndex = this.sleepData.findIndex(sleepObj => sleepObj.date === date) - 6;
    const sleepQualities = this.sleepData.reduce((acc, sleepObj, index) => {
      if(index >= startIndex && index <= startIndex + 6) {
        acc.push({['x']: sleepObj.date, ['y']: sleepObj.sleepQuality});
      }
      return acc;
    }, []);
    return sleepQualities;
  } 

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}