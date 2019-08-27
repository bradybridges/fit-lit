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

  getFriendNames(friendIDArray) {
    let friends = [];
    friendIDArray.forEach(friendID => {
      const user = this.users.find(user => user.id === friendID);
      const name = user.name.split(' ')[0];
      friends.push(name);
    });
    return friends;
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}

