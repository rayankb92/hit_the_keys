let putText = document.getElementsByClassName("text");
let timer = document.querySelector(".timer h2");
let success = document.querySelector(".success");

function fill_text(story)
{
	for (let index = 0; index < story.length; index++) {
		let element = document.createElement("span");
		element.innerHTML = story[index];
		element.className = "black";
		putText[0].appendChild(element);
		putText[0].children[0].style.color = "white";
		putText[0].children[0].style.backgroundColor = "green";
	}
}

function majStyle(index, bgColor) {
	if (putText[0].children[index].className === "black") {
		putText[0].children[index].style.color = "black";
	} else if (putText[0].children[index].className === "green") {
		putText[0].children[index].style.color = "green";
	} else if (putText[0].children[index].className === "red") {
		putText[0].children[index].style.color = "red";
	}
	putText[0].children[index].style.backgroundColor = "white";
	putText[0].children[(index + 1)].style.color = "white";
	putText[0].children[(index + 1)].style.backgroundColor = bgColor;
}

function startTimer() {
	let minutes = 0;
	let seconds = 0;
	let centiseconds = 0;

	timer.innerHTML = "Temps écoulé : 00:00,00";

	timerId = setInterval(function() {
	centiseconds++;
	if (centiseconds === 100) {
		centiseconds = 0;
		seconds++;
	}
	if (seconds === 60) {
		seconds = 0;
		minutes++;
	}

	let formattedTime =
		(minutes < 10 ? "0" + minutes : minutes) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds) +
		"," +
		(centiseconds < 10 ? "0" + centiseconds : centiseconds);

	timer.innerHTML = "Temps écoulé : " + formattedTime;
	}, 10);
}

	

function launchGame(story) {
	let i = 0;
	let bgColor = "green";

	startTimer();

	document.addEventListener("keydown", function(event) {
		const ignoredKeys = ["Shift", "Control", "Alt", "CapsLock"];
		console.log("Key pressed: " + event.key + "text = " + story[i]);
		if (ignoredKeys.includes(event.key)) {
			return;
		}
		if (event.key === story[i]) {
			putText[0].children[i].className = "green";
			bgColor = "green";
			i++;
		} else if (i < story.length){
			putText[0].children[i].className = "red";
			bgColor = "red";
		}
		if (i >= 1 && i < story.length)
			majStyle(i - 1, bgColor);
		if (i == story.length)
		{
			clearInterval(timerId);
			success.children[0].innerHTML = "Bravo !";
			success.style.display = "flex";

		}
	})
}