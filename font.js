
let colorArr=[];
function drawFontCenter(ctx, text, y, scale) {
    var scale = scale || 1;
    var text = text.toLowerCase();
    var x = canvas.width / 2 - text.length / 2 * 8 * scale;
    drawFont(ctx, text, x, y, scale);
}
function drawFont(ctx, text, x, y, scale) {
    var scale = scale || 1;
    var text = text.toLowerCase();
    for (var c = 0, t = text.length; c < t; c++) {
        drawLetter(ctx, text[c], x + (c * 8 * scale), y, scale);
    }
}
function drawLetter(ctx, character, xPos, yPos, scale) {
    var c = font[character];
    if (!c) throw new Error("Character " + character + " is not in font");
    for (var y = 0; y < 7; y++) {
        ctx.fillStyle = colorArr[y];
        for (var x = 0; x < 7; x++) {
            if (c[y][x]) ctx.fillRect((x * scale) + xPos, (y * scale) + yPos, scale, scale);
        }
    }
}

function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

///////gradient///////
/**
 * @see https://stackoverflow.com/questions/3080421/javascript-color-gradient
 */
function hex (c) {
    var s = "0123456789abcdef";
    var i = parseInt (c);
    if (i == 0 || isNaN (c))
      return "00";
    i = Math.round (Math.min (Math.max (0, i), 255));
    return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
  }
  
  /* Convert an RGB triplet to a hex string */
  function convertToHex (rgb) {
    return "#"+hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
  }
  
  /* Remove '#' in color hex string */
  function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }
  
  /* Convert a hex string to an RGB triplet */
  function convertToRGB (hex) {
    var color = [];
    color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
    color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
    color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
    return color;
  }
  
  function generateColor(colorStart,colorEnd){
  
      // The beginning of your gradient
      var start = convertToRGB (colorStart);    
  
      // The end of your gradient
      var end   = convertToRGB (colorEnd);    
  
      var len = 7;
  
      //Alpha blending amount
      var alpha = 0.0;
  
      var saida = [];
      
      for (i = 0; i < len; i++) {
          var c = [];
          alpha += (1.0/len);
          
          c[0] = start[0] * alpha + (1 - alpha) * end[0];
          c[1] = start[1] * alpha + (1 - alpha) * end[1];
          c[2] = start[2] * alpha + (1 - alpha) * end[2];
  
          saida.push(convertToHex (c));
          
      }
      
      return saida;
      
  }
  