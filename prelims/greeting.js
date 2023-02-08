module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Hello = function () {
    return 'Hello, ' + this.firstName + this.lastName + '.';
  };
  this.Congrats = function () {
    return 'Congrats, ' + this.firstName + this.lastName + '.';
  };
  this.Goodbye = function () {
    return 'Goodbye, ' + this.firstName + this.lastName + '.';
  };
};
