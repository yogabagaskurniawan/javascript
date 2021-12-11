// tanda || artinya atau
// tanda && artinya dan 

for (var a = 1; a <= 10; a++) {
    if (a <= 6 && a !== 5) {
        console.log('Angkot No. '+a+' beroperasi dengan baik');    
    }else if (a === 8 || a === 10 || a === 5){
        console.log('Angkot No. '+a+' Sedang lembur');
    }else{
        console.log('angkot No. '+a+' sedang tidak beroperasi');
    }
    
}