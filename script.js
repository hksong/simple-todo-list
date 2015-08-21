// window.onload = start;
// waits for window

document.addEventListener("DOMContentLoaded", start);
// only waits for DOM, slightly faster

// form submit listener for many inputs
// function start() {
// 	document.querySelector("form").addEventListener("submit", function(e) {
// 		e.preventDefault();
// 		var val = document.querySelector("input").value;
// 		var newLi = document.createElement("li");
// 		newLi.innerText = val;
// 		document.querySelector("ul").appendChild(newLi);
// 		document.querySelector("input").value = "";
// 	});
// }

// button submit listener for very few inputs
function start() {
	document.querySelector("button").addEventListener("click", function(e) {
		e.preventDefault();
		var input = document.querySelector("input");
		var val = input.value;
		input.value = "";
		var newLi = document.createElement("li");
		var newSpan = document.createElement("span");
		newSpan.innerText = "Delete";
		newLi.innerText = val;

		newLi.addEventListener("click", function() {
			var toggled = this.classList;
			if (this.classList.length === 0) {
				this.classList.add("completed");
			}
			else {
				this.classList.remove("completed");
			}
		});

		newSpan.addEventListener("click", function() {
			this.parentNode.id = "remove";
			document.querySelector("#remove").remove();
		});

		document.querySelector("ul").appendChild(newLi);
		newLi.appendChild(newSpan);
	});
}