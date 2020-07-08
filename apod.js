let requisicao = new XMLHttpRequest();
let form= document.querySelector('.valor');
let input = document.querySelector('#date');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    requisicao.open('GET', `https://api.nasa.gov/planetary/apod?api_key=PEAx6hcNBtrgYUhv53XPmuiyVd3XCDkOxkpFaerM&date=${input.value}`);
    requisicao.send();
});

function newDATE(value) {
    return value.date.split("-").reverse().join("-");
}
requisicao.open("GET", `https://api.nasa.gov/planetary/apod?api_key=PEAx6hcNBtrgYUhv53XPmuiyVd3XCDkOxkpFaerM`);
requisicao.onload = function () {

    let result = JSON.parse(requisicao.responseText);
    console.log(result);

    let titulo = document.getElementById("t1")

    let dateApod = document.getElementById("date")

    let imgApod = document.getElementById("img")

    let expApod = document.getElementById("exp")

    let copyApod = document.getElementById("copy")

    titulo.textContent = result.title;
    dateApod.textContent = newDATE(result);
    imgApod.src = result.url;
    expApod.textContent = `Explanation: ${result.explanation}`;
    copyApod.textContent = `Copyright: ${result.copyright}`;
}
requisicao.send();