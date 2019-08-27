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
      return `You didn\'t take enough steps to reach your goal for today`;
    }
  }

  getDaysStepGoalReached() {
    // I would like to be able to eliminate days that are in the future if we can
    // Also consider how we would like to display this data on the dom
    const days = this.userActivity.filter(data => {
      return data.numSteps >= this.user.dailyStepGoal
    });
    return days;
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

  //   getWeekAvgMinActive(date) {
  //   const selectedDay = this.userActivity.findIndex(data => data.date === date);
  //   const firstDay = selectedDay - 6;
  //   return +(this.userActivity.reduce((mins, data, index) => {
  //     if (index <= selectedDay && index >= firstDay) {
  //       mins += data.minutesActive;
  //     }
  //     return mins;
  //   }, 0) / 7).toFixed(2);
  // }

  // for a user, what days had increasing steps for 3 or more days
  getThreeDayStepTrends() {
    return this.userActivity.reduce((streaks, data, index, activities) => {
      // console.log(data)
      if (index !== 0 && index !== activities.length - 1 && data.numSteps <= activities[index + 1].numSteps && data.numSteps >= activities[index - 1].numSteps) {
        streaks.push(data.date)
      }
      return streaks;
    }, []);
  }

}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}