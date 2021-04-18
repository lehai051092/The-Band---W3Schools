let header = document.getElementById('header');
let mobileMenu = document.getElementById('mobile-menu');
let clientHeight = header.clientHeight;

// Đóng mở menu mobile
mobileMenu.onclick = function () {
    let isClosed = header.clientHeight === clientHeight;

    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi click menu != #
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];

    menuItem.onclick = function () {
        header.style.height = null;
    }
}