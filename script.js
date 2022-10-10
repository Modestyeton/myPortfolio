const menuBar =document.getElementById ("menuBar")
const menu = document.getElementById ("menu")
const close = document.getElementById("close")

menu.onclick = function () {
    menuBar.style.display="block"
    menu.style.display="none"
    close.style.display="block"
}

close.onclick = function() {
    menuBar.style.display="none"
    menu.style.display="block"
    close.style.display="none"
}