let ApiBoton = document.getElementById('ApiBoton');
let DatosApi = document.getElementById('DatosApi')
let llamadaApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        DatosApi.innerText = JSON.stringify(data);
    })
    
}
ApiBoton.addEventListener('click', llamadaApi)