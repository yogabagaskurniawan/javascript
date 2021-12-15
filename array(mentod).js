
// menampilkan isi array tetang 'length'
// var array = ['yoga', 'bagas', 'kurniawan',];
// for(var i=0; i<array.length; i++){
//     console.log(array[i]);
// }
   
//menggunakan array mentod 'JOIN' untuk menggabungkan tipe data integer dan string
//JOIN untuk menampilkan untuk fungsi DIATASNYA <=
// var array = ['yoga', 'bagas', 'kurniawan',];
// console.log(array.join('-'));

//menggunakan array mentod 'PUSH, POP'
// var array = ['yoga', 'bagas', 'kurniawan'];
// //array.push('adi','seno');
// array.pop();
// array.pop();
// console.log(array.join());

//menggunakan array mentod 'UNSHIFT DAN SHIFT'
// var array = ['kurniawan','bagas','yoga']
// //array.unshift('seno','yano');
// array.shift();
// array.shift();
// console.log(array.join());

// var array=['yono','bagas','tio'];
// array.unshift('awal','say');
// array.shift();
// console.log(array.join('-'));

//MENGGUNAKAN ARRAY MENTOD SPLICE (MENGGABUNGKAN) (mau menambah di tengah dan klu ada yang mau dihapus)
// var array=['yono','bagas','tio'];
// //rumus splice(index awal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// //array.splice('1', '0', 'aku' );
// //array.splice('0', '3','nini');
// array.splice('2','1','werog','ayam');
// console.log(array.join(' - '));

//MENGGUNAKAN MENTOD SLICE(MENGIRIS)
//SLICE (AWAL,AKHIR+1)
// var array=['yono','bagas','tio','ayam','semut'];
// //var array2 = array.slice('2','4');
// var array2=array.slice('0','3');
// console.log(array2.join(' - '));

//MENGGUNAKAN MENTOD FOREACH(untuk melooping tanpa return)
// var angka = [1,4,6,4,3,5,6,4,3,8,9];
// var nama = ['yono','bagas','tio'];
// // for (var i=0; i<angka.length; i++){
// //     console.log(i);
// // }
// nama.forEach(function (a,b) {
//     console.log('mahasiswa ke- '+(b+1)+' adalah = '+a);
// })

//MENGGUNAKAN MENTOD MAP (untuk melooping menggunakan return)
// var angka = [1,4,6,4,3,5,6,4,3,8,9];
// var angka2 = angka.map(function(e) {
//     return e*2;
// })
// console.log(angka2.join(' - '));

//MENGGUNAKAN MENTOD SORT (untuk mengurutkan nomer)
// var angka = [157,4,6321,4,3,500,6,4,323,8,9];
// angka.sort(function (a,b) {
//     return a-b;
// })
// console.log(angka.join(' - '));

//MENGGUNAKAN MENTOD filter (untuk mencari banyak nilai)
var angka = [157,87,6321,10,3,500,6,4,323,8,9];
angka.sort(function (a,b) {
    return a-b;
})
console.log(angka.join(' - '));

var angka2 = angka.filter(function (e) {
    return e < 87;
})
console.log(angka2.join(' - '));

//MENGGUNAKAN MENTOD find (untuk mencari satu nilai)
var angka3 = angka.find(function(e) {
    return e > 4;
})
console.log(angka3);