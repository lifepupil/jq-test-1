'use strict';

$(document).ready(init);

var respArr = [];


function init() {
  $('#getRandNums').click(getRandom);


}

function getRandom() {
  var number = 20;
  var respArr = [];

  // can think of this as a function call that goes over the Internet
  // the function inside the getJSON function is a CALLBACK FUNCTION
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=' + number + '&type=uint8',
    function(response) {
      // respArr.push(response.data);
      setGlobalVariable(response.data);
    }
  );
}

function setGlobalVariable(arr) {
  respArr = arr;
  // console.log(respArr);
}

function displayEvens() {
  for (var i = 0 ; i<respArr.length ; i++) {
    console.log(respArr[i]);
    // var $div = $('<div>');
    // $('#evens').append($div);
    // $disc.width(discWidth);
    // $disc.text(i);

  }
}
