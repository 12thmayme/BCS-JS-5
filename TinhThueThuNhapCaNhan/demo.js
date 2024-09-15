function tinhThue() {
    const hoTen = document.getElementById("hoTen").value;
    const tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);

    const soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

    // Miễn giảm cá nhân cố định là 11 triệu và phụ thuộc là 4.4 triệu/người
    const giamTruCaNhan = 11;
    const giamTruPhuThuoc = 4.4;

    // Tính thu nhập chịu thuế
    const thuNhapChiuThue = tongThuNhap - giamTruCaNhan - (soNguoiPhuThuoc * giamTruPhuThuoc);

    // Nếu thu nhập chịu thuế nhỏ hơn hoặc bằng 0 thì không phải nộp thuế
    if (thuNhapChiuThue <= 0) {
        alert("Thu nhập không đủ để chịu thuế.");
        return;
    }

    // Xác định thuế suất dựa trên thu nhập chịu thuế
    let thueSuat;
    if (thuNhapChiuThue <= 60) {
        thueSuat = 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thueSuat = 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thueSuat = 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thueSuat = 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thueSuat = 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thueSuat = 0.3;
    } else {
        thueSuat = 0.35;
    }

    // Tính số tiền thuế phải nộp
    const soTienThue = thuNhapChiuThue * thueSuat;

    // Hiển thị kết quả
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Kết quả tính thuế</h2>
        <p>Họ tên: ${hoTen}</p>
        <p>Tổng thu nhập: ${tongThuNhap.toFixed(2)} triệu đồng</p>
        <p>Số người phụ thuộc: ${soNguoiPhuThuoc}</p>
        <p>Thu nhập chịu thuế: ${thuNhapChiuThue.toFixed(2)} triệu đồng</p>
        <p>Thuế suất: ${thueSuat * 100}%</p>
        <p>Số tiền thuế phải nộp: ${soTienThue.toFixed(2)} triệu đồng</p>
    `;
}