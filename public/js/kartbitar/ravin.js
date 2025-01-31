
//---------------------------------------------
//
// RAVIN
//
//---------------------------------------------

console.log("---Ravin---")
temp = "Ravinbild" + Math.floor(Math.random()*100);

wait.push("Ravinbild");
mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind(this, "Ravinbild"));



if (wood.norr == 2 && wood.ost == 2){

	mapImages[mapImages.length-1].src = "./img/stup1.png";

	gameObj.push(new ObstacleKub(0, 0, [1, 3.2], 150, 150)); //NV
	gameObj.push(new ObstacleKub(225, 0, [1, 3.2], 175, 100));//NO
	gameObj.push(new ObstacleKub(275, 100, [1, 3.2], 25, 25));//NO
	gameObj.push(new ObstacleKub(300, 100, [1, 3.2], 100, 50));//NO
	gameObj.push(new ObstacleKub(0, 250, [1, 3.2], 100, 150));//SV
	gameObj.push(new ObstacleKub(50, 300, [1, 3.2], 50, 100));//SV
	gameObj.push(new ObstacleKub(100, 324, [1, 3.2], 50, 75));//SV
	gameObj.push(new ObstacleKub(250, 300, [1, 3.2], 50, 100));//SO
	gameObj.push(new ObstacleKub(300, 300, [1, 3.2], 100, 100));//SO
	gameObj.push(new ObstacleKub(300, 250, [1, 3.2], 100, 50));//SO
	gameObj.push(new ObstacleKub(100, 290, [1, 3.2], 30, 100));//SO

//gameObj.push(new ObstacleKub(0, 0, [0, 1], 400, 400));//BV

//övre väg

	gameObj.push(new ObstacleKub(120, 0, [1.0, 2], 35, 125));//norr
	gameObj.push(new ObstacleKub(150, 0, [1.0, 2], 110, 150));//norr
	gameObj.push(new ObstacleKub(250, 150, [1.0, 2], 160, 100));//ost
	gameObj.push(new ObstacleKub(200, 150, [1.0, 2], 60, 50));//ost
	gameObj.push(new ObstacleKub(250, 100, [1.0, 2], 60, 50));//ost

//KLippor
	gameObj.push(new ObstacleKub(100, 150, [1.0, 1.91], 110, 51));//norr
	gameObj.push(new ObstacleKub(150, 200, [1.0, 1.91], 110, 51));//norr
	gameObj.push(new ObstacleKub(200, 250, [1.0, 1.91], 110, 51));//norr
	gameObj.push(new ObstacleKub(240, 300, [1.0, 1.91], 40, 40));//norr
}

if (wood.norr == 2 && wood.vast == 2){
	mapImages[mapImages.length-1].src = "./img/stup2.png";

	gameObj.push(new ObstacleKub(0, 0, [1, 3.2], 100, 150)); //NV
	gameObj.push(new ObstacleKub(100, 0, [1, 3.2], 50, 120)); //NV
	gameObj.push(new ObstacleKub(150, 0, [1, 3.2], 25, 80)); //NV
	gameObj.push(new ObstacleKub(260, 0, [1, 3.2], 140, 165));//NO
	gameObj.push(new ObstacleKub(0, 250, [1, 3.2], 145, 150));//SV
	gameObj.push(new ObstacleKub(250, 345, [1, 3.2], 25, 55));//SO
	gameObj.push(new ObstacleKub(275, 280, [1, 3.2], 50, 120));//SO
	gameObj.push(new ObstacleKub(325, 250, [1, 3.2], 75, 150));//SO

//övre väg

	gameObj.push(new ObstacleKub(0, 0, [1, 2], 101, 300)); //NV
	gameObj.push(new ObstacleKub(100, 0, [1, 2], 51, 234)); //NV
	gameObj.push(new ObstacleKub(150, 0, [1, 2], 26, 220)); //NV
	gameObj.push(new ObstacleKub(175, 0, [1, 2], 36, 180)); //NV
	gameObj.push(new ObstacleKub(210, 0, [1, 2], 26, 155)); //NV
	gameObj.push(new ObstacleKub(235, 0, [1, 2], 40, 140)); //NV

	
//KLippor
	gameObj.push(new ObstacleKub(100, 223, [1, 1.91], 51, 110)); //NV
	gameObj.push(new ObstacleKub(150, 200, [1, 1.91], 26, 140)); //NV
	gameObj.push(new ObstacleKub(165, 180, [1, 1.91], 26, 116)); //NV
	gameObj.push(new ObstacleKub(190, 170, [1, 1.91], 26, 90)); //NV
	gameObj.push(new ObstacleKub(215, 140, [1, 1.91], 26, 90)); //NV
	gameObj.push(new ObstacleKub(240, 125, [1, 1.91], 26, 85)); //NV
	gameObj.push(new ObstacleKub(265, 155, [1, 1.91], 26, 55)); //NV


}

if (wood.vast == 2 && wood.soder == 2){
	mapImages[mapImages.length-1].src = "./img/stup3.png";

	gameObj.push(new ObstacleKub(0, 0, [1, 3.2], 130, 150)); //NV
	gameObj.push(new ObstacleKub(240, 0, [1, 3.2], 30, 75 ));//NO
	gameObj.push(new ObstacleKub(270, 0, [1, 3.2], 30, 130 ));//NO

	gameObj.push(new ObstacleKub(300, 0, [1, 3.2], 95, 150));//NO
	gameObj.push(new ObstacleKub(0, 265, [1, 3.2], 145, 135));//SV
	gameObj.push(new ObstacleKub(0, 240, [1, 3.2], 100, 26));//SV
	gameObj.push(new ObstacleKub(290, 250, [1, 3.2], 110, 150));//SO
	gameObj.push(new ObstacleKub(265, 270, [1, 3.2], 26, 130));//SO
	gameObj.push(new ObstacleKub(145, 310, [1, 3.2], 30, 90));//SO


//övre väg
let wi; let hi;
let xer = [0, 111, 160, 204, 232, 278]; 
let yer = [150, 157, 191, 226, 252, 286]; 

for (i=0; i< xer.length-1; i++){
	wi = xer[i+1] - xer[i] +1; hi = 400 - yer[i];
	gameObj.push(new ObstacleKub(xer[i], yer[i], [1, 2], wi, hi)); //NV

}

 xer = [110, 140, 155, 170, 190, 215, 259	, 300]; 
 yer = [50, 53, 85, 129, 140, 170, 200, 220]; 

for (i=0; i< xer.length-1; i++){
	wi = xer[i+1] - xer[i] +1; hi = yer[i]+130;
	gameObj.push(new ObstacleKub(xer[i], yer[i], [1, 1.91], wi, hi)); //NV

}
}

if (wood.ost == 2 && wood.soder == 2){
	mapImages[mapImages.length-1].src = "./img/stup4.png";
	let wi; let hi;
	let xer = [144,171,202,211,218,246,302,400]; 
	let yer = [268,235,207,214,188,168,143]; 

	for (i=0; i< xer.length-1; i++){
		wi = xer[i+1] - xer[i] + 1; hi = 400 - yer[i];
		gameObj.push(new ObstacleKub(xer[i], yer[i], [1, 2.0], wi, hi));
	}
	
	gameObj.push(new ObstacleKub(0, 0, [1, 3.2], 127, 127));
	gameObj.push(new ObstacleKub(263, 0, [1, 3.2], 137, 100));
	gameObj.push(new ObstacleKub(0, 263, [1, 3.2], 150, 137));
	gameObj.push(new ObstacleKub(255, 255, [1, 3.2], 145, 145));
	gameObj.push(new ObstacleKub(126, 0, [1, 3.2], 25, 90));
	gameObj.push(new ObstacleKub(0, 126, [1, 3.2], 80, 25));
	gameObj.push(new ObstacleKub(0, 240, [1, 3.2], 100, 25));
	gameObj.push(new ObstacleKub(279, 100, [1, 3.2], 120, 65));
	gameObj.push(new ObstacleKub(230, 310, [1, 3.2], 30, 90));

	xer = [105, 135, 164, 196, 213, 234, 280]; 
	yer = [204,188, 147, 128, 81, 60, 56]; 

	for (i=0; i< xer.length-1; i++){
		wi = xer[i+1] - xer[i] + 1; hi = 400 - yer[i];
		gameObj.push(new ObstacleKub(xer[i], yer[i], [1, 1.91], wi, 135));
	}


}		







coAct = "ravin";
//console.log(kartObj);
//kartObj.shift();
//console.log(kartObj);

kartObj.push({
 	vem: "ravin",
    namn: "ravin",
    vad: "kartbit",
    N: wood.norr,
    S: wood.soder,
    O: wood.ost,
    W: wood.vast,
    floor: "alla",
    miljo: true,
    figur: false,
    info: false,
    img: mapImages[mapImages.length-1],
   
   
  draw: function(){

    	var ctx = myGameArea.context;
				ctx.drawImage(this.img, 0, 0, 400, 400);
		}
});

kartObj.push(kanter);
console.log(temp);
notWaiting("Ravin"); 