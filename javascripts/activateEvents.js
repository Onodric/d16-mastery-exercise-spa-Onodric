"use strict";
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
var CarLot = (function (oldCarLot) {
  var inventory = [];

  oldCarLot.resetStyle = function () {

  };
  oldCarLot.addStyle = function(border, color){

  };
  return oldCarLot;

})(CarLot);

// 4. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    // 1. A car DOM element that was clicked on.
    // 2. A color name of your choice (see behavior requirement 5 above).
