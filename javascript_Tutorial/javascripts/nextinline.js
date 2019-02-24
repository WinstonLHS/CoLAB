function nextInLine(arr,item){
    //some code
    arr.push(item);
    return item;
}

var testArr = [1,2,3,4,5];
console.log("before: "+ JSON.stringify(testArr));
console.log("before: "+ testArr);
console.log("JSON is an "+ typeof JSON);
console.log(nextInLine(testArr,6));
console.log("after: "+ JSON.stringify(testArr));