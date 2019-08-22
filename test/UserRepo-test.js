const chai = require('chai');
const expect = chai.expect;
const data = require('../data/mockUsers');
// const users = data.userData;
const UserRepo = require('../src/UserRepo');


describe('UserRepo', () => {

  let users;

  beforeEach(() => {
    users = new UserRepo(data);
  })

  it('should load in users', () => {
    expect(users.users.length).to.equal(5);
  });

  it('should find a user given id', () => {
  
    expect(users.getUser(1).name).to.deep.equal('Luisa Hane');
  });

  it('should be able to calculate average steps goal of all users', () => {
    expect(users.calculateAverageStepGoal()).to.equal(6400);
  });
});