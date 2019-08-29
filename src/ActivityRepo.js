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

  getTotalStepsForWeek(date, id) {
    const userData = this.activityData.filter(data => data.userID === id);
    const startIndex = userData.findIndex(data => data.date === date) - 6;
    const stepTotal = userData.reduce((totalSteps, activity, index) => {
      if (index >= startIndex && index <= startIndex + 6) {
        totalSteps += activity.numSteps;
      }
      return totalSteps;
    }, 0);
    return stepTotal;
  }

  getTotalStepWinnerIndex(totalStepArray) {
    let mostSteps = totalStepArray.reduce((maxSteps, steps) => {
      steps > maxSteps ? maxSteps = steps : null;
      return maxSteps;
    }, -1);
    return totalStepArray.findIndex(steps => steps === mostSteps);
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}