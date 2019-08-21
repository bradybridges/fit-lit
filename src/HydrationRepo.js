class HydrationRepo {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  getUserHydrationData(userID) {
    return this.hydrationData.filter(hydrationData => hydrationData.userID === userID);
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}