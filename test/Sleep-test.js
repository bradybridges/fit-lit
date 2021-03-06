const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/mockSleep');
const SleepRepo = require('../src/SleepRepo');
const Sleep = require('../src/Sleep');
 
describe('Sleep', () => {

  let sleepRepo, sleeper, date;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
    sleeper = new Sleep(sleepRepo.getUserData(1));
    
    date = '2019/07/15';
  });

  it('should be able to calc average hours slept for user', () => {
   
    expect(sleeper.calculateAverageHoursSlept()).to.equal(5.78);
  });  

  it('should be able to calc average sleep quality for user', () => {
    
    expect(sleeper.calculateAverageSleepQuality()).to.equal(5.33);
  });

  it('should be able to find hours slept on particular day', () => {
  
    expect(sleeper.getHoursSlept(date)).to.equal(8);
  });

  it('should be able to find quality of sleep on particular day', () => {
 
    expect(sleeper.getQuality(date)).to.equal(8);
  });

  it('should be able to return hours slept for a given week', () => {

    expect(sleeper.getSleepHoursForWeek(date).length).to.deep.equal(7);
  });

  it('should be able to return sleep quality for given week', () =>{

    expect(sleeper.getSleepQualityForWeek(date).length).to.deep.equal(7);
  });

  it('should be able to return sleep score for a given day', () => {
    expect(sleeper.getSleepScore(date)).to.equal(64);
  });
});    