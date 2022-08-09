// বেসিক কনসেপ্ট চেকলিস্ট/সেলফ এসেসমেন্ট: 

// একটা কাগজ কলম নিয়ে বসো। নিচের প্রশ্নগুলোর উত্তর যদি হাঁ হয় তাহলে ১ লিখবে আর যদি না হয় তাহলে শূন্য লিখবে। এবং জিনিসগুলো ভিজুয়াল ষ্টুডিও কোড এ প্রাকটিস করবে। কোন একটা জিনিস নিজে নিজে করতে পারলে অবশ্যই ভালো। আর কোন একটা জিনিস নিজে নিজে না পারলে, আমাদের ভিডিও না দেখে যদি গুগলে সার্চ দিয়ে বের করে হলেও যদি করে ফেলতে পারো তাহলেও চলবে। 


// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

// Solution:-
//Number:
var price = 11;
var age = 13;
var temperature = 38;

// String:
var person = "sodor uddin";
var location = "andor killa bandor ban";
var special = "alia bhatt";

// Boolean:
var serious = true;
var isFullMarks = true;
var isSingle = false;

// ........................................................................


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 

// ....................................................................


// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

// Solution:
// Addition(+):
var number1 = 33;
var number2 = 44;
var totalJogfal = number1 + number2;
console.log(totalJogfal);

// Subtruction(-):
var number1 = 55;
var number2 = 44;
var afterSubtraction = number1 - number2;
console.log(afterSubtraction);

// Multiplication(*):
var num1 = 50;
var num2 = 5;
var afterMultiplication = num1 * num2;
console.log(afterMultiplication);

// Division(/):
var num1 = 500;
var numb2 = 50;
var afterDivision = num1 / numb2;
console.log(afterDivision);


// Modulus Operator (%): ata dara vagses b ujhay
// ........................................................................

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

// Solution:- (Compare Between Two Variable):
// Less than (<):
var num1 = 22;
var num2 = 44;
if(num1 < numb2){
    console.log("a is less than b");
}

// Greater than (>):
var a = 555;
var b = 444;
if(a > b){
    console.log('a is greater than b')
}

// Equality Operator (==):
var a = 1000;
var b = 1000;
if(a == b){
    console.log("a is same as b");
}

// Inequality/ is not equal (!=):
var a = 666;
var b = 555;
if(a != b){
    console.log("a is not equal to b");
}

// Grater than equal (>=):
var a = 44;
var b = 33;
console.log(a >= b);

// Less than equal (<=):
var a  = 77;
var b = 88;
if(a <= b){
    console.log('a is less than equal to b');
}
// ....................................................................


// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

// Solution:
// When two condition will fulfill we can use (&&)
var a = 88;
var b = 55;
var c = 33;
if(a > b && c < a){
    console.log('Murgi polau khabo');
}

// Use of || in two condtion:
// || this is called or in a condition
var a = 200;
var b = 100;
var c = 500;
if(a <= b || a <=c){
    console.log('a is less than equal to c');
}

// .................................................................

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

// Solution:
var iphonePrice = 75000;
var myPrice = 50000;
if (iphonePrice < myPrice){
    console.log('I will buy a new phone');
}
else {
    console.log(' I will buy a oppo phone');
}

// .................................................................










