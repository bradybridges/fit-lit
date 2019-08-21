const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/mockActivity');
const ActivityRepo = require('../src/ActivityRepo');

describe('Activity', () => {

  let activityRepo, date;

  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData);
    date = '2019/07/15';
  })

  it('should   ', () => {

    
  })


})