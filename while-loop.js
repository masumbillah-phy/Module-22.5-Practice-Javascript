// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// Solution:
// 7----19 odd number using while loop.
var i = 7;
while (i <= 19){
    console.log(i);
    i = i+2;
}

// 7--19 odd number using for loop.
let x = 7;
for(let x = 7; x <= 19; x +=2){
    console.log(x);
}

