class ActivityRepo {
  constructor(activityData, users) {
    this.activityData = activityData;
    this.users = users;
  } 

  getUserActivity(id) {
    return this.activityData.filter(data => data.userID === id);
  }

  

  
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}