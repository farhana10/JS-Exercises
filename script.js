/* JavaScript code here */
//task1
console.log("External JS")
//task2

function sumArray(arr){
    var sum=0;
    arr.forEach(function(value,index){
        sum+=value;
    })
    return sum;
}
console.log(sumArray([1,2,3,4,5]));