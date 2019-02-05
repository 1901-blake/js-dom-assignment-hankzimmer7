/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------*/

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

const getUSA = () => {
	let usaSpan;
	const spanElements = document.getElementsByTagName('span');
	// Check each span element to see if it contains USA
	for (const element of spanElements) {
		if (element.innerText === "USA") {
			usaSpan = element;
		}
	}
	console.log('Contents of USA span:', usaSpan.innerText);
}
getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

const getPeopleInSales = () => {
	let salesPeopleNames = [];
	const trElements = document.getElementsByTagName('tr');
	// Check over each Table Row element
	for (const trElement of trElements) {
		let isSalesEmployee = false;
		let employeeName;
		const children = trElement.children;
		// Check the children of each table row element
		for (const child of children) {
			// Check if they are in sales
			if (child.innerText === 'Sales') {
				isSalesEmployee = true;
			}
			// Grab the employee name
			if (child.classList.contains('empName')) {
				employeeName = child.innerText;
			}
		}
		// If they are in sales, add the employee name to the array of sales employees
		if (isSalesEmployee) {
			salesPeopleNames.push(employeeName);
		}
	}
	console.log('People in Sales:', salesPeopleNames);
}
getPeopleInSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

const getAnchorChildren = () => {
	let anchorChildrenText = [];
	const anchorElements = document.getElementsByTagName('a');
	// Check through anchor elements
	for (const element of anchorElements) {
		children = element.children;
		// Check through the children of an anchor element
		for (const child of children) {
			if (child.tagName === 'SPAN') {
				anchorChildrenText.push(child.innerText);
			}
		}
	}
	console.log('Anchor elements with a <span> child:', anchorChildrenText);
}
getAnchorChildren();

// 4. Hobbies;
// Define function getHobbies()
// Find all checked options in the 'hobbies' select element.
// Print the value and the contents.

const getHobbies = () => {
	const hobbySelector = document.getElementsByName('hobbies')[0];
	console.log('Hobby Selected:', hobbySelector.value);
	hobbySelector.addEventListener('change', () => {
		console.log('Hobby Selected:', hobbySelector.value);
	})
}
getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

const getCustomAttribute = () => {
	const customAttrElements = document.querySelectorAll('[data-customAttr]');
	console.log('Elements with "data-customAttr" attribute:');
	for (const element of customAttrElements) {
		if (element.getAttribute) {
			console.log('Element Value:', element.getAttribute('data-customattr'));
			console.log('Element Tag:', element.tagName);
		}
	}
}
getCustomAttribute();

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

const getSum = () => {

	// Get the input & output elements
	const num1Input = document.getElementById('num1');
	const num2Input = document.getElementById('num2');
	const sumSpan = document.getElementById('sum');
	let num1;
	let num2;

	// If input fields are blank, use the value of 0. Otherwise, parse the input as a float.
	if (num1Input.value === '') {
		num1 = 0;
	} else {
		num1 = parseFloat(num1Input.value);
	}
	if (num2Input.value === '') {
		num2 = 0;
	} else {
		num2 = parseFloat(num2Input.value);
	}

	// Check if the values are numbers, and if so, add them and display the sum
	if (isNaN(num1) || isNaN(num2)) {
		sumSpan.innerText = 'Cannot add';
	} else {
		const sum = num1 + num2;
		sumSpan.innerText = sum;
	}
}

// Add onchange event listeners to both input boxes
document.getElementById('num1').addEventListener('keyup', () => {
	getSum();
})

document.getElementById('num2').addEventListener('keyup', () => {
	getSum();
})

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

const skillAlert = () => {
	const skillSelector = document.getElementsByName('skills')[0];
	skillSelector.addEventListener('change', () => {
		alert(`Are you sure ${skillSelector.value} is one of your skills?`);
	})
}
skillAlert();

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

const favoriteColor = () => {
	const colorSelector = document.getElementsByName('favoriteColor');
	let oldFavorite = 'white';
	// Add an event listener for each radio button
	colorSelector.forEach((element) => {
		element.addEventListener('click', () => {
			alert(`So you like ${element.value} more than ${oldFavorite} now?`)
			// Remember the old favorite for the next time the alert is used
			oldFavorite = element.value;
			// Changes background color of favoriteColor radio buttons
			changeFavoriteColorButtons(element.value);
			// Change the page background color as well since the radio button background don't show up
			document.getElementsByTagName('body')[0].style.backgroundColor = element.value;
		})
	})
	// Change all of the favorite color radio button background colors to the new favorite color
	const changeFavoriteColorButtons = (newFavorite) => {
		colorSelector.forEach((element) => {
			element.style.backGroundcolor = newFavorite;
		})
	}
}
favoriteColor();

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

const hideShowName = () => {
	const employees = document.getElementsByClassName('empName');
	// Iterate over employee names
	for (const employee of employees) {
		employee.addEventListener('mouseover', () => {
			// Hide name if not hidden, or show name if hidden
			if (employee.style.color !== 'transparent') {
				employee.style.color = 'transparent';
			} else {
				employee.style.color = 'black';
			}
		})
	}
}
hideShowName();

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

const updateTime = () => {
	const timeElement = document.getElementById('currentTime');
	// Get current time and insert it into the time element
	const d = convertMS(new Date().getTime());
	// const d = new Date().toLocaleTimeString('en-US');
	timeElement.innerText = d;

	// Convert milliseconds to proper format
	function convertMS(milliseconds) {
		let hours, minutes, seconds, amPm;
		seconds = Math.floor(milliseconds / 1000);
		minutes = Math.floor(seconds / 60);
		hours = Math.floor(minutes / 60) - 5;
		seconds = seconds % 60;
		minutes = minutes % 60;
		hours = hours % 24;
		if (hours > 11) {
			amPm = 'PM';
			if (hours > 12) {
				hours -= 12;
			}
		} else {
			amPm = 'AM';
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		return `${hours}:${minutes}:${seconds} ${amPm}`
	};
}
setInterval(updateTime, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

const changeHelloWorldColor = () => {
	const element = document.getElementById('helloWorld')
	// Add event listener for clicking on Hello World
	element.addEventListener('click', () => {
		console.log(element);
		setTimeout(() => {
			element.style.color = getRandomColor();
		}, 3000);
	})

	// Gets a random color to use for the Hello World text
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}
changeHelloWorldColor();

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

const walkTheDOM = (node, func) => {
	func(node);
	for (child of node.children) {
		walkTheDOM(child, func);
	}
}
walkTheDOM(document.getRootNode(), (node) => {
	console.log('Walking the DOM:', node);
});