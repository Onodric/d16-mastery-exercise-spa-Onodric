"use strict";
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
var CarLot = (function (oldCarLot) {
  var inventory = [];

  oldCarLot.eventActivator = function (callback) {
    };

  return oldCarLot;

})(CarLot || {});

// 3. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
