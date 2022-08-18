function focusInput(element) {
    // x.style.background = "yellow";
    element.parentElement.classList.add("active");
}

function blurInput (element) {
    element.parentElement.classList.remove("active");
}