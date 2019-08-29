class Activity {
  constructor(userActivity, user) {
    this.userActivity = userActivity;
    this.user = user;
  } 

  getMilesWalked(date) {
    const steps = this.userActivity.find(data => data.date === date).numSteps;
    return +((this.user.strideLength * steps) / 5280).toFixed(2);
  }

  getMinutesActive(date) {
    return this.userActivity.find(data => data.date === date).minutesActive;
  }

  getStepsTaken(date) {
    return this.userActivity.find(data => data.date === date).numSteps;
  }

  getFlightsOfStairs(date) {
    return this.userActivity.find(data => data.date === date).flightsOfStairs;
  }

  getWeekAvgMinActive(date) {
    const selectedDay = this.userActivity.findIndex(data => data.date === date);
    const firstDay = selectedDay - 6;
    return +(this.userActivity.reduce((mins, data, index) => {
      if (index <= selectedDay && index >= firstDay) {
        mins += data.minutesActive;
      }
      return mins;
    }, 0) / 7).toFixed(2);
  }

  checkStepGoal(date) {
    const steps = this.userActivity.find(data => data.date === date).numSteps;
    if (steps >= this.user.dailyStepGoal) {
      return `You reached your step goal for today!!!`;
    } else {
      return `You didn't take enough steps to reach your goal for today`;
    }
  }

  getDaysStepGoalReached() {
    return this.userActivity.filter(data => {
      return data.numSteps >= this.user.dailyStepGoal
    }).length;
  }

  getUserStairRecord() {
    return this.userActivity.reduce((highest, data) => {
      if (data.flightsOfStairs > highest) {
        highest = data.flightsOfStairs;
      }
      return highest;
    }, 0);
  }

  getFriends() {
    return this.user.friends;
  }

  getWeekMinActive(date) {
    const today = this.userActivity.findIndex(data => data.date === date);
    const week = this.userActivity.slice(today - 6, today + 1);
    return week.map(day => ({['x']: day.date, ['y']: day.minutesActive}));
  }

  getWeekSteps(date) { 
    const today = this.userActivity.findIndex(data => data.date === date);
    const week = this.userActivity.slice(today - 6, today + 1);
    return week.map(day => ({['x']: day.date, ['y']: day.numSteps}));
  }

  getWeekStairs(date) {
    const today = this.userActivity.findIndex(data => data.date === date);
    const week = this.userActivity.slice(today - 6, today + 1);
    return week.map(day => ({['x']: day.date, ['y']: day.flightsOfStairs}));
  }

  getThreeDayStepTrends() {
    let trends = this.userActivity.reduce((streaks, data, index, activities) => {
      if (index !== 0 && index !== activities.length - 1 && data.numSteps < activities[index + 1].numSteps && data.numSteps > activities[index - 1].numSteps) {
        streaks.push(data);
      }
      return streaks;
    }, []);
    return trends.length;
  }

  getThreeDayStairTrends() {
    let trends = this.userActivity.reduce((streaks, data, index, activities) => {
      if (index !== 0 && index !== activities.length - 1 && data.flightsOfStairs < activities[index + 1].flightsOfStairs && data.flightsOfStairs > activities[index - 1].flightsOfStairs) {
        streaks.push(data);
      }
      return streaks;
    }, []);
    return trends.length;
  }


}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}