const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const data = require('../data/mockUsers');


describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(data[0])
  })

  it('should be able to return first name of the user', () => {
    expect(user.getFirstName()).to.equal('Luisa');
  });
  
});