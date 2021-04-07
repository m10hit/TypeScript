var employee1 = {
    fName: 'Joey',
    lName: 'Tribbiani',
    age: 30
};
var employee2 = {
    fName: 'Ross',
    lName: 'Gellar'
};
// Interface, Function and Objects
function fullName(person) {
    console.log(person.fName + " " + person.lName);
}
var p = {
    fName: 'Bruce',
    lName: 'Wayne'
};
fullName(p);
