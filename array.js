
// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

// Solution:-
var friendsAge = [22, 23, 21, 33, 32, 42, 55];
// Array er moddhe upadan ber korte hole
var arrayLength = friendsAge.length;
console.log(arrayLength);

// get element by index
console.log(friendsAge[0]);
console.log(friendsAge[6]);

// set element of an array
friendsAge[0] = 11;
console.log(friendsAge);
friendsAge[4] = 50;
// console.log(friendsAge);

// position or index of an element
var positionIndex = friendsAge.indexOf(32);
// console.log(positionIndex);

// Push and Pop method:
var friends = ['rahim', 'karim', 'jabbar', 'sagor'];
friends.push('Aslam');
console.log(friends);

// pop method:
var myFriends = ['prodip', 'bibek', 'anirban', 'ovi'];
myFriends.pop();
console.log(myFriends);
