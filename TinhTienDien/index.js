function tinhTienDien() {
    //lay gia tri tu input
    var soKW = parseFloat(document.getElementById("soKW").value);

    // Tính tiền điện
    var tienDien = 0;
    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 150) {
        tienDien = 50  *
            500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650  +
            100 * 850 + (soKW - 150) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 50 * 1100 + (soKW - 200) * 1300;
    }
    document.getElementById("ketQua").innerHTML = " Tiền Diện Là " + tienDien + " đồng.";

}

document.querySelector("#btnClick").onclick = tinhTienDien;