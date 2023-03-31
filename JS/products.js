function popupFunc(e) {
    let idPop = this.dataset.forPopupTarget;
    let modal = document.getElementById(idPop);
    let closeBtn = modal.querySelector('.popup-close');

    modal.classList.add('show');
    closeBtn.onclick = function () {
        modal.classList.remove('show');
    };
}


[...document.querySelectorAll('.btn')]
    .forEach(btn => btn.addEventListener('click', popupFunc));