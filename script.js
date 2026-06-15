// //************page opening function***************
let mainContainer = document.querySelector("main");
let header = document.querySelector("header");
//*************select all box in the form of node list***********
let box = document.querySelectorAll(".box");
//**************select all new tab in the form of node list************************
let newtab = document.querySelectorAll(".newTab");
// ****************for back button logic******************
let back = document.querySelector(".backbutton");

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

//*****************back button logic***************************
back.addEventListener("click", function () {
	mainContainer.style.display = "block";
	header.style.display = "flex";
	newtab.forEach(function (elem) {
		elem.style.display = "none";
	});
	back.style.display = "none";
});

//****************theme change code*****************
let html = document.querySelector("html");
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
