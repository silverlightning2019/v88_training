function focusInput (element) {
    element.parentElement.classList.add("active");
}

function blurInput (element) {
    element.parentElement.classList.remove("active");
}