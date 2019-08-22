const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/mockSleep');
const sleepData2 = require('../data/mockSleep2');
const SleepRepo = require('../src/SleepRepo');
const Sleep = require('../src/Sleep');
 
describe('Sleep', () => {

  let sleepRepo, userSleep, sleeper, date;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData2);
    sleeper = new Sleep(sleepRepo.getUserData(1));
    // userSleep = new Sleep(sleepRepo.getUserData(1));
    date = '2019/07/15';
  })

  it('should be able to calc average hours slept for user', () => {
   
    expect(sleeper.calculateAverageHoursSlept()).to.equal(5);
  });  

  it('should be able to calc average sleep quality for user', () => {
    
    expect(sleeper.calculateAverageSleepQuality()).to.equal(5);
  });

  it('should be able to find hours slept on particular day', () => {
  
    expect(sleeper.getHoursSlept(date)).to.equal(8);
  });

  it('should be able to find quality of sleep on particular day', () => {
 
    expect(sleeper.getQuality(date)).to.equal(8);
  });

  it('should be able to return hours slept for a given week', () => {

    expect(sleeper.getSleepHoursForWeek(date)).to.deep.equal([2,3,4,5,6,7,8]);
  });

  it('should be able to return sleep quality for given week', () =>{

    expect(sleeper.getSleepQualityForWeek(date)).to.deep.equal([2,3,4,5,6,7,8]);
  });
});    