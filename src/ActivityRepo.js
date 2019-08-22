class ActivityRepo {
  constructor(activityData, users) {
    this.activityData = activityData;
    this.users = users;
  } 

  getUserActivity(id) {
    return this.activityData.filter(data => data.userID === id);
  }

  getTodaysData(date) {
    return this.activityData.filter(data => data.date === date);
  }

  getAvgStairsAllUsers(date) {
    const todaysData = this.getTodaysData(date);
    return +(todaysData.reduce((total, data) => {
      total += data.flightsOfStairs;
      return total;
    }, 0) / todaysData.length).toFixed(2);
  }

  getAvgStepsAllUsers(date) {
    const todaysData = this.getTodaysData(date);
    return +(todaysData.reduce((total, data) => {
      total += data.numSteps;
      return total;
    }, 0) / todaysData.length).toFixed(2);
  }

  getAvgMinActiveAllUsers(date) {
    const todaysData = this.getTodaysData(date);
    return +(todaysData.reduce((total, data) => {
      total += data.minutesActive;
      return total;
    }, 0) / todaysData.length).toFixed(2);    
  }

  
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}