class UserRepo {
  constructor(data) {
    this.users = data;
  }

  getUser(id) {
    let user = this.users.filter(user => user.id === id);
    return user[0];
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

