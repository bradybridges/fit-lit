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

  getWeekMinActive(date) {
    const selectedDay = this.userActivity.findIndex(data => data.date === date);
    const firstDay = selectedDay - 6;
    return this.userActivity.reduce((mins, data, index) => {
      if (index <= selectedDay && index >= firstDay) {
        mins.push({['x']: data.date, ['y']:data.minutesActive})
      }
      return mins;
    }, []);
  }

  getWeekSteps(date) { 
    const selectedDay = this.userActivity.findIndex(data => data.date === date);
    const firstDay = selectedDay - 6;
    return this.userActivity.reduce((steps, data, index) => {
      if (index <= selectedDay && index >= firstDay) {
        steps.push({['x']: data.date, ['y']:data.numSteps})
      }
      return steps;
    }, []);
  }

  getWeekStairs(date) {
    const today = this.userActivity.findIndex(data => data.date === date);
    const week = this.userActivity.slice(today - 6, today + 1);
     return week.map(day => ({['x']: day.date, ['y']: day.flightsOfStairs}))
  }

  getThreeDayStepTrends() {
    return this.userActivity.reduce((streaks, data, index, activities) => {
      if (index !== 0 && index !== activities.length - 1 && data.numSteps <= activities[index + 1].numSteps && data.numSteps >= activities[index - 1].numSteps) {
        streaks.push(activities[index + 1].date)
      }
      return streaks;
    }, []);
  }

  getThreeDayStairTrends() {
    return this.userActivity.reduce((streaks, data, index, activities) => {
      if (index !== 0 && index !== activities.length - 1 && data.flightsOfStairs <= activities[index + 1].flightsOfStairs && data.flightsOfStairs >= activities[index - 1].flightsOfStairs) {
        streaks.push(activities[index + 1].date)
      }
      return streaks;
    }, []);
  }


}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}