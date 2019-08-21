const User = require('../src/User');

class UserRepo {
  constructor(data) {
    this.users = data.map(user => new User(user));
  }

  getUser(id) {
    let user = this.users.find(user => user.id === id);
    return user;
  }

  calculateAverageStepGoal() {
    let totalSteps = this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0);
    return totalSteps / this.users.length;
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}

