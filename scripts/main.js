

function main(story) {
	let i = 0;
	let randNb = Math.floor(Math.random() * 3);
	document.addEventListener("keydown", function(event) {
		if (event.key === "Enter" && i == 0) {
			document.querySelector("h3").style.display = "none";
			launchGame(text[randNb]);
			i++;
		}
	});
	fill_text(text[randNb]);

}
	


main();