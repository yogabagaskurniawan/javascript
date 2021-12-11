
let lanjut = true;
while (lanjut) {
    
    //menentukan player
    let player = prompt('SILAHKAN PILIH NOMER DARI 1-6 UNTUK MENGADU');


    //menentukan nomer random dan computer
    let comp = Math.random();

    if (comp < 0.2) {
        comp = '1';
    }else if (comp >= 0.2 && comp < 0.4) {
        comp = '2';
    }else if (comp >= 0.4 && comp < 0.8) {
        comp = '3';
    }else if (comp >= 0.8 && comp < 0.16) {
        comp = '4';
    }else if (comp >= 0.16 && comp < 0.32) {
        comp = '5';
    }else {
        comp = '6';
    }

    //menentukan rules
    
    let hasil = '';
    if (player == comp) {
        hasil = 'IMBAMG';
    }else if (player == '1') {
        //if (comp == '2') {
        //    hasil = 'KALAH';
        //}else{
        //    hasil = 'MENANG';
        //}
        hasil = (comp == '2') ? 'KALAH' : 'MENANG';
    }else if (player == '2') {
        hasil = (comp == '3') ? 'KALAH' : 'MENANG';
    }else if (player == '3') {
        hasil = (comp == '4') ? 'KALAH' : 'MENANG';
    }else if (player == '4') {
        hasil = (comp == '5') ? 'KALAH' : 'MENANG';
    }else if (player == '5') {
        hasil = (comp == '6') ? 'KALAH' : 'MENANG';
    }else if (player == '6') {
        hasil = (comp == '1') ? 'MENANG' : 'KALAH';
    }else{
        hasil = 'YANG ANDA MASUKAN SALAH';
    }
    //hasill
    alert('HASILNYA ADALAH KAMU PILIH '+player+' \nKOMPUTER PILIH '+comp+' \nJADI KAMU '+hasil);
    lanjut = confirm('LAGI ??');
}
alert('SELESAI');