//************page opening function***************
let mainContainer = document.querySelector("main");
let header = document.querySelector("header");
function pageOpening(boxName, pageName) {
	boxName.addEventListener("click", function () {
		console.log("hello");
		pageName.style.display = "block";
		mainContainer.style.display = "none";
		header.style.display = "none";
	});
}

//*************** to do list page opening *************
let todolist = document.querySelector("#todolist");
let Todolist = document.querySelector(".todolist");
pageOpening(todolist, Todolist);
//*************** daily planner page opening *************

let dailyPlanner = document.querySelector("#DailyPlanner");
let DailyPlanner = document.querySelector(".DailyPlanner");
pageOpening(dailyPlanner, DailyPlanner);
//*************** motivation page opening *************

let motivation = document.querySelector("#Motivation");
let Motivation = document.querySelector(".Motivation");
pageOpening(motivation, Motivation);
//*************** pomodoro timer  page opening *************

let pomodorotimer = document.querySelector("#Pomodorotimer");
let Pomodorotimer = document.querySelector(".Pomodorotimer");
pageOpening(pomodorotimer, Pomodorotimer);
//*************** daily goals page opening *************

let dailygoals = document.querySelector("#dailygoals");
let Dailygoals = document.querySelector(".dailygoals");
pageOpening(dailygoals, Dailygoals);

//****************theme change code*****************
let html = document.querySelector("html");
let themeButton = document.querySelector("#theme-button");
let currenttheme = "gray";
themeButton.addEventListener("click", function () {
	if (currenttheme === "gray") {
		html.style.setProperty("--bgcurrentcolor", "var(--bglight)");
		html.style.setProperty("--navcurrentcolor", "var(--navlight)");
        html.style.setProperty("--textcurrentcolor","var(--textdark)");
		currenttheme = "light";
	} else if (currenttheme == "light") {
		html.style.setProperty("--bgcurrentcolor", "var(--bgbrown)");
		html.style.setProperty("--navcurrentcolor", "var(--navbrown)");
        html.style.setProperty("--textcurrentcolor","var(--textlight)");
		currenttheme = "brown";
	} else if (currenttheme == "brown") {
		html.style.setProperty("--bgcurrentcolor", "var(--bggray)");
		html.style.setProperty("--navcurrentcolor", "var(--navgray)");
		currenttheme = "gray";
	}
});
