const colorForm = document.getElementById('form-color');
const colorsDiv = document.getElementById('colorsDiv');
const mode = document.getElementById('mode');
const colorPicked = document.getElementById('color-picked');

let hexValue = colorPicked.value.slice(1,7);
let modeValue = mode.value;
let colorList = [];
let colorListHtml = "";

function getColors(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeValue}&count=5`)
        .then(res => res.json())
        .then(data => {
            for (const color of data.colors){
                colorList.push(color.hex.value);
            }
            displayColors();
        });
}

function displayColors(){
    for (let color of colorList){
        colorListHtml += `
        <div class="color">
            <div class="backgroundColor" style="background-color: ${color}"></div>
            <div>${color}</div>
        </div>
        `;
    }
    colorsDiv.innerHTML = colorListHtml;
}

function reset(){
    colorList = [];
    colorListHtml = "";
    colorsDiv.innerHTML = "";
}

colorForm.addEventListener('submit', function(event){
    event.preventDefault();

    hexValue = colorPicked.value.slice(1,7);
    modeValue = mode.value;

    reset();
    getColors();
    
})

getColors();




