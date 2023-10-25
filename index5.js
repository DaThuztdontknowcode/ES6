// Lớp ThongTin
class ThongTin {
    constructor(ten, moTa) {
        this.ten = ten;
        this.moTa = moTa;
    }

    tinhToan(giaTri = 1) {
        return giaTri * 3;
    }
}

// Lớp HinhHoc kế thừa từ Lớp ThongTin
class HinhHoc extends ThongTin {
    constructor(ten, moTa, chieuDai) {
        super(ten, moTa);
        this.chieuDai = chieuDai;
    }

    tinhToan(giaTri) {
        // Gọi hàm tinhToan từ lớp cha và nhân với chieuDai
        return super.tinhToan(giaTri) * this.chieuDai;
    }
}

// Tạo đối tượng của lớp ThongTin
const thongTinObj = new ThongTin("Thông tin", "Mô tả về thông tin");
console.log(thongTinObj.ten); // In ra "Thông tin"
console.log(thongTinObj.moTa); // In ra "Mô tả về thông tin"
console.log(thongTinObj.tinhToan(2)); // In ra 6

// Tạo đối tượng của lớp HinhHoc
const hinhHocObj = new HinhHoc("Hình học", "Mô tả về hình học", 5);
console.log(hinhHocObj.ten); // In ra "Hình học"
console.log(hinhHocObj.moTa); // In ra "Mô tả về hình học"
console.log(hinhHocObj.chieuDai); // In ra 5
console.log(hinhHocObj.tinhToan(3)); // In ra 45
