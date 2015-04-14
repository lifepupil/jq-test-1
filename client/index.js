'use strict';

$(document).ready(init);

var respArr = [];


function init() {
  $('#getRandNums').click(getRandom);
  $('#evens').on('click', '.evens', squareEvens);

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
  displayEvens();
  displayOdds();


}

function displayEvens() {
  for (var i = 0 ; i<respArr.length ; i++) {
    var $div = $('<div>');

    $div.addClass('evens');
    $div.text(respArr[i]);
    $('#evens').append($div);
  }
}

function squareEvens() {
  var $source = $(this);
  var squared = Math.sqrt($source.text() * 1);
  $source.text(squared);
}

function displayOdds() {
  var $threes = $('<div>');
  var $others = $('<div>');

  $threes.addClass('threes');
  $others.addClass('others');

  var threesStr = '';
  var othersStr = '';

  for (var i = 0 ; i<respArr.length ; i++) {
    var thisNum = respArr[i] * 1;
    if (thisNum%3 === 0) {
      threesStr += " "+thisNum+" "
    } else {
      othersStr += " "+thisNum+" "
    }

    $threes.text(threesStr);
    $('#odds').append($threes);

    $others.text(othersStr);
    $('#odds').append($others);

  }


}
