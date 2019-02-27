function compare(a,b){
    
    if (a===b) console.log(a + " and " + b + " are strictly equal");
    else if (a==b) console.log(a + " and " + b + " are equal");
    else console.log(a + " and " + b + " are not equal");
}


function compar2(a,b){
    
    if (a!=b) console.log(typeof a + " " + a + " and " + typeof b + " " +  b + " are not equal");
    else console.log(typeof a + " " + a + " and " + typeof b + " " + b + " are not NOT equal");
    if (a!==b) console.log(typeof a + " " + a + " and " + typeof b + " " +  b + " are strictly not equal");
}

function compar3(num){
    if (num < 5) return "Tiny";
    else if (num < 10) return "Small";
    else if (num < 15) return "Medium";
    else if (num < 20) return "Large";
    else if (num >= 20) return "Huge";
}

console.log(compar3(40));