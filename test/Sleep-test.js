const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/mockSleep');
const sleepData2 = require('../data/mockSleep2');
const SleepRepo = require('../src/SleepRepo');
const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  it('should be able to calc average hours slept for user', () => {
    const sleepRepo = new SleepRepo(sleepData);
    const userSleep = new Sleep(sleepRepo.getUserData(1));
    expect(userSleep.calculateAverageHoursSlept()).to.equal(6.1);
  });

  it('should be able to calc average sleep quality for user', () => {
    const sleepRepo = new SleepRepo(sleepData);
    const userSleep = new Sleep(sleepRepo.getUserData(1));
    expect(userSleep.calculateAverageSleepQuality()).to.equal(2.2);
  });

  it('should be able to find hours slept on particular day', () => {
    const sleepRepo = new SleepRepo(sleepData);
    const userSleep = new Sleep(sleepRepo.getUserData(1));
    expect(userSleep.getHoursSlept('2019/06/15')).to.equal(6.1);
  });

  it('should be able to find quality of sleep on particular day', () => {
    const sleepRepo = new SleepRepo(sleepData);
    const userSleep = new Sleep(sleepRepo.getUserData(1));
    expect(userSleep.getQuality('2019/06/15')).to.equal(2.2);
  });

  it('should be able to return hours slept for a given week', () => {
    const userSleep = new Sleep(sleepData2);
    expect(userSleep.getSleepHoursForWeek('2019/12/15')).to.deep.equal([1,2,3,4,5,6,7]);
  });

  it('should be able to return sleep quality for given week', () =>{
    const userSleep = new Sleep(sleepData2);
    expect(userSleep.getSleepQualityForWeek('2019/12/15')).to.deep.equal([1,2,3,4,5,6,7]);
  });
});