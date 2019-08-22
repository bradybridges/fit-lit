const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/mockSleep');
const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', () => { 

  let sleepRepo, date;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
    date = '2019/07/15';
  })
  
  it('should be able to find average sleep quality of users', () => {
    
    expect(sleepRepo.calculateAverageSleepQuality()).to.equal(3.1);
  });

  it('should be able to find the users with most hours slept on a date', () => {
   
    expect(sleepRepo.findUsersWithMostSleep(date).length).to.equal(1);
  });

  it('should be able to return a users sleep data based on ID', () => {
    // adjust test for specific detail once mock data is updated
    expect(sleepRepo.getUserData(2)).to.deep.equal([sleepData[1]]);
  });

  // it('should return all users with sleep quality greater than 3 given week', () => {
  //   expect(sleepRepo.usersAvgSleepQualityGreaterThree(date)).to.equal();
  // })
})