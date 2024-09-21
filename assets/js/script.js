document.addEventListener('DOMContentLoaded', () => {
    const badge = document.querySelector('.title .badge');
    const popup = document.querySelector('.popup-container');
    const popupLogo = document.querySelector('.popup .contents .logo');
    const popupText = document.querySelector('.popup .contents .text');
    const popupDescription = document.querySelector('.popup .contents .description');
    const buttons = document.querySelectorAll('.popup .contents .button');
    const body = document.getElementsByTagName('body')[0];


    if (popup) {
        popup.style.display = 'flex';
        popupLogo.style.display = 'none';
        popupText.textContent = 'Xin Chào Các Bạn';
        popupDescription.textContent = 'Website Này Chúng Mình Thành Lập Để Các Bạn Biết Thêm Về Nữ Anh Hùng Dân Tộc Việt Nam';
        body.style.overflow = 'hidden';
    }

    buttons.forEach((element) => {
        buttons[0].textContent = 'Chúc Bạn Có Một Ngày Tốt Lành';
        buttons[0].onclick = () => {
            popup.style.display = 'none';
            body.style.overflow = 'auto';
        };
       
    });

});