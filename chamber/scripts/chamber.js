
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const visit = document.querySelector(".visit");

let numVisits = Number(window.localStorage.getItem("visitls"));
let lastVisit = Number(window.localStorage.getItem("lastVisit"));

const timeBetween = Math.round((Date.now() - lastVisit) / (1000 * 60 *60 * 24));

if (numVisits !==0)
	if (timeBetween <  1) {
		visit.textContent = "Back so soon! Awesome!"
	}
	else {
		if (timeBetween = 1) {
			visit.textContent = "You last visited " + timeBetween + " day ago."
		}
		else {
			visit.textContent = "You last visited " + timeBetween + " days ago."
		}		
	}
else {
	visit.textContent = "Welcome! Let us know if you have any questions."
}
numVisits++;
localStorage.setItem("lastVisit", Date.now());
localStorage.setItem("visitls", numVisits);
