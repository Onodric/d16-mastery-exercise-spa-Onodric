"use strict";
var insert = document.getElementById("insert");

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  for (let i = 0; i < inventory.length; i++){
    var tempAddition = '';
    tempAddition += '<div class="col-md-4" id="';
    tempAddition += inventory[i].inventoryNum;
    tempAddition += '"><div class="panel panel-default">';
    tempAddition += '<div class="panel-heading"><h3 class="panel-title">';
    tempAddition += inventory[i].year;
    tempAddition += ' ';
    tempAddition += inventory[i].make;
    tempAddition += ' ';
    tempAddition += inventory[i].model;
    tempAddition += '</h3></div><div class="panel-body"><p>Color: ';
    tempAddition += inventory[i].color;
    tempAddition += '</p><p>Interior: ';
    tempAddition += inventory[i].interiorColor;
    tempAddition += ' ';
    tempAddition += inventory[i].interiorMaterial;
    tempAddition += '</p><p>';
    tempAddition += inventory[i].description;
    tempAddition += '</div><div class="panel-footer"><p>$ ';
    tempAddition += inventory[i].price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    tempAddition += '</p><p>Inventory # ';
    tempAddition += inventory[i].inventoryNum;
    tempAddition += '</p></div></div></div>';
    console.log("inserting: ", tempAddition);
    insert.innerHTML += tempAddition;
  }
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();

}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

// 3. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
// 2. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
// 8. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
// 9. Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
// 10. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.
