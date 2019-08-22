const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/mockActivity');
const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {

  let activityRepo, date;

  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData);
    date = '2019/07/15';
  })

  it('should return user activity given id', () => {
    expect(activityRepo.getUserActivity(1).length).to.equal(9);
  })


})