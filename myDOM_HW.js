let title = document.createElement('title');
  title.innerHTML = "<strong>DOMASHKA</strong>";
  document.head.append(title);

// HW 1---------------------------------------------------------

let countryList = [
{
 country: "Ukraine",
 capital:"Kyiv",
 count: 40000000
},

{
 country: "Georgia",
 capital:"Tbilisi",
 count: 10000000
},

{
 country: "Great Britain",
 capital:"London",
 count: 100000000
},

{
 country: "USA",
 capital:"Washington",
 count: 300000000
}];


let map = document.getElementById("map");
let loc = document.getElementById("loc");


loc.onclick = function() {
let cl = document.createElement('ol');
for(let i = 0; i < countryList.length; i++) {
	let countries = document.createElement('li');
	let countMln = countryList[i].count / 1000000;
	let list = `country: ${countryList[i].country}, capital: ${countryList[i].capital}, count: ${countMln} mln`;
if(countryList[i].country === 'Ukraine') {
	countries.classList.add("ukraine");
};

countries.append(list)
cl.append(countries);
document.body.append(cl)
setTimeout(() => cl.remove(), 10000);
};
}

// HW 2 --------------------------------------------------------------

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if(event.target == modal) {
	modal.style.display = "none";
	}
}

// HW 3______________________________________________________________

function showPalette() {
	let show = document.getElementById("show");
	let palette = document.getElementById("palette");
	palette.style.display = "block";
}

function hidePalette() {
	let show = document.getElementById("hide");
	let palette = document.getElementById("palette");
	palette.style.display = "none";
}

let color;
let car;

function getCar (element) {
	car = element;
}

function getColor(element) {
	color = element.style.background;
	car.style.background = color
	
}
// function getRed() {
// 	let color = document.getElementById("red");
	// transit = this.className;
// 	// return transit;
// console.log(color);
	// audi.className = red.className;

// }
// }
// let car = document.getElementsByClassName("car");


// color.onclick = function() {
// 	transit = this.id;
// }
// console.log(transit);

// function chooseItem(elem) {
//     currentItem = elem;
    

// }
// function getColor(elem) {
//     currentColor = elem.style.background;
//     currentItem.style.background = currentColor