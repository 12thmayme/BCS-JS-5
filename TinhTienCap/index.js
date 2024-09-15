function tinhTienCap() {

    const maKhachHang = document.getElementById("maKhachHang").value;
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value); 


    let phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap, tongTien;

    if (loaiKhachHang === "nhaDan") {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        phiThueKenhCaoCap = soKenhCaoCap * 7.5;
    } else {
        phiXuLyHoaDon = 15;
        phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        phiThueKenhCaoCap = soKenhCaoCap * 50;
    }

    tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

    document.getElementById("ketQua").innerHTML = `
      <h2>Kết quả tính tiền cáp</h2>
      <p>Mã khách hàng: ${maKhachHang}</p>
      <p>Tổng tiền: ${tongTien.toFixed(2)} $</p>
    `;
}