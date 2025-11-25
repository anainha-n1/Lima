const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const resultado = document.getElementById('result');

function Somar(){
    resultado.textContent = Number(numero1.value) + Number(numero2.value);
}

function subitrair(){
    resultado.textContent = Number(numero1.value) - Number(numero2.value);
}

function mult(){
    resultado.textContent = Number(numero1.value) * Number(numero2.value);
}

function dividir(){
    resultado.textContent = Number(numero1.value) / Number(numero2.value);
}

function limpar(){
    numero1.value = "",
     numero2.value = "",
     resultado.innerHTML=""
}

function Par(){
    if (Number(numero1.value) % Number(numero2.value) == 0) {
        resultado.textContent = "nmr par"
    } else {
        resultado.textContent ="nmt impar"
    }
}
if (idade1 < 10) {
    console.log('criança')
}else {
    if(idade1 >= 18 && idade1 <= 59) {
        console.log('adulto');
        }else {console.log('idoso')}
}
