const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/mockHydration');
const HydrationRepo = require('../src/HydrationRepo.js');

describe('HydrationRepo', () => {

  let hydrationRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(hydrationData);
  })
  
  it('should be able to return specific users hydration data', () => {
    
    expect(hydrationRepo.getUserHydrationData(1).length).to.equal(9);
  })
})

