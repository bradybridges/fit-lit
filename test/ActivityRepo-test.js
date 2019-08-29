const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/mockActivity');
const userData = require('../data/mockUsers');
const ActivityRepo = require('../src/ActivityRepo');
const UserRepo = require('../src/UserRepo');

describe('ActivityRepo', () => {

  let activityRepo, users, date;

  beforeEach(() => {
    users = new UserRepo(userData);
    activityRepo = new ActivityRepo(activityData, users);
    date = '2019/07/15';
  })

  it('should return user activity given id', () => {
    expect(activityRepo.getUserActivity(1).length).to.equal(9);
  })

  it('should return all users avg stairs given date', () => {
    expect(activityRepo.getAvgStairsAllUsers(date)).to.equal(25.4);
  })

  it('should return all users avg steps given date', () => {
    expect(activityRepo.getAvgStepsAllUsers(date)).to.equal(9520);
  })

  it('should return all users avg min active given date', () => {
    expect(activityRepo.getAvgMinActiveAllUsers(date)).to.equal(204);
  })

  it('should return total steps for week for a user', () => {
    expect(activityRepo.getTotalStepsForWeek(date, 1)).to.equal(49400);
  })

  it('should return index of most steps from an array', () => {
    expect(activityRepo.getTotalStepWinnerIndex([10, 25, 2])).to.equal(1);
  })

})