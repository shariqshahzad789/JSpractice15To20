
// var a = ["a","b","c","d"]
// for (var i=0;i<4;i++){
// console.log (a[i])
// }


// var a = ["a","b","c","d","e"];

// var b = "c";
// for ( var i = 0; i < a.length; i++){
//    console.log(a[i]);
//     if(b == a[i]){  
//         alert("warning")
//     }
// }


//  

// var a = ["a", "b", "c", "d", "e"];
//  var b = "d"  

// var wordfound = false;
// for (var i = 0; i < a.length; i++) {
//     if (b == a[i]) {
//         wordfound = true;
//         break;
//     }
// }

// if (wordfound == true) {
//     alert("Word Found");
// } else {
//     alert("Word Not Found");
// }


var a = ["a","b","c","d","e","f","g",];
var b = [1,2,3,4,5,6,7,8,9];

for( var i = 0; i < a.length; i++){
    for (var j=0; j<b.length ; j++){
        console.log(a[i],b[j])
    } 
}