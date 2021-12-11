
function tambah () {
    
    var hasil = 1;
    for (let i = 0; i < arguments.length; i++) {
        hasil *= arguments[i];
        
    }
    return hasil;
}
var coba1 = tambah(2,2,2);
var coba2 = tambah(3,3,3);
var total = coba1 + coba2;
console.log(total);