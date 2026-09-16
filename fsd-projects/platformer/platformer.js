$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create 
createPlatform(0, 270, 130, 25, "red");
createPlatform(200, 400, 130, 25, "green");
createPlatform(0, 510, 140, 25, "blue");
createPlatform(330, 0, 20, 425, "gray");
createPlatform(200, 600, 130, 25, "orange");
createPlatform(450, 550, 130, 25,"hotpink");
    // TODO 3 - Create Collectables
createCollectable("database", 495, 510);
createCollectable("database", 50, 470, 0.5, 0.7);
createCollectable("database", 1350, 50);


    
    // TODO 4 - Create Cannons
createCannon("top", 300, 1000);
createCannon("right", 300, 1000);
createCannon("bottom" , 700, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
