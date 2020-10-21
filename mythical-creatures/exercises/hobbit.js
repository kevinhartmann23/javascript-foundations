class Hobbit {
  constructor(name, adult) {
    this.name = name;
    this.age = 0;
    this.adult = adult;
    this.old = false;
    this.hasRing = true;

 if (this.name === 'Frodo') {
   this.hasRing = true;
 } else {
   this.hasRing = false;
 }

  };

celebrateBirthday() {
  this.age++;
  if (this.age <= 32) {
    this.adult = false;
  } else if (this.age <= 100) {
    this.adult = true;
  } else {
    this.old = true;
    }
  };

};

module.exports = Hobbit;
