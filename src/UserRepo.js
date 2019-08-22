class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
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

