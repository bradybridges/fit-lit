const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/mockHydration');
const HydrationRepo = require('../src/HydrationRepo');
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  it('should be able to calculate avg ounces consumed for all time', () => {
    const hydrationRepo = new HydrationRepo(hydrationData);
    const hydration = new Hydration(hydrationRepo.getUserHydrationData(1));
    expect(hydration.getAverageFluidOunces()).to.equal(35);
  });

  it('should be able to find ounces consumed on specific date' , () => {
    const hydrationRepo = new HydrationRepo(hydrationData);
    const hydration = new Hydration(hydrationRepo.getUserHydrationData(1));
    expect(hydration.getFluidOuncesOnDay('2019/07/15')).to.equal(40);
  });

  it('should be able to find average ounces for a given week', () => {
    const hydrationRepo = new HydrationRepo(hydrationData);
    const hydration = new Hydration(hydrationRepo.getUserHydrationData(1));
    expect(hydration.getFluidOuncesForWeek('2019/12/15')).to.deep.equal([30,40,40,30,40,30,40]);
  });
})