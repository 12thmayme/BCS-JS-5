function tinhDiemChuan(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong) {
    // Tính điểm ưu tiên khu vực và đối tượng
    let diemUuTienKhuVuc = 0;
    let diemUuTienDoiTuong = 0;

    // Sử dụng if-else để tính điểm ưu tiên khu vực
    if (khuVuc === "A") {
        diemUuTienKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemUuTienKhuVuc = 1;
    } else if (khuVuc === "C") {
        diemUuTienKhuVuc = 0.5;
    } else {
        diemUuTienKhuVuc = 0;
    }

    // Sử dụng if-else để tính điểm ưu tiên đối tượng
    if (doiTuong === 1) {
        diemUuTienDoiTuong = 2.5;
    } else if (doiTuong === 2) {
        diemUuTienDoiTuong = 1.5;
    } else if (doiTuong === 3) {
        diemUuTienDoiTuong = 1;
    } else {
        diemUuTienDoiTuong = 0;
    }

    // Tính tổng điểm
    let diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;
    return diemTongKet;
}

function xetTrungTuyen(diemTongKet, diemChuan, diemMon1, diemMon2, diemMon3) {
    return diemTongKet >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0;


    // Nhập liệu từ người dùng
    let diemChuan = parseFloat(prompt("Nhập điểm chuẩn: "));
    let diemMon1 = parseFloat(prompt("Nhập điểm môn 1: "));
    let diemMon2 = parseFloat(prompt("Nhập điểm môn 2: "));
    let diemMon3 = parseFloat(prompt("Nhập điểm môn 3: "));
    let khuVuc = prompt("Nhập khu vực (A, B, C): ").toUpperCase();
    let doiTuong = parseInt(prompt("Nhập đối tượng (1, 2, 3): "));

    // Tính toán và hiển thị kết quả
    let diemTongKet = tinhDiemChuan(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);
    let trungTuyen = xetTrungTuyen(diemTongKet, diemChuan, diemMon1, diemMon2, diemMon3);

    if (trungTuyen) {
        console.log("Thí sinh trúng tuyển!");
    } else {
        console.log("Thí sinh rớt!");
    }

    console.log("Tổng số điểm đạt được:", diemTongKet);
}

document.querySelector("#btn").onclick =