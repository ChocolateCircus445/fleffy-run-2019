//Fleffy Run 2019!
var isOkToPlayAudio = false;
var canvas = document.getElementById("fleffyCanvas");
var ctx = canvas.getContext("2d");
var mouseX;
var mouseY;
var fleffyX = 16;
var fleffyY = 484;
var giftX = 840;
var giftY = 4;
var creditTextY = fleffyCanvas.height / 2;
var giftBox; //1
var keepRunMeter;
var useMouseToMove = true;
var mouseOnOffTextShown = false;
var mouseTextInterval;
var creditsStarted = false;
var phase = 1;
var phaseTimers = {
  p2: false,
  p3: false,
  p4: false,
  p5: false,
  p6: false,
  p7: false,
  p8: false,
  p9: false,
  p10: false,
  p11: false,
  returnTimer: false,
}
//fleffyY is  at y: 364 on the arc of the jump.
var hsX = 385;
var hsY = 125;
var rank = 0;
var rmInterval;
var rmDecrInterval;
var splinter;
var highScore = localStorage.getItem("hiScore");
var jumpInterval = 11;
var isJumping = false;
const distX = -280;
const distY = -10;
const ratingConTab = {
  "v1": 200,
  "v2": 400,
  "v3": 500,
  "v4": 1000,
  "v5": 2000
}
var scoreX = 5;
var scoreY = 30;
var spikeY = 600;
//var scrn = 1;
var score = 0;
var runMeter = 0;
var stepDistance = 20;
var runMeterX = 840;
var runMeterY = 10;
var grassCostume = true;
var isTitlePlaying = false;
var isMusicPlaying = false;
var isCreditsPlaying = false;
var isTitleLoaded = false;
var saidImFleffy = false;
var drawSpikes = false;
var renderSpikes = true;
var masterSpikeIntervalSet = false;
var nice = "nice"
var spikeX = 1000;
var hd = {
  increaseTimerSet: false,
  decreaseTimerSet: true
}
var spikeTimerSet = false;
var creditTextX = (fleffyCanvas.width / 2) - (ctx.measureText("CREDITS").width / 2); //3
titleTheme.loop = true;
regularTheme.loop = true;
isInHyperdrive = false;
fleffyCostume = true; //2
var hasDoneGameOver = false;
spikeCounter = 0;
var grassTimer = setInterval(function() {
  grassCostume = !grassCostume;
  fleffyCostume = !fleffyCostume;
  score += 100;
}, 100);
var spikeCounterTimer = setInterval(function() {
  spikeCounter++;
}, 1)
var fleffyBox;
setMouse = function(event) {
  mouseX = event.clientX + distX;
  mouseY = event.clientY + distY;
}

doJump = function() /* Makes Fleffy jump*/{
  if (scrn == 2 && !isJumping) {
    jump();
  } else if (isJumping) {
    sayNo();
  }
}

doActivateRun = function() /* Activates hyperdrive*/{
  if (runMeter == 10) {
    regularTheme.stop();
    isInHyperdrive = true;
    rmDecrInterval = setInterval(function() {
      if (runMeter != 0) {
        runMeter += -1;
      } else {
        isInHyperdrive = false;
        titleTheme.stop();
        regularTheme.play();
        clearInterval(rmDecrInterval);
      }
    }, 2000);
  } else {
    sayNo();
  }
}

doGoLeft = function() /* Makes Fleffy go left*/{
  fleffyX += stepDistance - (stepDistance * 2);
}

doGoRight = function() /* Makes Fleffy go right*/{
  fleffyX += stepDistance;
}


handleKey = function(event) {
  switch (event.key) {
    case " ": //" "
    doJump();
    break;
    //Left and right arrows do not work for some reason
    case "ArrowLeft": //"ArrowLeft"
    doGoLeft();
    break;
    case "ArrowRight": //"ArrowRight"
    doGoRight();
    break;
    case "r": //"r"
    doActivateRun()
    break;
    case "m": //"m"
    useMouseToMove = !useMouseToMove;
    break;
    case "R": //"R"
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 10;
      }, 1)
    }
    break;
    case "1": //"1"
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 1;
      }, 1)
    }
    break;
    case "2":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 2;
      }, 1)
    }
    break;
    case "3":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 3;
      }, 1)
    }
    break;
    case "4":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 4;
      }, 1)
    }
    break;
    case "5":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 5;
      }, 1)
    }
    break;
    case "6":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 6;
      }, 1)
    }
    break;
    case "7":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 7;
      }, 1)
    }
    break;
    case "8":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 8;
      }, 1)
    }
    break;
    case "9":
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 9;
      }, 1)
    }
    break;
    case "0": //"0"
    if (cheatMode) {
    clearInterval(keepRunMeter);
    keepRunMeter = setInterval(function() {
        runMeter = 0;
      }, 1)
    }
    break;
    case "\'": //"\'"
    if (cheatMode) {
    clearInterval(keepRunMeter);
    }
    break;

    case "Escape": //"Escape"
      gameOver();
      scrn = 1;
    break;
  }
}
if (highScore == null) {
  highScore = 0;
}
var CollisionBox = function(t, b, l, r) {
    this.top = t;
    this.bottom = b;
    this.left = l;
    this.right = r;
    if (this.right < this.left || this.bottom < this.top) {
      throw new Error("Invalid dimensions");
    }
    this.draw = function(clr = 'black') {
      ctx.strokeStyle = clr;
      ctx.beginPath();
      ctx.moveTo(l, t);
      ctx.lineTo(r, t);
      //ctx.moveTo(r, t);
      ctx.lineTo(r, b);
      //ctx.moveTo(r, b);
      ctx.lineTo(l, b);
      //ctx.moveTo(l, b);
      ctx.lineTo(l, t);
      ctx.stroke();
    }
    this.isInBounds = function(x, y) {
      if (x <= this.right && x >= this.left && y <= this.bottom && y >= this.top) {
        return true;
      } else {
        return false;
      }
    }
    this.isTouchingCollisionBox = function(c) {
      var lt = [l, t];
      var rt = [r, t];
      var lb = [l, b];
      var rb = [r, b];
      //Tysm, w3schools! https://www.w3schools.com/graphics/game_obstacles.asp
      if ((this.bottom < c.top) || (this.top > c.bottom) || (this.right < c.left) || (this.left > c.right)) {
        return false;
      }
      return true;
    }
    this.isTouchingMouse = function() {
      if (this.isInBounds(mouseX, mouseY)) {
        return true;
      }
      return false;
    }
}
//giftBox = new CollisionBox(giftY, giftY + gift.height, giftX, giftX + gift.width);
//closeBox = new CollisionBox(giftY, giftY + close_button.height, giftX, giftX + close_button.width); //No copyrights here!
EditButton = function(variable, x, y, promptText = null) {
  ctx.font = "10px Comic Sans MS";
  ctx.fillStyle = "#039bfc";
  ctx.fillRect(x, y, ctx.measureText("edit").width + 20, ctx.measureText("edit").height + 10);
  ctx.fillStyle = "white";
  ctx.fillText("edit", x + 10, y + 5);
  this.variable = variable;
  this.x = x;
  this.y = y;
  this.promptText;
  if (promptText == null) {
    this.promptText = `Enter a value for ${variable}`;
  } else {
    this.promptText = promptText;
  }
  this.clickFunc = new Function();
  this.value = null;
  this.prompt = function() {
    this.value = prompt(this.promptText);
  }
  this.applyValue = function() {
    eval(`S{this.variable} = ${this.value}`);
  }
}
var f = new CollisionBox(18, 50, 8, 24);
var pleBox = new CollisionBox(484, 574, 417, 531);
var credetsBox = new CollisionBox(580, 670, 417, 531);
drawDot = function() {

  ctx.clearRect(0, 0, 960, 720);
  //This is the original algorithm to test canvas, Fleffy Run had not been developed for web yet.
  //ctx.drawImage(document.getElementById("fleffy_run_1"), mouseX + distX, mouseY + distY);
  /*
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(mouseX, mouseY, 100, 100);
  ctx.stroke();

  if (f.isTouchingMouse()) {
    f.draw('red');
  } else {
    f.draw('black');
  }
  ctx.font = "10px Arial";
  ctx.fillText(mouseX, 930, 10);
  ctx.fillText(mouseY, 930, 30);
  ctx.fillText(f.isTouchingMouse().toString(), 930, 50);
  */

  if (scrn === 1) {
    drawSpikes = false;
    videoPlaying = false;
    regularTheme.stop();
    drawTitleScreen();
    if (!isTitlePlaying) {
      isTitlePlaying = true;
      setTimeout(function() {
        titleTheme.play();
      }, 100)
    }
  } else if (scrn === 2) {
    drawPlayingField();
    if (!isInHyperdrive) {
      titleTheme.stop();
      isTitlePlaying = false;
    } else {
      regularTheme.stop();
      if (!isTitlePlaying) {
        isTitlePlaying = true;
        titleTheme.play();
      }
    }
    regularTheme.play();
  } else if (scrn === "goodies") {
    drawGoodies();
  } else if (scrn === "credits") {
    titleTheme.stop();
    isTitlePlaying = false;
    if (!videoPlaying) {
      videoPlaying = true;
      document.getElementById("fleffyCredits").play();
    } else {
      ctx.drawImage(document.getElementById("fleffyCredits"), 0, 0, 960, 720);
    }
  }
}


  if (showMouseCoords) {
    drawMouseCoords();
  }
center = function(x, y, w, h) {
  this.x = x - (w / 2);
  this.y = y - (h / 2);
  return [this.x, this.y];
}
decenter = function(x, y, w, h) {
  this.x = x + (w / 2);
  this.y = y + (h / 2);
  return [this.x, this.y]
}

drawTitleScreen = function() {
  saidImFleffy = false;
  //Draw the background
  ctx.drawImage(title, 0, 0);
  //Draw the 'ple' button
  ctx.drawImage(ple, 417, 484);
  //Draw the credits button
  ctx.drawImage(credets, 417, 580, 114, 90);
  //If the mouse is touching the 'ple' button, create an outline
  if ((pleBox.isTouchingMouse() || credetsBox.isTouchingMouse()) && scrn == 1) {
    if (pleBox.isTouchingMouse()) {
      pleBox.draw('black');
    } else if (credetsBox.isTouchingMouse()) {
      credetsBox.draw('black');
    }
    document.getElementById("fleffyCanvas").style.cursor = "pointer";
  } else {
    document.getElementById("fleffyCanvas").style.cursor = "auto";
  }
  //Draw the high score text
  ctx.font = '20px Comic Sans MS';
  ctx.fillStyle = 'black';
  ctx.fillText("High Score: " + highScore, hsX, hsY);
  //Draw text signaling cheat mode
  if (cheatMode) {
    ctx.fillStyle = 'red'; //Because of this line, the score will become red in the game.
    ctx.fillText("CHEATER CHEATER PUMPKIN EATER!", (fleffyCanvas.width - ctx.measureText("CHEATER CHEATER PUMPKIN EATER").width) - 10, fleffyCanvas.height - 20 )
  }

}
storeHighScore = function() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("hiScore", highScore);
  }
}
drawMouseCoords = function() {
  ctx.font = "10px Arial";
  ctx.fillText(mouseX, mouseX, mouseY + 10);
  ctx.fillText(mouseY, mouseX, mouseY + 30);
}
onMouseClick = function() {
  if (pleBox.isTouchingMouse() && scrn == 1) {
    score = 0;
    spikeCounter = 0;
    runMeter = 0;
    //draw();
    document.getElementById("fleffyCanvas").style.cursor = "auto";
    isJumping = false;
    resetCoords();
    if (hasDoneGameOver) {
      grassTimer = setInterval(function() {
        grassCostume = !grassCostume;
        fleffyCostume = !fleffyCostume;
        score += 100;
      }, 100);
    }
    rmInterval = setInterval(function() {
      if (runMeter != 10 && !isInHyperdrive) {
        runMeter += 1;
      }
    }, 2000)
    scrn = 2;
  } else if (credetsBox.isTouchingMouse() && scrn == 1) {
    document.getElementById("fleffyCanvas").style.cursor = "auto";
    scrn = "credits";
  }
}
draw = function() {
  alert("Nothing in here yet!")
}
jump = function() {
  boing.play();
  var changeYUp = function() {
    isJumping = true;
    if (fleffyY == 360) {
      clearTimeout(t);
      t = setInterval(changeYDown, jumpInterval)
    } else {
      fleffyY += -1;
    }
  }
  var changeYDown = function() {
    if (fleffyY == 484) {
      clearTimeout(t);
      isJumping = false;
    } else {
      fleffyY += 1;
    }
  }
  var t = setInterval(changeYUp, jumpInterval);
}
resetCoords = function() {
  fleffyX = 16;
  fleffyY = 484;
}
sayNo = function() {
  no.stop();
  no.play();
}
var spTimeout;
var spikeBox;
drawSpike = function() {
  if (scrn == 2 && !spikeTimerSet) {
    spikeTimerSet = true;
    var isDecimal = false;
    if (randomNumber(1, 2) == 2) {
      isDecimal = true;
    }
    var intr = 2;
    if (isDecimal) {
      intr += randomNumber(1, 5) * 0.1;
    }
    intr = intr * 10;
    spikeX += 20;
    spTimeout = setInterval(function() {
       if (spikeX == -20) {
         drawSpikes = false;
         spikeTimerSet = false;
         spikeX = 1000;
         clearInterval(spTimeout);
         drawRanking(decideRanking());
       } else {
         drawSpikes = true;
         spikeX += -1;
         spikeBox = new CollisionBox(spikeY, spikeY + spike.height, spikeX, spikeX + spike.width);
         if (spikeBox.isTouchingCollisionBox(fleffyBox)) {
           if (isInHyperdrive) {
             score += 500;
           } else {
             scrn = 1;
             gameOver();
             //console.warn("You did not parse the fifflegifloffer and activate the zibblezobber. Now the world will end.")
           }
         }
         if (drawCollisionBox) {
           spikeBox.draw();
         }
       }
    }, intr * 0.1)
  }
}
drawRanking = function(ranking) {
  if (scrn == 2) {
  try {
    eval("ranking_sound_" + ranking + ".play();");
    console.log("Played sound");
  }
  catch (e) {
    err.play();
    //Cool lit epic and awesome fun fact: This is basically the Japanese version of the Emergency Alert System, though it's usually reserved for earthquakes.
    console.error("\u3042\u308B\u97F3\u3092\u547C\u3073\u51FA\u3057\u305F\u304C\u3001\u305D\u308C\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002");
    console.log("Translation: A sound was called, but it didn't exist.");
    return;
  }
  var isntEnded = setInterval(function() {
    rank = ranking;
    if (eval("ranking_sound_" + ranking + ".ended")) {
      score += eval("ratingConTab.v" + ranking);
      rank = 0;
      clearInterval(isntEnded);
    }
  }, 1)
}


}
decideRanking = function() {
  if (isInHyperdrive) {
    return 5;
  }
  var compliment = randomNumber(1, 11);
  if (compliment > 0 && compliment < 6) {
    return 1;
  } else if (compliment > 5 && compliment < 9) {
    return 2;
  } else if (compliment > 8 && compliment < 11) {
    return 3;
  } else {
    return 4;
  }
}
drawPlayingField = function() {
  var intve = randomNumber(1000, 5000);
  isTitlePlaying = false;
  if (!saidImFleffy) {
    saidImFleffy = true;
    imFleffy.play();
  }
  //Draw the background
  ctx.drawImage(bg, 0, 0);
  //Draw the grass
  if (grassCostume) {
    ctx.drawImage(grass_1, 0, 687);
  } else {
    ctx.drawImage(grass_2, 0, 687);
  }
  //Is the mouse used to move Fleffy?
  if (useMouseToMove) {
    fleffyX = mouseX;
  }

  //Draw the supostar of the game
  if (fleffyCostume) {
    if (isInHyperdrive) {
      ctx.drawImage(fleffy_shield_1, fleffyX, fleffyY - 40, fleffy_shield_1.width * 0.65, fleffy_shield_1.height * 0.65);
      fleffyBox = new CollisionBox(fleffyY - 40, (fleffyY - 40) + (fleffy_shield_1.height * 0.65), fleffyX, fleffyX + (fleffy_shield_1.width * 0.65));
    } else {
      ctx.drawImage(fleffy_run_1, fleffyX, fleffyY, fleffy_run_1.width * 0.65, fleffy_run_1.height * 0.65);
      fleffyBox = new CollisionBox(fleffyY, fleffyY + (fleffy_run_1.height * 0.65) - 10, fleffyX + 20, fleffyX + (fleffy_run_1.width * 0.65) - 30);
    }
  } else {
    if (isInHyperdrive) {
      ctx.drawImage(fleffy_shield_2, fleffyX, fleffyY - 40, fleffy_shield_2.width * 0.65, (fleffy_shield_2.height * 0.65));
      fleffyBox = new CollisionBox(fleffyY - 40, (fleffyY - 40) + (fleffy_shield_2.height * 0.65), fleffyX, fleffyX + (fleffy_shield_2.width * 0.65));
    } else {
      ctx.drawImage(fleffy_run_2, fleffyX, fleffyY, fleffy_run_2.width * 0.65, fleffy_run_2.height * 0.65);
      fleffyBox = new CollisionBox(fleffyY, fleffyY + (fleffy_run_1.height * 0.65) - 10, fleffyX + 20, fleffyX + (fleffy_run_1.width * 0.65) - 30);
    }

  }
  if (drawCollisionBox) {
    fleffyBox.draw();
  }
  //Draw the score
  ctx.font = '30px Comic Sans MS';
  ctx.fillText(score, scoreX, scoreY);
  //Draw the run meter
  var rmi = eval("run_meter_" + runMeter + ';');
  ctx.drawImage(rmi, runMeterX, runMeterY);
  //Draw the spikes! Ouchie!
  if (renderSpikes) {
    renderSpikes = false;
    splinter = setInterval(function() {
      drawSpike(); //What a creative name!
    }, intve);
  }
  if (drawSpikes) {
    ctx.drawImage(spike, spikeX, spikeY);
  }
  //Draw the ranking
  ctx.drawImage(eval("ranking_" + rank), center(450, 214, eval("ranking_" + rank + ".width"), eval("ranking_" + rank + ".height"))[0], center(450, 214, eval("ranking_" + rank + ".width"), eval("ranking_" + rank + ".height"))[1]);
}
gameOver = function() {
  clearInterval(grassTimer);
  clearInterval(rmInterval);
  clearInterval(rmDecrInterval);
  runMeter = 0;
  hasDoneGameOver = true;
  storeHighScore();
  renderSpikes = true;
  splinter = null;
}
drawGoodies = function() {
  //Draw the title
  ctx.font = '50px Comic Sans MS';
  ctx.fillText("Goodies", 10, 60);
  //Draw the X
  ctx.drawImage(close_button, giftX, giftY);
  //The options
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Test", 10, 120);
  var tst;
  var testButton = new EditButton("tst", 10, 160);
}





//Hello, you have made it to my SECRET BOX!
/*
https://m.media-amazon.com/images/M/MV5BMjk5OGE5ZDgtZDM4Zi00Yzg3LWJiZmMtYTQyMzk0OTEzMWJmXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg

Hey, TetraBitGaming, if you're looking through this, I respect you (I respect you even if you don't look through here fyi).

I made a comic. It is at https://b-cdn.gamejolt.net/data/games/5/129/319629/protected-files-cdn/5c2528a697f36/fleffy_comic_1.png
*/
