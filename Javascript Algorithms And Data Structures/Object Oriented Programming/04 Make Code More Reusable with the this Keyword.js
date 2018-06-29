/**
* Task: Modify the dog.sayLegs method to remove any references to dog. Use the
* duck example for guidance."
*/
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
