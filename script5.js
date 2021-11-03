/*
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(4)); //, 10);
console.log(addUp(13)); //, 91);
console.log(addUp(600)); //, 180300);
console.log(addUp(392)); //, 77028);
console.log(addUp(53)); //, 1431);
console.log(addUp(897)); //, 402753);
console.log(addUp(23)); //, 276)
console.log(addUp(1000)); //, 500500)
console.log(addUp(738)); //, 272691)
console.log(addUp(100)); //, 5050)
console.log(addUp(925)); //, 428275)
console.log(addUp(1)); //, 1)
console.log(addUp(999)); //, 499500)
console.log(addUp(175)); //, 15400)
console.log(addUp(111)); //, 6216)


//Name Classes
class Name {
  constructor(fname, lname) {
    this.fname = fname.toLowerCase().charAt(0).toUpperCase() + fname.slice(1); //
    this.lname = lname.toLowerCase().charAt(0).toUpperCase() + fname.slice(1);
    this.fullname =
      fname.toLowerCase().charAt(0).toUpperCase() +
      fname.slice(1) +
      " " +
      lname;
    this.initials =
      fname.charAt(0).toUpperCase() + "." + lname.charAt(0).toUpperCase();
  }
}
a1 = new Name("john", "SMITH");
console.log(a1.fname); //, "John");
console.log(a1.lname); //, "Smith");
console.log(a1.fullname); //, "John Smith");
console.log(a1.initials); //, "J.S");
a2 = new Name("sARah", "fRolliE");
console.log(a2.fname); //, "Sarah");
console.log(a2.lname); //, "Frollie");
console.log(a2.fullname); //, "Sarah Frollie");
console.log(a2.initials); //, "S.F");


// No Conditionals? // control flow
function flip(y) {
  return y === 0 ? 1 : 0;
}
console.log(flip(0)); //, 1)
console.log(flip(1)); //, 0)


// Say "Hello" Say "Bye"
function sayHelloBye(name, num) {
  return num === 1
    ? "Hello" + " " + name.charAt(0).toUpperCase() + name.slice(1)
    : "Bye" + " " + name.charAt(0).toUpperCase() + name.slice(1);
}
console.log(sayHelloBye("jose", 1)); //, "Hello Jose")
console.log(sayHelloBye("barry", 1)); //, "Hello Barry")
console.log(sayHelloBye("jon", 0)); //, "Bye Jon")
console.log(sayHelloBye("khloy", 1)); //, "Hello Khloy")
console.log(sayHelloBye("sara", 0)); //, "Bye Sara")
console.log(sayHelloBye("Jon", 0)); //, "Bye Jon")
console.log(sayHelloBye("Matt", 1)); //, "Hello Matt")

//Chat Room Status //control flow
function chatroomStatus(users) {
  let length = users.length;
  return length === 1
    ? `${users[0]} online`
    : length === 2
    ? `${users[0]} and ${users[1]} online`
    : length > 2
    ? `${users[0]},${users[1]} and ${length - 2} more online`
    : `no one online`;
}
console.log(chatroomStatus([])); //, "no one online")
console.log(chatroomStatus(["becky325"])); //, "becky325 online")
console.log(chatroomStatus(["becky325", "malcolm888"])); //, "becky325 and malcolm888 online")
console.log(chatroomStatus(["becky325", "malcolm888", "fah32fa"])); //, "becky325, malcolm888 and 1 more online")
console.log(chatroomStatus(["paRIE_to"])); //, "paRIE_to online")
console.log(chatroomStatus(["s234f", "mailbox2"])); //, "s234f and mailbox2 online")
console.log(
  chatroomStatus([
    "pap_ier44",
    "townieBOY",
    "panda321",
    "motor_bike5",
    "sandwichmaker833",
    "violinist91",
  ])
); //, "pap_ier44, townieBOY and 4 more online")
*/
