class SleepRepo {
  constructor(sleepData, users) {
    this.sleepData = sleepData;
    this.users = users;
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

  usersAvgSleepQualityGreaterThree(date) {
    let goodSleepers = [];
    this.users.forEach(user => {
      let sleepData = this.getUserData(user.id);
      let today = sleepData.findIndex(data => data.date === date);
      let firstDay = today - 6;
      let avg = +(sleepData.reduce((total, data, index) => {
        if (index >= firstDay && index <= today) {
          total += data.sleepQuality;
        }
        return total;
      }, 0) / 7).toFixed(2);
      if (avg >= 3) {  
        goodSleepers.push(user.name);
      }
    })
    return goodSleepers;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}