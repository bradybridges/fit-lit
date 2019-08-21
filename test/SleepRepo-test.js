const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/mockSleep');
const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', () => {
  it('should be able to find average sleep quality of users', () => {
    const sleepRepo = new SleepRepo(sleepData);
    expect(sleepRepo.calculateAverageSleepQuality()).to.equal(3.1);
  });

  it('should be able to find the users with most hours slept on a date', () => {
    const sleepRepo = new SleepRepo(sleepData);
    expect(sleepRepo.findUsersWithMostSleep('2019/06/15')).to.deep.equal([sleepData[2], sleepData[3]]);
  });

  it('should be able to return a users sleep data based on ID', () => {
    const sleepRepo = new SleepRepo(sleepData);
    expect(sleepRepo.getUserData(2)).to.deep.equal([sleepData[1]]);
  });
})