

var lanjut = true;
while (lanjut) {
    //menentukan nilai random + nilai comp
    var comp = Math.ceil(Math.random()*10);
    var hasil = '';
    //menentukan nilai player
    for (var kesempatan = 3; kesempatan > 0; kesempatan--){
        var player = prompt('TEBAKLAH ANGKA MULAI DARI ANGKA \n        1 - 10      \nADA '+kesempatan+' UNTUK MENJAWAB');
        var sisakesempatan = kesempatan - 1;

        //rules + hasil
        if (player == comp) {
            hasil = alert('TEBAKANMU BENAR');
            break;
        }else if (player > comp) {
            if (sisakesempatan == 0) {
                hasil = alert('KESEMPATAN ANDA TELAH SELESAI \nJAWABAN YANG BENAR ADALAH '+comp);
                break;
            }else{
                hasil = alert('NOMOR YANG ANDA MASUKAN TERLALU TINGGI..\nKESEMPATAN ANDA SISA '+ sisakesempatan+' LAGI');
            }
        }else if (player < comp) {
            if (sisakesempatan == 0) {
                hasil = alert('KESEMPATAN ANDA TELAH SELESAI \nJAWABAN YANG BENAR ADALAH '+comp);
                break;
            }else{
                hasil = alert('NOMOR YANG ANDA MASUKAN TERLALU RENDAH..\nKESEMPATAN ANDA SISA '+ sisakesempatan+'  LAGI');
            }
        }else{
            hasil = alert('YANG ANDA MASUKAN TIDAK TERDAFTAR')
        }

    }
    lanjut = confirm('lagi??');
}
alert('SELESAI');