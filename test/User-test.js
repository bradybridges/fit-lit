const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const data = require('../data/mockUsers');


describe('User', () => {
  it('should be able to return first name of the user', () => {
    const user = new User(data[0]);
    expect(user.getFirstName()).to.equal('Luisa');
  });
  
});
