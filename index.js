function changeColor(id) {
    var a = document.getElementsByClassName("selected")
    Array.from(a).forEach((el) => {
        el.classList.remove("selected")
    });
    const el = document.getElementById(id)
    const color = el.style.backgroundColor
    el.classList.add("selected")
    console.log(color)
}