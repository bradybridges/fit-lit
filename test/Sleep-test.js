const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/mockSleep');
const sleepData2 = require('../data/mockSleep2');
const SleepRepo = require('../src/SleepRepo');
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  let sleepRepo, userSleep, date;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
    userSleep = new Sleep(sleepRepo.getUserData(1));
    date = '2019/07/15';
  })

  it('should be able to calc average hours slept for user', () => {
   
    expect(userSleep.calculateAverageHoursSlept()).to.equal(6.1);
  });  

  it('should be able to calc average sleep quality for user', () => {
    
    expect(userSleep.calculateAverageSleepQuality()).to.equal(2.2);
  });

  it('should be able to find hours slept on particular day', () => {
   
    expect(userSleep.getHoursSlept('2019/06/15')).to.equal(6.1);
  });

  it('should be able to find quality of sleep on particular day', () => {
 
    expect(userSleep.getQuality('2019/06/15')).to.equal(2.2);
  });

// update tests after changing mock data

  // it('should be able to return hours slept for a given week', () => {
   
  //   expect(userSleep.getSleepHoursForWeek('2019/12/15')).to.deep.equal([1,2,3,4,5,6,7]);
  // });

  // it('should be able to return sleep quality for given week', () =>{
 
  //   expect(userSleep.getSleepQualityForWeek('2019/12/15')).to.deep.equal([1,2,3,4,5,6,7]);
  // });
});