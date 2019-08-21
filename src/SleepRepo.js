class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calculateAverageSleepQuality() {
    let sleepQualities = this.sleepData.map(sleepObj => sleepObj.sleepQuality);

    return sleepQualities.reduce((acc, sleepQuality) => acc += sleepQuality, 0) / sleepQualities.length;
  }

  findUsersWithMostSleep(date) {
    const sleepFigures = this.sleepData.filter(sleepObj => sleepObj.date === date);
    sleepFigures.sort((a,b) => a.hoursSlept - b.hoursSlept);
    const max = sleepFigures[sleepFigures.length - 1].hoursSlept;
    
    return sleepFigures.filter(sleeper => sleeper.hoursSlept === max);
  }

  getUserData(userID) {
    return this.sleepData.filter(sleeper => sleeper.userID === userID);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}