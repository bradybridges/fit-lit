const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/mockHydration');
const HydrationRepo = require('../src/HydrationRepo.js');

describe('HydrationRepo', () => {
  it('should be able to return specific users hydration data', () => {
    const hydrationRepo = new HydrationRepo(hydrationData);
    expect(hydrationRepo.getUserHydrationData(1)).to.deep.equal(hydrationData.filter(hydration => hydration.userID === 1));
  })
})