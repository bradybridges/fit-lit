class Activity {
  constructor(userActivity, user) {
    this.userActivity = userActivity;
    this.user = user;
  }

  getMilesWalked(date) {
    let steps = this.userActivity.find(data => data.date === date).numSteps;
    return +((this.user.strideLength * steps) / 5280).toFixed(2);
  }


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}