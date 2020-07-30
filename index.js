const battleship = () => {

  function playerFactory(name){
    let playerinfo = {
      'playerName': name,
      'shipCount' : 4,
      'gameBoard' : [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ]
    };
    return playerinfo
    
  };
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  function fillGrid(player){
  for (let i = 0; i < player["shipCount"]; i++){
    x =  getRandomInt(3);
    y = getRandomInt(3);
    if (player['gameboard'][x][y]){
      continue;
    }
    else{
      player['gameboard'][x][y] = 1
    }
   
  };
  
  }
  
  function gamePlayA(x, y){
  
      if (player2['gameboard'][x][y]){
        totalAddedShip1 += 1;
        totalAddedShip2 -= 1;
        console.log("Hit")
        return 1
        
      }
      else{
        console.log("Miss")
      }
    
  }
  
  function gamePlayB(x, y){
  
    if (player1['gameboard'][x][y]){
      totalAddedShip2 += 1;
      totalAddedShip1 -= 1;
      console.log("Hit")
      return 1
      
    }
    else{
      console.log("Miss")
    }
  
  }
  
  
  function winner(a, b){
      if (a === 0){
        console.log("game over");
        return "player B"
      }
  
      else if (b === 0){
        console.log("game over");
        return "player A"
      }
  
  }
  
  var playerAturn = true;
  var playerBturn = false;
  var totalAddedShip1 = 4
  let player1 = prompt("First player: enter your name")
  let player2 = prompt("Second player: enter your name")
  player1 = playerFactory(player1);
  player2 = playerFactory(player2);
  fillGrid(player1);
  fillGrid(player2);
  var totalAddedShip1 = 4;
  var totalAddedShip2 = 4;
  
  while (true){ 
    
    if (playerAturn){
      coordinates = prompt("enter an X and Y coordinates between 0 and 3 respectively separated by  comma").split(',');
      x = parseInt(coordinates[0]);
      y = parseInt(coordinates[1]);
      gamePlayA(x, y);
      playerAturn = false;
      playerBturn = true;
  
  
    }
  
    if (playerBturn){
      coordinates = prompt("enter an X and Y coordinates between 0 and 3 respectively separated by  comma").split(',');
      x = parseInt(coordinates[0]);
      y = parseInt(coordinates[1]);
      gamePlayB(x, y);
      playerAturn = true;
      playerBturn = false;
    }
  
    rslt = winner(totalAddedShip1, totalAddedShip2);
    if (rslt){
      break;
    }
    
  }
  return `The winner is ${rslt}$?`
}



const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult




