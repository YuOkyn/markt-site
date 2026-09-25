let aba = document.getElementById("aba")
function openaba(){
    aba.style.transform = "translateX(-235%)"
}
function closeaba(){
    aba.style.transform = "translateX(-400%)"
}
let tvalue = document.getElementById("tvalue")

tvalue.innerText = (1546).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})