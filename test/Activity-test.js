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

  it('should return a user\'s min active for date', () => {
    expect(userActivity.getMinutesActive(date)).to.equal(140);
  })

  it('should return user\'s steps taken for date', () => {
    expect(userActivity.getStepsTaken(date)).to.equal(7300);
  })

  it('should return user\'s stairs climbed for date', () => {
    expect(userActivity.getFlightsOfStairs(date)).to.equal(26);
  })

  it('should return user\'s avg min active for week given date', () => {
    expect(userActivity.getWeekAvgMinActive(date)).to.equal(162.86);
  })

  it('should check if user reached step goal on given date', () => {
    expect(userActivity.checkStepGoal(date)).to.equal('You didn\'t take enough steps to reach your goal for today');
  })

  it('should return all days user reached their step goal', () => {
    expect(userActivity.getDaysStepGoalReached().length).to.equal(2);
  })

  it('should return user\'s stair record', () => {
    expect(userActivity.getUserStairRecord()).to.equal(36)
  })

  it('should return friends of user', () => {
    expect(userActivity.getFriends().length).to.equal(3);
  })

  it('should return the user\'s weekly minutes active', () => {
    expect(userActivity.getWeekMinActive(date).length).to.equal(7);
  });

  it('should return the user\'s weekly steps', () => {
    expect(userActivity.getWeekSteps(date).length).to.equal(7);
  });

  it('should return the user\'s weekly stairs', () => {
    expect(userActivity.getWeekStairs(date).length).to.equal(7);
  })

  it('should return the number of days user had 3 days increased steps', () => {
    expect(userActivity.getThreeDayStepTrends().length).to.equal(3);
  })

  it('should return the number of days user had 3 days increased stairs', () => {
    expect(userActivity.getThreeDayStairTrends().length).to.equal(2);
  })

})