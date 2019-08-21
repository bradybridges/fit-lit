const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/mockActivity');
const ActivityRepo = require('../src/ActivityRepo');
const Activity = require('../src/Activity');

describe('Activity', () => {

  let activityRepo, userActivity, date;

  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData);
    userActivity = new Activity(activityRepo);
    date = '2019/07/15';
  })

  it('should   ', () => {

    
  })


})