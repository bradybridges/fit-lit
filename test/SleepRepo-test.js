const chai = require('chai');
const expect = chai.expect;
const mockSleep = require('../data/mockSleep');
const SleepRepo = require('../src/SleepRepo');
const UserRepo = require('../src/UserRepo');
const mockUsers = require('../data/mockUsers');

describe('SleepRepo', () => { 

  let sleepRepo, date; 

  beforeEach(() => {
    sleepRepo = new SleepRepo(mockSleep, mockUsers);
    date = '2019/07/15';
  })
  
  it('should be able to find average sleep quality of users', () => {
    
    expect(sleepRepo.calculateAverageSleepQuality()).to.equal(3.87);
  });

  it('should be able to find the users with most hours slept on a date', () => {
   
    expect(sleepRepo.findUsersWithMostSleep(date).length).to.equal(2);
  });

  it('should be able to return a users sleep data based on ID', () => {
    
    expect(sleepRepo.getUserData(2).length).to.equal(9);
  });

  it('should return all users with sleep quality greater than 3 given week', () => {
    let sleepers = sleepRepo.usersAvgSleepQualityGreaterThree(date);
    expect(sleepers).to.equal(4);
  })
})