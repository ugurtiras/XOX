var oyuncu = document.getElementById("oyuncu");

// KONTROL FONKSİYONU 
function kontrol() {
    var kutu = [];
    for (var i = 0; i < 9; i++) {
        kutu[i] = document.getElementsByClassName("block")[i].textContent;
    }

    // satır kontrolleri
    if (kutu[0] == kutu[1] && kutu[0] == kutu[2]) {
        if (kutu[0] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[0] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }
    if (kutu[3] == kutu[4] && kutu[3] == kutu[5]) {
        if (kutu[3] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[3] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }
    if (kutu[6] == kutu[7] && kutu[6] == kutu[8]) {
        if (kutu[6] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[6] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }

    //sütun kontrolleri
    if (kutu[0] == kutu[3] && kutu[0] == kutu[6]) {
        if (kutu[0] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[0] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }
    if (kutu[1] == kutu[4] && kutu[1] == kutu[7]) {
        if (kutu[1] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[1] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }
    if (kutu[2] == kutu[5] && kutu[2] == kutu[8]) {
        if (kutu[2] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[2] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }

    //çapraz kontrol
    if (kutu[0] == kutu[4] && kutu[0] == kutu[8]) {
        if (kutu[0] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[0] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }
    if (kutu[2] == kutu[4] && kutu[2] == kutu[6]) {
        if (kutu[2] == 'X') oyuncu.textContent = 'OYUNCU 1 KAZANDI!!';
        if (kutu[2] == 'O') oyuncu.textContent = 'OYUNCU 2 KAZANDI!!';
    }
    //Beraberlik Durumu
    if (sayac == 9 && oyuncu.textContent !== 'OYUNCU 1 KAZANDI!!') {
        oyuncu.textContent = 'OYUN BERABERE';
    }
}


var blocks = document.getElementsByClassName('block');
var isPlayer1Turn = true;
var isPlayer2Turn = false;
var sayac = 0;
var tekrar = document.getElementById('button');

function oyuncu1() {
    for (let i = 0; i < 9; i++) {
        blocks[i].addEventListener('click', function () {
            if (isPlayer1Turn && this.textContent == '') {
                this.textContent = 'X';
                oyuncu.textContent = "Sıra Oyuncu 2'de";
                sayac += 1;
                kontrol();
                if (oyuncu.textContent == 'OYUNCU 1 KAZANDI!!' || oyuncu.textContent == 'OYUNCU 2 KAZANDI!!') {
                    isPlayer1Turn = false;
                    return;
                }
                isPlayer1Turn = false;
                isPlayer2Turn = true;
                oyuncu2();
            }
        })
    }
}

function oyuncu2() {
    for (let i = 0; i < 9; i++) {
        blocks[i].addEventListener('click', function () {
            if (isPlayer2Turn && this.textContent == '') {
                this.textContent = 'O';
                oyuncu.textContent = "Sıra Oyuncu 1'de";
                sayac += 1;
                kontrol();
                if (oyuncu.textContent == 'OYUNCU 1 KAZANDI!!' || oyuncu.textContent == 'OYUNCU 2 KAZANDI!!') {
                    isPlayer2Turn = false;
                    return;
                }
                isPlayer2Turn = false;
                isPlayer1Turn = true;
                oyuncu1();
            }
        })
    }
}

oyuncu1();

//TEKRAR BUTONU
tekrar.addEventListener('click', function () {
    for (i = 0; i < 9; i++) {
        blocks[i].textContent = '';
        sayac = 0;
        oyuncu.textContent="Sıra Oyuncu 1'de";
        isPlayer1Turn = true;
        oyuncu1();
    }
});