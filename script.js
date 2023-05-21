let sliderElement = document.querySelector("#slider");
let button = document.querySelector("#button");
let valor = document.querySelector("#valor");
let passowrd = document.querySelector('#password');
let hide = document.querySelector('.hide');
let contPassw = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ023456789*@-!";
let novaSenha = "";

valor.innerHTML = sliderElement.value;
slider.oninput = function (){
    valor.innerHTML = this.value;
}

//pega o click do button
button.addEventListener('click', ()=>{
    let pass = "";
    for(let i = 0, n = charset.length; i<slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()* n))
    }
    contPassw.classList.remove("hide")
    //console.log(pass)
    passowrd.innerHTML = pass;
    novaSenha = pass;
})
function copyPass(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}