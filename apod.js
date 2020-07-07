window.addEventListener("load", loadRequisicao)


/*btninfo.addEventListener("click", function(){
console.log("informações"); TESTE DE RECEBER API */
// var titulo = document.createElement('H1')
// titulo.innerText = result.title;
// document.body.appendChild(titulo);  

let titulo = document.getElementById("t1")

let dateApod = document.getElementById("date")

let imgApod = document.getElementById("img")

let expApod = document.getElementById("exp")

let copyApod = document.getElementById("copy")



function loadRequisicao() {
    let requisicao = new XMLHttpRequest();
    requisicao.open("GET", "https://api.nasa.gov/planetary/apod?api_key=PEAx6hcNBtrgYUhv53XPmuiyVd3XCDkOxkpFaerM");
    requisicao.onload = function () {
        if (requisicao.status == 200)
            typeof (requisicao.responseText);
        const result = JSON.parse(requisicao.responseText);
        console.log(result);

        titulo.textContent = result.title;
        dateApod.textContent = result.date;
        imgApod.src = result.url;
        expApod.textContent = `Explanation: ${result.explanation}`;
        copyApod.textContent = `Copyright: ${result.copyright}`;


    
        
        

    }
    requisicao.send() }
