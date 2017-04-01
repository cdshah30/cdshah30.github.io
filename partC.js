
window.onload = function() {
  var count_timer = 0;
  var start_the_timer  = null;
  var tileArray = [];
  var numberOfTiles;
  var time;
  var tilesRevealed = 0;
  var previousId;
  var id;
  var memory_values = [];
  var memory_tile_ids = [];
  var tiles_flipped = 0;
  var loserTimeout;
  var timerTimeout;
  var timerInterval;

}
function startTimer(duration, display) {
    var timer = duration;
    timerInterval = setInterval(function () {
        display.textContent = timer;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//User picks the amounts of pictures to be displayed
function tileNumbers(value){

  tileArray = []
  numberOfTiles = value;
  document.getElementById("tiles").innerHTML = 'You have selected ' + numberOfTiles/2 + ' tiles.';

  var counter = 1;
  for(var  i = 1; i < numberOfTiles + 1; i++){
    tileArray.push(counter);
    if(i%2 === 0){
      counter++;
    }
  }
}

function setSeconds(seconds){
  time = seconds;
  document.getElementById("seconds").innerHTML = 'You have selected ' + time + ' seconds.';
}

function go(){
  if(!numberOfTiles && !time){
    alert("You need to select the number of picture tiles and the number of seconds!");
  }
  else{
    if(!numberOfTiles){
      alert("You need to select the number of picture tiles!");
    }
    if(!time){
      alert("You need to select the number of seconds!");
    }
  }
  shuffle(tileArray);
  createBoard();
  previousId = null;
  tilesRevealed = 0;
  if(numberOfTiles == 16){
  var seconds = 120;
  }
  if(numberOfTiles == 20){
    var seconds = 150;
  }
  if(numberOfTiles ==24){
    var seconds = 180;
  }
  var timerDisplay = document.querySelector('#time');
  setTimeout(hideBoard,1000*time);
  timerTimeout = setTimeout(function(){ startTimer(seconds,timerDisplay);},1000*time);
  loserTimeout = setTimeout(lose,(seconds+1)*1000);
}

function createBoard(){

  var tileTable = document.createElement('table');
  tileTable.setAttribute("id","tileTable");
  tileTable.setAttribute("width","60%");
  tileTable.setAttribute("align","center");
  var numberOfColumns = numberOfTiles/4;
  var numberOfRows = numberOfTiles/numberOfColumns;
  var imageNumber = 0;
  for(var i = 0; i < numberOfRows; i++){
    tr = document.createElement('tr');
    for(var j = 0; j < numberOfColumns; j++){
      td = document.createElement('td');
      tr.appendChild(td);
      imageSrc = tileArray[imageNumber].toString() + ".gif";
      td.innerHTML = '<img src='+ imageSrc + ' width="100%">';
      td.setAttribute("id","td" + imageNumber.toString());
      td.setAttribute("onclick","tileClick(this)");
      imageNumber++;

    }
    tileTable.appendChild(tr);
  }
  var board = document.getElementById('myBoard');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  document.getElementById('myBoard').appendChild(tileTable);
}

function hideBoard(){
  for(var i = 0; i < numberOfTiles; i++){
    var tile = document.getElementById('td' + i.toString());
    tile.innerHTML = '<img src="blank.jpg" width="100%">';
  }
}

function tileClick(tile){
  console.log(numberOfTiles);
  if(previousId === null){
    id = tdIdToInt(tile.id);
    console.log(previousId);
    showTile(id);
    setPreviousId(id);
    console.log(previousId);
  }
  else{
    var id = tdIdToInt(tile.id);
    showTile(id);
    if(tileArray[id] == tileArray[previousId]){
      setTilesRevealed(tilesRevealed + 2);
      previousId = null;
      if(tilesRevealed === numberOfTiles){
        success();
      }
    }
    else{
      console.log(previousId);
      setTimeout(function() {hideTile(id)},1000);
      setTimeout(function() {hideTile(previousId); previousId = null},1000);
    }
  }
}

function tdIdToInt(stringId){
  var stringArray = stringId.split("td");
  return parseInt(stringArray[1]);
}

function showTile(number){
  var tile = document.getElementById('td' + number.toString());
  imageSrc = tileArray[number].toString() + ".jpg";
  tile.innerHTML = '<img src='+ imageSrc + ' width="100%">';
}

function hideTile(number){
  var tile = document.getElementById('td' + number.toString());
  tile.innerHTML = '<img src="blank.jpg" width="100%">';
}

function setPreviousId(value){
  previousId = value;
}
function setTilesRevealed(value){
  tilesRevealed = value;
}
function success(){
  clearInterval(timerInterval);
  clearTimeout(loserTimeout);
  text = document.getElementById('time');
  text.innerHTML = "You win!";
}
function lose(){
  createBoard();
  clearInterval(timerInterval);
  clearTimeout(loserTimeout);
  text = document.getElementById('time');
  text.style.color = 'red';
  text.innerHTML = "You lost! :(";
}
function restart(){
  location.reload();
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

