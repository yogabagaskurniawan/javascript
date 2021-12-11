
var lanjut=true;

while (lanjut) {
    var makan = prompt(' Silakan pilih menu makanan atau minuman \n ( contoh : daging, mie instan, ikan, sop, soda');
        switch (makan) {
            case 'daging':
            case 'ikan':
            case 'sop':
                alert('sop adalah makanan sehat ');
                break;
            case 'mie instan':
            case 'soda':
                alert('Soda minuman tidak sehat');
                break;
            default:
                alert('yang anda masukan tidak terdaftar');
                break;
        }

    lanjut = confirm('mau lagi?');
}
alert('selesai');