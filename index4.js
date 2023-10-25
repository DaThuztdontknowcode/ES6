// Khởi tạo mảng để lưu trữ danh sách động vật
const animalList = [];

// Hàm thêm động vật mới vào danh sách
function addAnimal(animalName) {
    animalList.push(animalName);
}

// Hàm kiểm tra xem một loài động vật đã có trong danh sách chưa
function isAnimalInList(animalName) {
    return animalList.includes(animalName);
}

// Hàm xóa một động vật khỏi danh sách
function removeAnimal(animalName) {
    const index = animalList.indexOf(animalName);
    if (index !== -1) {
        animalList.splice(index, 1);
    }
}

// Hàm in ra danh sách động vật hiện đang có trong sở thú
function printAnimalList() {
    console.log("Danh sách động vật trong sở thú:");
    animalList.forEach(animal => {
        console.log(animal);
    });
}

// Thêm và quản lý danh sách động vật
addAnimal("Elephant");
addAnimal("Lion");
addAnimal("Tiger");

if (isAnimalInList("Lion")) {
    console.log("Lion is in the zoo.");
}

removeAnimal("Tiger");
printAnimalList();
