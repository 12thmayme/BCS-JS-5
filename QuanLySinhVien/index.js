function tinhDiem() {
    const diemChuan = parseFloat(document.getElementById("diemChuan").value);
    const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
    const khuVuc = document.getElementById("khuVuc").value;
    const doiTuong = parseInt(document.getElementById("doiTuong").value);

    const diemKhuVuc = {
        A: 2,
        B: 1,
        C: 0.5,
        X: 0
    };

    const diemDoiTuong = {
        1: 2.5,
        2: 1.5,
        3: 1,
        0: 0
    };
    let diemUuTien = (diemKhuVuc[khuVuc] || 0) + (diemDoiTuong[doiTuong] || 0);
    let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
    let resultText;
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        resultText = ` Bạn đã rớt (Có môn điểm 0). Tổng điểm đạt được: ${tongDiem}`;
    } else if (tongDiem >= diemChuan) {
        resultText = ` Bạn đã đậu. Tổng điểm đạt được: ${tongDiem}`;
    } else {
        resultText = `Bạn đã rớt. Tổng điểm đạt được: ${tongDiem}`;
    }
    document.getElementById("result").innerHTML = resultText;
}