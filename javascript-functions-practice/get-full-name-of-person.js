/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
