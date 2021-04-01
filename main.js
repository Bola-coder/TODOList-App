const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
	constructor(itemName){
		//creating the item div
		this.createDiv(itemName);
	}
	createDiv(itemName){
		let itemBox = document.createElement('div');
		itemBox.classList.add('item');

		let input = document.createElement('input');
		input.value = itemName;
		input.disabled = true;
		input.type = "text";
		input.classList.add('item-input');

		let editButton = document.createElement('button');
		editButton.innerText = "EDIT";
		editButton.classList.add('editButton');

		let removeButton = document.createElement('button');
		removeButton.innerText = "REMOVE";
		removeButton.classList.add('removeButton');

		container.appendChild(itemBox);
		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		editButton.addEventListener('click', ()=> this.edit(input));
		removeButton.addEventListener('click', ()=> this.remove(itemBox));
	}

	edit(input){
		input.disabled = !input.disabled;
	}
	remove(itemBox){
		container.removeChild(itemBox);
	}

}

function checkInput(){
if (input.value != ""){
	new item(input.value);
	input.value = "";
}
}
addButton.addEventListener('click', checkInput);