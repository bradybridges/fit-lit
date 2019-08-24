const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/mockHydration');
const HydrationRepo = require('../src/HydrationRepo');
const Hydration = require('../src/Hydration');

describe('Hydration', () => {

  let hydration, hydrationRepo, date;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(hydrationData);
    hydration = new Hydration(hydrationRepo.getUserHydrationData(1));
    date = '2019/07/15';
  })

  it('should be able to calculate avg ounces consumed for all time', () => {
    
    expect(hydration.getAverageFluidOunces()).to.equal(33);
  });

  it('should be able to find ounces consumed on specific date' , () => {
  
    expect(hydration.getFluidOuncesOnDay(date)).to.equal(30);
  });

  it('should be able to find average ounces for a given week', () => {

    expect(hydration.getFluidOuncesForWeek(date).length).to.equal(7);
  });
})