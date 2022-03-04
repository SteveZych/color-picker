const colorForm = document.getElementById('form-color');
const colorsDiv = document.getElementById('colors');
const mode = document.getElementById('mode');
const colorPicked = document.getElementById('color-picked');

function getColors(hex, mode){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => console.log(data));
}

colorForm.addEventListener('submit', function(event){
    event.preventDefault();

    let hexValue = colorPicked.value.slice(1,7);
    let modeValue = mode.value;

    console.log(hexValue);

    getColors(hexValue, modeValue);
})

