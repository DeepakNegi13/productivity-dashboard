// //************page opening function***************
let mainContainer = document.querySelector("main");
let header = document.querySelector("header");
//*************select all box in the form of node list***********
let box = document.querySelectorAll(".box");
//**************select all new tab in the form of node list************************
let newtab = document.querySelectorAll(".newTab");
// ****************for page opening logic******************
function pageOpening() {
	//**********************select single cards**************8 */
	box.forEach(function (elem) {
		//*****************edd event listener on all single cards********************* */
		elem.addEventListener("click", function () {
			//*****************open new tab with the use of index of node list of new tab and the index is same corresponding to id of the corresponding cards*****************
			newtab[elem.id].style.display = "block";
			header.style.display = "none";
			mainContainer.style.display = "none";
			back.style.display = "block";
		});
	});
}
pageOpening();

//*****************back button logic***************************
function backButton() {
	let back = document.querySelector(".backbutton");
	back.addEventListener("click", function () {
		mainContainer.style.display = "block";
		header.style.display = "flex";
		newtab.forEach(function (elem) {
			elem.style.display = "none";
		});
		back.style.display = "none";
	});
}
backButton();


//****************theme change code*****************
let html = document.querySelector("html");
function changeTheme() {
	let themeButton = document.querySelector("#theme-button");
	let currenttheme = "gray";
	themeButton.addEventListener("click", function () {
		if (currenttheme === "gray") {
			html.style.setProperty("--bgcurrentcolor", "var(--bglight)");
			html.style.setProperty("--navcurrentcolor", "var(--navlight)");
			html.style.setProperty("--textcurrentcolor", "var(--textdark)");
			currenttheme = "light";
		} else if (currenttheme == "light") {
			html.style.setProperty("--bgcurrentcolor", "var(--bgbrown)");
			html.style.setProperty("--navcurrentcolor", "var(--navbrown)");
			html.style.setProperty("--textcurrentcolor", "var(--textlight)");
			currenttheme = "brown";
		} else if (currenttheme == "brown") {
			html.style.setProperty("--bgcurrentcolor", "var(--bggray)");
			html.style.setProperty("--navcurrentcolor", "var(--navgray)");
			currenttheme = "gray";
		}
	});
}
changeTheme();

//fetch weather
async function fetchWeather(city){
	try{
		let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d62301a739ffdafb13590a0f3c063ab3`);
		if(!rawData.ok){
			throw new error(`city name is incorrect `);
			
		}
	let data = await rawData.json();
	let temp = document.querySelector('#temperature')
	temp.innerHTML = `<p>The current temperature is ${Math.floor(data.main.temp-273.15)}&deg;C</p>`;
	}catch(err){
		console.error(err);
	}
}
fetchWeather("bhopal")

//fetch time
async function time() {
	const url = 'https://api.api-ninjas.com/v1/timezone?timezone=Europe%2FLondon';
	const options = {
    	method: 'GET',
    	headers: {
        	'X-Api-Key': '0e6vMFovHLEARyaJiVL3OWuoHDBMBI7sZnnMAzJ3'
    	}
	};
	let rawData = await fetch(url,options);
	let data = await rawData.json();
	let time = new Date(data.local_time);
	setInterval(function(){
		
		console.log(time);
		time += 1;

	},1000);

	let dateTime =  document.querySelector('#dateTime');
	dateTime.innerHTML=time;	
}
time()

//toDoForm
let form = document.querySelector(".toDoForm");
let totalTask = [];
form.addEventListener("submit",function(e){
	let input = document.querySelector('input');
	e.preventDefault();
	totalTask.push(input.value);
	console.log(totalTask )
	let sum = '';
	totalTask.forEach(function(elem){
		sum += `<div class="singleTask">
			${elem}
		</div>
		`
	})
	let taskList = document.querySelector('.taskList')
	taskList.innerHTML = sum;
})



