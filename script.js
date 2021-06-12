let canvas = document.GetElementBuId("canvas"),
ctx = canvas.getContext("2d"),
width = canvas.width,
height = canvas.height,
player = {
  x: 0,
  y: 0,
  toll: 100,
};
width = window.width;
height = window.height;
ctx.fillRect(0,0,width,height);

function move (e) {
  if(e.keyCode==87||e.keyCode==38) { // W
	  if(player.y>0||(player.y=550)) player.y -= player.toll;
	}
	
	if(e.keyCode==65||e.keyCode==37) { // A
	  if(player.x>0||(player.x=1300)) player.x -= player.toll;
	}
	
	if(e.keyCode==83||e.keyCode==40) { // S
	  if(player.y<450||(player.y=0)) player.y += player.toll;
	}
	
	if(e.keyCode==68||e.keyCode==39) {	// D
	  if(player.x<1300||(player.x=0)) player.x += player.toll;
	Reset ();
}
  
function Reset () {
  ctx.fillStyle = "black";
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle="white";
  ctx.fillRect(player.x,player.y,player.toll,player.toll)
}

document.addEventListener("onkeydown", function (e) {
  move(e);
})
