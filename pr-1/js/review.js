const openButton = document.getElementById('openDialog');
const reviewDialog = document.getElementById('reviewDialog');
const sendBtnDialog = document.getElementById('sendBtnDialog');
const closeBtnDialog = document.getElementById('closeBtnDialog');

// Event listener to open the dialog
openButton.addEventListener('click', function() {
    reviewDialog.showModal();
});

// Event listener to close the dialog
sendBtnDialog.addEventListener('click', function() {
    reviewDialog.close();
    openButton.innerHTML = "<p>Ваш отзыв был отправлен</p>"
});

// Event listener to close the dialog
closeBtnDialog.addEventListener('click', function() {
    reviewDialog.close();
});
