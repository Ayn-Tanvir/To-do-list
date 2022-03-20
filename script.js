var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {return input.value.length}


function CreatingElement() {
	function DoneCommand() {li.classList.toggle('done')};
	function RemoveElement() {li.remove()};
	var li = document.createElement("li");
	
	
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	li.addEventListener("click" , DoneCommand);
	
	input.value = "";	
	
	var DeleteButton = document.createElement("button");
	DeleteButton.appendChild(document.createTextNode("delete"));
	li.appendChild(DeleteButton);
	DeleteButton.addEventListener("click", RemoveElement);
}

function forClick() {
	if (inputLenght() > 0) {
		CreatingElement()
	}	
}

function forKeyPress(event) {
	if (inputLenght() > 0 && event.keyCode === 13) {
		CreatingElement()
	}
}

button.addEventListener("click", forClick)
input.addEventListener("keypress", forKeyPress)