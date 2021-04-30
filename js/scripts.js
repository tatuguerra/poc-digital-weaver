let pattern = [
    [0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
    [1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
    [1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
    [1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
    [1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0]
  ]
  
  const backwards = (arr) => arr.map((_, i) => arr[arr.length - i - 1])
  
  let width
  
  function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      //quad 1
      for(var ii = 0; ii < (144 / 2); ii = ii + 24) {
        for(var jj = 0; jj < (144 / 2); jj = jj + 24) {
          if(ii > (144 / 2) - 48 && jj > (144 / 2) - 48) {
            drawPatternRowReverse(ctx, jj, ii); 
          } else {
            drawPattern(ctx, jj, ii) 
          } 
        }
      }
      
      //quad 2
      for(var ii = 0; ii < (144 / 2); ii = ii + 24) {
        for(var jj = (144 / 2); jj < 145; jj = jj + 24) {
          
          if(ii > (144 / 2) - 48 && jj < (144 / 2) + 24) {
            drawPattern(ctx, jj, ii) 
          } else {
            drawPatternRowReverse(ctx, jj, ii); 
         
          }
        }
        
      }
      
      //quad 3
       for(var ii = (144 / 2); ii < 145; ii = ii + 24) {
        for(var jj = 0; jj < (144 / 2); jj = jj + 24) {
          
          if(ii > (144 / 2) - 48 && jj < (144 / 2) + 24) {
            drawPattern(ctx, jj, ii) 
          } else {
            drawPatternRowReverse(ctx, jj, ii); 
            
          } 
          
        } 
      }
      
      //quad 4
      for(var ii = (144 / 2); ii < 145; ii = ii + 24) {
        for(var jj = (144 / 2); jj < 145; jj = jj + 24) {
          drawPatternRowColReverse(ctx, jj, ii); 
        } 
      }
           
    }
  }
  
  function drawPattern(ctx, rowMultiplier, columnMultiplier){
    for (var j= 0; j < pattern.length; j++) {
        for (var i= 0; i < pattern[j].length; i++) {
          
          if(pattern[j][i] == 0) {
            ctx.fillStyle = "red";
            ctx.fill();
          } else {
            ctx.fillStyle = "blue";
            ctx.fill();
          }
          pixel(ctx,i+rowMultiplier,j+columnMultiplier,1,1)
        }  
      }
  }
  
  function drawPatternRowReverse(ctx, rowMultiplier, columnMultiplier){
    for (var j= 0; j < pattern.length; j++) {
        for (var i=0; i < pattern[j].length; i++) {
         var reverseRow = backwards(pattern[j])
          if(reverseRow[i] == 0) {
            ctx.fillStyle = "red";
            ctx.fill();
          } else {
            ctx.fillStyle = "blue";
            ctx.fill();
          }
          pixel(ctx,i+rowMultiplier,j+columnMultiplier,1,1)
        }  
      }
  }
  
  function drawPatternColReverse(ctx, rowMultiplier, columnMultiplier){
    var reverseCol = backwards(pattern)
    for (var j= 0; j < pattern.length; j++) {
        for (var i=0; i < pattern[j].length; i++) {
         
          if(reverseCol[j][i] == 0) {
            ctx.fillStyle = "red";
            ctx.fill();
          } else{
            ctx.fillStyle = "blue";
            ctx.fill();
          }
          pixel(ctx,i+rowMultiplier,j+columnMultiplier,1,1)
        }  
      }
  }
  
  function drawPatternRowColReverse(ctx, rowMultiplier, columnMultiplier){
    var reverseCol = backwards(pattern)
    for (var j= 0; j < pattern.length; j++) {
        for (var i=0; i < pattern[j].length; i++) {
         var reverseRow = backwards(reverseCol[j])
          if(reverseRow[i] == 0) {
            ctx.fillStyle = "red";
            ctx.fill();
          } else if(reverseRow[i] == 1) {
            ctx.fillStyle = "blue";
            ctx.fill();
          }
          pixel(ctx,i+rowMultiplier,j+columnMultiplier,1,1)
        }  
      }
  }
  
  function pixel(ctx, x, y, sizeX, sizeY) {
    ctx.fillRect(x, y, sizeX, sizeY);
  }
  
  draw()