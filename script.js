const API = 'https://dog.ceo/api/breeds/image/random';


function bringBreeds(funcion) {
fetch(`${API}`, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        funcion(data)
        console.log(data.message);
    })
}

function showBreeds(info) {
    let contenedor = document.getElementById("container")

    contenedor.innerHTML = `
    <div>
        <img src="${info.message}">
    </div>
    `
}


document.addEventListener("click", () => {
    bringBreeds(showBreeds);

})