const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/mockActivity');
const userData = require('../data/mockUsers'); 
const ActivityRepo = require('../src/ActivityRepo');
const Activity = require('../src/Activity');
const UserRepo = require('../src/UserRepo');


describe('Activity', () => {

  let userRepo, user, activityRepo, userActivity, date;

  beforeEach(() => {
    userRepo = new UserRepo(userData);
    user = userRepo.getUser(1);
    activityRepo = new ActivityRepo(activityData, userRepo);
    userActivity = new Activity(activityRepo.getUserActivity(1), user);
    date = '2019/07/15';
  })

  it('should return miles walked for user on given date', () => {
    expect(userActivity.getMilesWalked(date)).to.equal(5.95)
  })


})