class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calculateAverageHoursSlept() {
    let sleepTotal = this.sleepData.reduce((acc, sleepObj) => {
      acc += sleepObj.hoursSlept;
      return acc;
    }, 0);
    return sleepTotal / this.sleepData.length;  
  }

  calculateAverageSleepQuality() {
    let qualityTotal = this.sleepData.reduce((acc, sleepObj) => {
      acc += sleepObj.sleepQuality;
      return acc;
    }, 0);
    return qualityTotal / this.sleepData.length;
  }

  getHoursSlept(date) {
    return this.sleepData.find(sleepObj => sleepObj.date === date).hoursSlept;
  }

  getQuality(date) {
    return this.sleepData.find(sleepObj => sleepObj.date === date).sleepQuality;
  }

  getSleepHoursForWeek(date) {
    const startIndex = this.sleepData.findIndex(sleepObj => sleepObj.date === date) - 6;
    const sleepHours = this.sleepData.reduce((acc, sleepObj, index) => {
      if(index >= startIndex && index <= startIndex + 6) {
        acc.push(sleepObj.hoursSlept);
      }
      return acc;
    }, []);
    return sleepHours;  
  }

  getSleepQualityForWeek(date) {
    const startIndex = this.sleepData.findIndex(sleepObj => sleepObj.date === date) - 6;
    const sleepQualities = this.sleepData.reduce((acc, sleepObj, index) => {
      if(index >= startIndex && index <= startIndex + 6) {
        acc.push(sleepObj.sleepQuality);
      }
      return acc;
    }, []);
    return sleepQualities;
  } 

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}