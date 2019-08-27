const chai = require('chai');
const expect = chai.expect;
const data = require('../data/mockUsers');
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

  it('should return user friend names given', () => {
    let friends = users.getUser(1).friends;
    expect(users.getFriendNames(friends)).to.deep.equal([ 'Jarvis', 'Herminia', 'Mae']);
  });
});