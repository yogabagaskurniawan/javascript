
// for (var i = 10; i >= 1; i--) {
//    console.log(i);
// }

// function coba(n) {
//    if (n === 0) return;
//    console.log(n);
//    return coba(n-1);
// }
// coba(6);


// SISTEM FAKTORIAL ADALAH SEPERTI CONTOH INI 5! = 5 x 4 x 3 x 2 x 1

// function coba(n) {
//    var hasil = 1;
//    for (var i=n; i>0; i--){
//         hasil *=i;
//    }
//    return hasil;
// }
// console.log(coba(5));

function faktorial(n) {
    if(n===0) return 1;
    return n*faktorial(n-1);
}
console.log(faktorial(5));