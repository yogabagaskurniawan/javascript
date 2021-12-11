
let tanya = true;
while (tanya) {
    
    //MENANGKAN PILIHAN PLAYER
    var p = prompt('Masukan pilihan \n seperti gajah, semut, orang.');

    //MENANGKAP PILIHAN COMPUTER
    //MEMBANGKITKAN BILANGAN RANDOM
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    }else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    }else{
        comp = 'orang';
    }

    var hasil = '';
    //MENENTUKAN RULES
    
    if (p == comp) {
        hasil = 'SERI !!';
    }else if (p == 'gajah') {
    // if (comp == semut) {
    //      hasil = 'KALAH !!'
    //   }else{
    //    hasil = 'MENANG !!';
    //  }
        hasil = (comp=='semut') ? 'KALAH !!': 'MENANG !!';
    }else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH !!' : 'MENANG !!';
    }else if (p == 'orang') {
        hasil = (comp == 'gajah' ) ? 'KALAH !!' : 'MENANG !!';
    }else{
        hasil = 'PILIHANMU TIDAK TERDAFTAR';
    }

    //TAMPILKAN RULES
    alert('Kamu memilih '+p+' Dan komputer memilih '+comp+'\nMaka hasilnya Kamu  '+hasil);

    tanya = confirm('Mau main lagi ??');
}
alert('SELESAI');