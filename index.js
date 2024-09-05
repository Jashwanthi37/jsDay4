/*
*Task 1: for...in Loop with an Array
------------------------------------
Create an array of 5 colors: ['red', 'green', 'blue', 'yellow', 'orange'].
Using a for...in loop, print the index of each element in the array.

*/
var arr=['red', 'green', 'blue', 'yellow', 'orange'];
var result='';
for (var color in arr){
    result +=color+" ";
}
console.log(result);
/*
*Task 2: for...of Loop with an Array
--------------------------------------
Create an array of 5 animals: ['cat', 'dog', 'rabbit', 'elephant', 'lion'].
Using a for...of loop, print the name of each animal in the array.
*/
var arr=['cat', 'dog', 'rabbit', 'elephant', 'lion'];
var result='';
for(var animals of arr){
    result+=animals+" ";
}
console.log(result)
/*
*Task 3: Sum of Array Elements using a while Loop
-------------------------------------------------
Create an array of numbers [2, 4, 6, 8, 10].
Using a while loop, calculate and print the sum of the elements in the array.
*/
var arr=[2,4,6,8,10];
var sum=0;
var i=0;
while(i<5){
    sum=sum+arr[i];
    i++;
}
console.log(sum);
/*
*Task 4: Reverse Array using a do...while Loop
---------------------------------------------
Create an array of 5 numbers: [1, 2, 3, 4, 5].
Using a do...while loop, print the array elements in reverse order.
*/
var arr=[1,2,3,4,5];
var result='';
i=4;
do{
    result +=arr[i]+" ";
    i--;
}
while(i>=0);
console.log(result);
 /*
*Task 5: Sum of Even Numbers using do...while Loop
--------------------------------------------------
Given an array of numbers [3, 6, 9, 12, 15, 18], use a do...while loop to find the sum of even numbers.
*/
var arr=[3,6,9,12,15,18,10];
var sum=0;
i=0;
 do{
     if(arr[i]%2==0){
        sum=sum+arr[i];
   }
    i++;
}
while(i<=6);
console.log(sum);
/*
*Task 6: Reverse the Array using a while Loop
---------------------------------------------
Create an array ['a', 'b', 'c', 'd', 'e'] and reverse the elements using a while loop without using any built-in array reverse methods.
*/
var arr= ["'a'", "'b'","'c'", "'d'", "'e'"];
var result='';
var i=4;
while(i>=0){
    result +=arr[i]+", ";
    i--;
}
console.log("["+result+"]");