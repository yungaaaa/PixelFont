// implementing by hand Asteroid's font. see http://www.dafont.com/hyperspace.font
//https://www.dafont.com/pcsterry.font
var fontStyle ={
    "pcsterry": [4, 4],
    "hyperspace": [6, 10]
}
function drawFontCenter(ctx,text,y,scale){
	var scale = scale || 1;
	var text = text.toLowerCase();
	var x = canvas.width/2 - text.length/2 * 6 * scale;
	drawFont(ctx,text,x,y,scale);
}
function drawFont(ctx,text,x,y,scale){
	var scale = scale || 1;
	var text = text.toLowerCase();
	for (var c=0,t=text.length;c<t;c++){
		drawLetter(ctx,text[c],x+(c*6*scale),y,scale);
	}
}
function drawLetter(ctx,character,xPos,yPos,scale){
	var c = font[character];
	if (!c) throw new Error("Character " + character + " is not in font");
	for (var y=0; y<4; y++){		
		for (var x=0; x<4; x++){
            if (c[y][x] == "l") ctx.fillRect((x*scale) + xPos, (y*scale) + yPos, scale/2, scale);
            else if (c[y][x] == "r") ctx.fillRect((x*scale) + xPos , (y*scale) + yPos, scale/2, scale);
            else  if (c[y][x]) ctx.fillRect((x*scale) + xPos, (y*scale) + yPos, scale, scale);
		}
	}
}

var registerFont = (function(){
	var X = true, LH = "l", RH ="r";
	window.font = {
		"a": [[ ,X,X, ],
              [X,X, ,X],
              [X,X,X,X],
              [X,X, ,X]],
			
		"b": [[X,X,X, ],
              [X, ,X,X],
              [X,X, ,X],
              [X,X,X,X]],
			
		"c": [[ ,X,X,X],
              [X,X, , ],
              [X,X, , ],
              [X,X,X,X]],
			
		"d": [[X,X,X, ],
              [X,X, ,X],
              [X,X, ,X],
              [X,X,X, ]],
			
		"e": [[X,X,X,X],
              [X,X,X, ],
              [X,X, , ],
              [X,X,X,X]],
			
		"f": [[X,X,X,X],
              [X,X,X, ],
              [X,X, , ],
              [X,X, , ]],
			
		"g": [[ ,X,X,X],
              [X,X, , ],
              [X,X, ,X],
              [X,X,X,X]],
		
		"h": [[X,X, ,X],
              [X,X, ,X],
              [X,X,X,X],
              [X,X, ,X]],
		
		"i": [[X,X,X,X],
              [ ,X,X, ],
              [ ,X,X, ],
              [X,X,X,X]],
		
		"j": [[ , ,X,X],
              [ , ,X,X],
              [X, ,X,X],
              [X,X,X,X]],
		
		"k": [[X,X, ,X],
              [X,X,X, ],
              [X,X,X,X],
              [X,X, ,X]],
		
		"l": [[X,X, , ],
              [X,X, , ],
              [X,X, , ],
              [X,X,X,X]],
		
		"m": [[X,LH,RH,X],
              [X,X, X, X],
              [X,RH, ,X],
              [X, , ,  X]],
		
		"n": [[X,X, ,X],
              [X,X, ,X],
              [X, ,X,X],
              [X, ,X,X]],
		
		"o": [[ ,X,X,X],
              [X,X, ,X],
              [X,X, ,X],
              [X,X,X,X]],
		
		"p": [[X,X,X,X],
              [X,X, ,X],
              [X,X,X,X],
              [X,X, , ]],
		
		"q": [[ ,X,X,X],
              [X, , ,X],
              [X, ,X,X],
              [X,X,X,X]],
		
		"r": [[X,X,X, ],
              [X,X, ,X],
              [X,X,X, ],
              [X,X, ,X]],
		
		"s": [[X,X,X,X],
              [X,X, , ],
              [ , ,X,X],
              [X,X,X,X]],
		
		"t": [[X,X,X,X],
              [X,X,X,X],
              [ ,X,X, ],
              [ ,X,X, ]],
		
		"u": [[X,X, ,X],
              [X,X, ,X],
              [X,X, ,X],
              [ ,X,X,X]],
		
		"v": [[X,X, ,X],
              [X,X, ,X],
              [ ,X, ,X],
              [ , ,X, ]],
		
		"w": [[X, , , X],
              [X, , , X],
              [X,LH,LH,X],
              [X,LH,X,X]],
		
		"x": [[X, , ,X],
              [ ,X,X, ],
              [ ,X,X, ],
              [X, , ,X]],
		
		"y": [[X, , ,X],
              [X, , ,X],
              [X,X,X,X],
              [ ,X,X, ]],
		
		"z": [[X,X,X,X],
              [ , ,X,X],
              [RH,X, , ],
              [X,X,X,X]],
		
		/////////// NUMBERS //////////////
		
		"0": [[ ,X,X,X, ], 
			  [X, , , ,X],
			  [X, , ,X,X],
			  [X, ,X, ,X],
			  [X,X, , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ]],
		
		"1": [[ ,X,X, , ], 
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ ,X,X,X, ]],
		
		"2": [[ ,X,X,X, ], 
			  [X, , , ,X],
			  [ , , ,X, ],
			  [ , ,X, , ],
			  [ ,X, , , ],
			  [X, , , , ],
			  [X,X,X,X,X]],
		
		"3": [[ ,X,X,X, ], 
			  [X, , , ,X],
			  [ , , , ,X],
			  [ , ,X,X, ],
			  [ , , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ]],
		
		"4": [[ , , ,X, ], 
			  [ , ,X,X, ],
			  [ ,X, ,X, ],
			  [X, , ,X, ],
			  [X,X,X,X,X],
			  [ , , ,X, ],
			  [ , , ,X, ]],
		
		"5": [[X,X,X,X,X], 
			  [X, , , , ],
			  [X, , , , ],
			  [X,X,X,X, ],
			  [ , , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ]],
		
		"6": [[ ,X,X,X, ], 
			  [X, , , ,X],
			  [X, , , , ],
			  [X,X,X,X, ],
			  [X, , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ]],
		
		"7": [[X,X,X,X,X], 
			  [ , , , ,X],
			  [ , , ,X, ],
			  [ , , ,X, ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ]],
		
		"8": [[ ,X,X,X, ], 
			  [X, , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ],
			  [X, , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ]],
		
		"9": [[ ,X,X,X, ], 
			  [X, , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X,X],
			  [ , , , ,X],
			  [X, , , ,X],
			  [ ,X,X,X, ]],
		
		///////// SYMBOLS //////////////////
		
		" ": [[ , , , , ], 	// space
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ]],
		
		",": [[ , , , , ],  // comma
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , ,X, , ],
			  [ ,X, , , ]],
		
		".": [[ , , , , ],  // full stop
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ ,X, , , ]],
		
		"!": [[ , ,X, , ],  // exclamation mark
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , , , , ],
			  [ , ,X, , ]],
		
		"?": [[ ,X,X,X, ],  // question mark
			  [X, , , ,X],
			  [ , , , ,X],
			  [ , ,X,X, ],
			  [ , ,X, , ],
			  [ , , , , ],
			  [ , ,X, , ]],
		
		"@": [[ ,X,X,X, ],  // at sign
			  [X, , ,X,X],
			  [X, ,X, ,X],
			  [X, ,X, ,X],
			  [X, ,X,X, ],
			  [X, , , , ],
			  [ ,X,X,X, ]],
		
		"'": [[ ,X, , , ],  // apostrophe
			  [ , ,X, , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ],
			  [ , , , , ]],
		
		"₂": [[ , , , , ],  // subscript two
			  [ , , , , ],
			  [ , , , , ],
			  [ ,X,X, , ],
			  [ , , ,X, ],
			  [ , ,X, , ],
			  [ ,X,X,X, ]],
		
		"→": [[ , , , , ],  // right arrow
			  [ , ,X, , ],
			  [ , , ,X, ],
			  [X,X,X,X,X],
			  [ , , ,X, ],
			  [ , ,X, , ],
			  [ , , , , ]],
		
		"←": [[ , , , , ],  // left arrow
			  [ , ,X, , ],
			  [ ,X, , , ],
			  [X,X,X,X,X],
			  [ ,X, , , ],
			  [ , ,X, , ],
			  [ , , , , ]],
		
		"(": [[ , , ,X, ],  // left paren
			  [ , ,X, , ],
			  [ ,X, , , ],
			  [ ,X, , , ],
			  [ ,X, , , ],
			  [ , ,X, , ],
			  [ , , ,X, ]],
		
		")": [[ ,X, , , ],  // right paren
			  [ , ,X, , ],
			  [ , , ,X, ],
			  [ , , ,X, ],
			  [ , , ,X, ],
			  [ , ,X, , ],
			  [ ,X, , , ]],
		
		"↶": [[ , ,X,X, ],  // anticlockwise
			  [ ,X, , ,X],
			  [ ,X, , , ],
			  [X,X,X, , ],
			  [ ,X, , , ],
			  [ , , , , ], 
			  [ , , , , ]],
		
		"↷": [[ ,X,X, , ],  // clockwise
			  [X, , ,X, ],
			  [ , , ,X, ],
			  [ , ,X,X,X],
			  [ , , ,X, ],
			  [ , , , , ],
			  [ , , , , ]],
		
		"/": [[ , , ,X, ],  // slash
			  [ , , ,X, ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ , ,X, , ],
			  [ ,X, , , ],
			  [ ,X, , , ]],
		
		"☐": [[X,X,X,X,X],  // box
			  [X, , , ,X],
			  [X, , , ,X],
			  [X, , , ,X],
			  [X, , , ,X],
			  [X, , , ,X],
			  [X,X,X,X,X]],
		
		"☑": [[X,X,X,X,X],  // checked box
			  [X, , , ,X],
			  [X,X, ,X,X], 
			  [X, ,X, ,X],
			  [X,X, ,X,X],
			  [X, , , ,X],
			  [X,X,X,X,X]],
		
	}
})();