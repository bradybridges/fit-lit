const chai = require('chai');
const expect = chai.expect;
const data = require('../data/mockUsers');
const users = data.userData;
const UserRepo = require('../src/UserRepo');

describe('UserRepo', () => {

  it('should load in users', () => {
    const users = new UserRepo(data);
    expect(users.users.length).to.equal(5);
  });

  it('should be able to find a user based on id', () => {
    const users = new UserRepo(data);
    expect(users.getUser(1)).to.deep.equal(data[0]);
  });

  it('should be able to calculate average steps goal of all users', () => {
    const users = new UserRepo(data);
    expect(users.calculateAverageStepGoal()).to.equal(6400);
  });
});