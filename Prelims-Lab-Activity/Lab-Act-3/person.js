// Rabano, Rymbrent Maximillian L.
// WD-201 
// 01-30-23

module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName +  ' ' + this.lastName;
  }
}
