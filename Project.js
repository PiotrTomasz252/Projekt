var klik=document.getElementById('Przełącz');
var Polig=document.getElementById('obszar');
var Pek=document.querySelector('p');
var a;
var b;
var c;
var d;
var e;
a=0;
b=0;
c=0;
d=0;
e=0;
var min;
var max;
var wyn;
var los;
var iak;
var pad; 
pad=1;
wyn=1;
iak=3;
los=4;

var dol;
var gor;
dol=1;
gor=5;
var to;
var tamto;
to=1;
tamto=5;
var M;
var N;
M=1;
N=5;
min=1;
max=5;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  wyn= Math.floor(Math.random() * (max - min)) + min;
  return wyn;}

function prozna(dol, gor) {
  dol = Math.ceil(dol);
  gor = Math.floor(gor);
  iak= Math.floor(Math.random() * (gor - dol)) + dol;
  return iak;}

function przyp(M, N) {
  M = Math.ceil(M);
  N = Math.floor(N);
  pad= Math.floor(Math.random() * (N - M)) + M;
  return pad;}

function losow(to, tamto) {
  to = Math.ceil(min);
  tamto = Math.floor(max);
  los= Math.floor(Math.random() * (tamto - to)) + to;
  return los;}
  
  
  
var pred;
var Spraw;
var kier;
var drut=Polig.getContext('2d');
var PT={x:100,y:100,width:40,height:40,vx:7,vy:7};
var LEO={x:200,y:200,width:40,height:40,vx:7,vy:7};
var AM={x:550,y:400,width:40,height:40,vx:7,vy:7};
var T={x:400,y:100,width:40,height:40,vx:7,vy:7};
var CH={x:400,y:600,width:40,height:40,vx:7,vy:7};
var nabI;
var nabII;
var nabIII;
var nabIV;
var nabV;
var nabVI;
var nabVII;
var nabVIII;

 nabI={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
 nabII={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
 nabIII={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
 nabIV={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
nabV={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
 nabVI={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
 nabVII={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
 nabVIII={x:PT.x+20,y:PT.y+20,vx:25,vy:25};
var wynikI;
var wynikII;
var wynikIII;
var wynikIV;
var wynikV;
var I;
var II; 
var III;
var IV;
var V;
var VI;
var VII;
var VIII;
var HI;
var HII;
var HIII;
var HIV;
var HV;
var HVI;
var HVII;
var HVIII;

var GI;
var GII;
var GIII;
var GIV;
var GV;
var GVI;
var GVII;
var GVIII;

var JI;
var JII;
var JIII;
var JIV;
var JV;
var JVI;
var JVII;
var JVIII;

var iI;
var iII;
var iIII;
var iIV;
var iV;
var iVI;
var iVII;
var iVIII;

var blokI;
var blokII;
var blokIII;
var blokIV;
var oszczepI;
var oszczepII;
var oszczepIII;
var oszczepIV;
var oszczepV;
var oszczepVI;
var oszczepVII;
var oszczepVIII;
var kulaI;
var kulaII;
var kulaIII;
var kulaIV;
var kulaV;
var kulaVI;
var kulaVII;
var kulaVIII;

var pocI;
var pocII;
var pocIII;
var pocIV;
var pocV;
var pocVI;
var pocVII;
var pocVIII;
var G;
var H;
var i;
var J;
var ppancI;
var ppancII;
var ppancIII;
var ppancIV;
var ppancV;
var ppancVII;
var ppancVII;
var ppancVIII;

 iI=0;
 iII=0;
 iIII=0;
 iIV=0;
 iV=0;
 iVI=0;
 iVII=0;
 iVIII=0;


 HI=0;
 HII=0;
 HIII=0;
 HIV=0;
 HV=0;
 HVI=0;
 HVII=0;
 HVIII=0;

 GI=0;
 GII=0;
 GIII=0;
 GIV=0;
 GV=0;
 GVI=0;
 GVII=0;
 GVIII=0;

 JI=0;
 JII=0;
 JIII=0;
 JIV=0;
 JV=0;
 JVI=0;
 JVII=0;
 JVIII=0;



oszczepI={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepII={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepIII={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepIV={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepV={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepVI={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepVII={x:CH.x,y:CH.y,vx:25,vy:25};
oszczepVIII={x:CH.x,y:CH.y,vx:25,vy:25};



ppancI={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancII={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancIII={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancIV={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancV={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancVI={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancVII={x:LEO.x,y:LEO.y,vx:25,vy:25};
ppancVIII={x:LEO.x,y:LEO.y,vx:25,vy:25};

kulaI={x:T.x,y:T.y,vx:25,vy:25};
kulaII={x:T.x,y:T.y,vx:25,vy:25};
kulaIII={x:T.x,y:T.y,vx:25,vy:25};
kulaIV={x:T.x,y:T.y,vx:25,vy:25};
kulaV={x:T.x,y:T.y,vx:25,vy:25};
kulaVI={x:T.x,y:T.y,vx:25,vy:25};
kulaVII={x:T.x,y:T.y,vx:25,vy:25};
kulaVIII={x:T.x,y:T.y,vx:25,vy:25};

pocI={x:AM.x,y:AM.y,vx:25,vy:25};
pocII={x:AM.x,y:AM.y,vx:25,vy:25};
pocIII={x:AM.x,y:AM.y,vx:25,vy:25};
pocIV={x:AM.x,y:AM.y,vx:25,vy:25};
pocV={x:AM.x,y:AM.y,vx:25,vy:25};
pocVI={x:AM.x,y:AM.y,vx:25,vy:25};
pocVII={x:AM.x,y:AM.y,vx:25,vy:25};
pocVIII={x:AM.x,y:AM.y,vx:25,vy:25};
 G=0;
 H=0;
 i=0;
 J=0;
blokI={x:300,y:0,width:40,height:150};
blokII={x:800,y:60,width:40,height:250};
blokIII={x:1200,y:450,width:40,height:200};
blokIV={x:500,y:560,width:150,height:40};



I=0;
II=0;
III=0;
IV=0;
V=0;
VI=0;
VII=0;
VIII=0;

wynikI=0;
wynikII=0;
wynikIII=0;
wynikIV=0;
wynikV=0;

pred=1;
Spraw=0;
kier=0;
blokI.draw=function(){
drut.fillRect(this.x,this.y,this.width,this.height);
drut.fillStyle='cyan';
drut.fill();
return this.x,this.y,this.width,this.height;
};
blokII.draw=function(){
drut.fillRect(this.x,this.y,this.width,this.height);
drut.fillStyle='brown';
drut.fill();
return this.x,this.y,this.width,this.height};

blokIII.draw=function(){
	drut.fillRect(this.x,this.y,this.width,this.height);
drut.fillStyle='DarkGreen';
drut.fill();
return this.x,this.y,this.width,this.height;
};
blokIV.draw=function(){
	drut.fillRect(this.x,this.y,this.width,this.height);
drut.fillStyle='DarkKhaki';
drut.fill();
return this.x,this.y,this.width,this.height;
};


nabI.draw=function()
{drut.beginPath();
drut.fillStyle='black';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabIII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabIV.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabV.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabVI.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabVII.draw=function()
{drut.beginPath();
drut.fillStyle='green';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

nabVIII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaI.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaVIII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaVII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaVI.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaV.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaIV.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaIII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};

kulaII.draw=function()
{drut.beginPath();
drut.fillStyle='red';
drut.arc(this.x,this.y,6,0,2*Math.PI);
drut.fill();};
//PT zielony AM szary LEO czarny T czerwony CH żołty, 

PT.draw=function(){
	if(pred==2){
	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x+30,this.y);
	drut.lineTo(this.x+30,this.y+20);
	drut.lineTo(this.x+35,this.y+20);
	drut.lineTo(this.x+35,this.y+25);
	drut.lineTo(this.x+30,this.y+25);
	drut.lineTo(this.x+30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='green';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
	}
	if(pred==1){	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x-30,this.y);
	drut.lineTo(this.x-30,this.y+20);
	drut.lineTo(this.x-35,this.y+20);
	drut.lineTo(this.x-35,this.y+25);
	drut.lineTo(this.x-30,this.y+25);
	drut.lineTo(this.x-30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='green';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}
	if(pred==3){	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y+30);
	drut.lineTo(this.x+20,this.y+30);
	drut.lineTo(this.x+20,this.y+35);
	drut.lineTo(this.x+25,this.y+35);
	drut.lineTo(this.x+25,this.y+30);
	drut.lineTo(this.x+45,this.y+30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='green';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}
	if(pred==4){	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y-30);
	drut.lineTo(this.x+20,this.y-30);
	drut.lineTo(this.x+20,this.y-35);
	drut.lineTo(this.x+25,this.y-35);
	drut.lineTo(this.x+25,this.y-30);
drut.lineTo(this.x+45,this.y-30);
drut.lineTo(this.x+45,this.y);
drut.fillStyle='green';
drut.fill();
drut.closePath();
return this.x, this.y, this.width, this.height;
}
};

	
	
	
	AM.draw=function(){
			if(AM.x>1210){AM.x=1205;
getRandomInt(min, max);}
	
if(this.x<40){this.x=45;
getRandomInt(min, max);}
if(this.y>660){this.y=650;
getRandomInt(min, max);}

if(this.y<40){this.y=45;
getRandomInt(min, max);}
	if(wyn==1){
		if(AM.x>1210){AM.x=1205;
getRandomInt(min, max);}
	
if(this.x<40){this.x=45;
getRandomInt(min, max);}
if(this.y>660){this.y=655;
getRandomInt(min, max);}

if(this.y<40){this.y=45;}
getRandomInt(min, max);
	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x+30,this.y);
	drut.lineTo(this.x+30,this.y+20);
	drut.lineTo(this.x+35,this.y+20);
	drut.lineTo(this.x+35,this.y+25);
	drut.lineTo(this.x+30,this.y+25);
	drut.lineTo(this.x+30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='gray';
	

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
	}
	if(wyn==2){	

if(AM.x>1210){AM.x=1205;
getRandomInt(min, max);}	
if(this.x<40){this.x=45;
getRandomInt(min, max);}
if(this.y>660){this.y=650;
getRandomInt(min, max);}

if(this.y<40){this.y=45;
getRandomInt(min, max);}



if(AM.x>1210){AM.x=1205;
getRandomInt(min, max);}
	
if(this.x<40){this.x=45;
getRandomInt(min, max);}
if(this.y>660){this.y=655;
getRandomInt(min, max);}

if(this.y<40){this.y=45;}
getRandomInt(min, max);

drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x-30,this.y);
	drut.lineTo(this.x-30,this.y+20);
	drut.lineTo(this.x-35,this.y+20);
	drut.lineTo(this.x-35,this.y+25);
	drut.lineTo(this.x-30,this.y+25);
	drut.lineTo(this.x-30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='gray';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
	}
	if(wyn==3){	
	if(AM.x>1210){AM.x=1210;
getRandomInt(min, max);}
	
if(this.x<40){this.x=40;
getRandomInt(min, max);}
if(this.y>660){this.y=660;
getRandomInt(min, max);}

if(this.y<40){this.y=40;}
getRandomInt(min, max);
drut.beginPath();
drut.moveTo(this.x,this.y);
drut.lineTo(this.x,this.y+30);
drut.lineTo(this.x+20,this.y+30);
drut.lineTo(this.x+20,this.y+35);
drut.lineTo(this.x+25,this.y+35);
drut.lineTo(this.x+25,this.y+30);
drut.lineTo(this.x+45,this.y+30);
drut.lineTo(this.x+45,this.y);
drut.fillStyle='gray';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}
	if(wyn==4){	
	if(AM.x>1210){AM.x=1210;
getRandomInt(min, max);}
	
if(this.x<40){this.x=40;
getRandomInt(min, max);}
if(this.y>660){this.y=660;
getRandomInt(min, max);}

if(this.y<40){this.y=40;}
getRandomInt(min, max);
	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y-30);
	drut.lineTo(this.x+20,this.y-30);
	drut.lineTo(this.x+20,this.y-35);
	drut.lineTo(this.x+25,this.y-35);
	drut.lineTo(this.x+25,this.y-30);
	drut.lineTo(this.x+45,this.y-30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='gray';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}
  //return this.x, this.y, this.width, this.height;
};
	
	
	
	
	T.draw=function(){
		if(this.x>1210){this.x=1210;
przyp(M,N);}
	
else if(this.x<40){this.x=40;
przyp(M,N);}


else if(this.y>660){this.y=660;
przyp(M,N);}

else if(this.y<40){this.y=40;
przyp(M,N);}
	if(pad==1){
			if(this.x>1210){this.x=1210;
przyp(M,N);}
	
else if(this.x<40){this.x=40;
przyp(M,N);}


else if(this.y>660){this.y=660;
przyp(M,N);}

else if(this.y<40){this.y=40;
przyp(M,N);}
	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x+30,this.y);
	drut.lineTo(this.x+30,this.y+20);
	drut.lineTo(this.x+35,this.y+20);
	drut.lineTo(this.x+35,this.y+25);
	drut.lineTo(this.x+30,this.y+25);
	drut.lineTo(this.x+30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='red';

drut.fill();
drut.closePath();
	  return this.x, this.y, this.width, this.height;
}
	if(pad==2){	
		if(this.x>1210){this.x=1210;
przyp(M,N);}
	
else if(this.x<40){this.x=40;
przyp(M,N);}


else if(this.y>660){this.y=660;
przyp(M,N);}

else if(this.y<40){this.y=40;
przyp(M,N);}drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x-30,this.y);
	drut.lineTo(this.x-30,this.y+20);
	drut.lineTo(this.x-35,this.y+20);
	drut.lineTo(this.x-35,this.y+25);
	drut.lineTo(this.x-30,this.y+25);
	drut.lineTo(this.x-30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='red';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}
	if(pad==3){
		
	if(this.x>1210){this.x=1210;
przyp(M,N);}
	
else if(this.x<40){this.x=40;
przyp(M,N);}


else if(this.y>660){this.y=660;
przyp(M,N);}

else if(this.y<40){this.y=40;
przyp(M,N);}		drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y+30);
	drut.lineTo(this.x+20,this.y+30);
	drut.lineTo(this.x+20,this.y+35);
	drut.lineTo(this.x+25,this.y+35);
	drut.lineTo(this.x+25,this.y+30);
	drut.lineTo(this.x+45,this.y+30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='red';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}
	if(pad==4){
	if(this.x>1210){this.x=1210;
przyp(M,N);}
	
else if(this.x<40){this.x=40;
przyp(M,N);}


else if(this.y>660){this.y=660;
przyp(M,N);}

else if(this.y<40){this.y=40;
przyp(M,N);}		drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y-30);
	drut.lineTo(this.x+20,this.y-30);
	drut.lineTo(this.x+20,this.y-35);
	drut.lineTo(this.x+25,this.y-35);
	drut.lineTo(this.x+25,this.y-30);
	drut.lineTo(this.x+45,this.y-30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='red';

drut.fill();
drut.closePath();
  return this.x, this.y, this.width, this.height;
}

	};
	
	
	
	
	
	
	LEO.draw=function(){
		if(this.y>660){this.y=655;
prozna(dol,gor);}
else if(this.y<40){this.y=45;
prozna(dol,gor);}

if(this.x>1210){this.x=1205;
prozna(gor,dol);}
else if(this.x<40){this.x=45;
prozna(min,max);}
	if(iak==1){
		if(this.y>660){this.y=655;
prozna(dol,gor);}
else if(this.y<40){this.y=45;
prozna(dol,gor);}

if(this.x>1205){this.x=1205;
prozna(dol,gor);}
else if(this.x<40){this.x=45;
prozna(dol,gor);}
	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x+30,this.y);
	drut.lineTo(this.x+30,this.y+20);
	drut.lineTo(this.x+35,this.y+20);
	drut.lineTo(this.x+35,this.y+25);
	drut.lineTo(this.x+30,this.y+25);
	drut.lineTo(this.x+30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='black';

drut.fill();
drut.closePath();
	}
	if(iak==2){	
	if(this.y>660){this.y=655;
prozna(dol,gor);}
else if(this.y<40){this.y=45;
prozna(dol,gor);}

if(this.x>1210){this.x=1205;
prozna(dol,gor);}
else if(this.x<40){this.x=45;
prozna(dol,gor);}drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x-30,this.y);
	drut.lineTo(this.x-30,this.y+20);
	drut.lineTo(this.x-35,this.y+20);
	drut.lineTo(this.x-35,this.y+25);
	drut.lineTo(this.x-30,this.y+25);
	drut.lineTo(this.x-30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='black';

drut.fill();
drut.closePath();}
	if(iak==3){
if(this.y>660){this.y=655;
prozna(dol,gor);}
else if(this.y<40){this.y=45;
prozna(dol,gor);}

if(this.x>1210){this.x=1205;
prozna(dol,gor);}
else if(this.x<40){this.x=45;
prozna(dol,gor);}		drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y+30);
	drut.lineTo(this.x+20,this.y+30);
	drut.lineTo(this.x+20,this.y+35);
	drut.lineTo(this.x+25,this.y+35);
	drut.lineTo(this.x+25,this.y+30);
	drut.lineTo(this.x+45,this.y+30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='black';

drut.fill();
drut.closePath();}
	if(iak==4){	
	if(this.y>660){this.y=655;
prozna(dol,gor);}
else if(this.y<40){this.y=45;
prozna(dol,gor);}

if(this.x>1210){this.x=1205;
prozna(dol,gor);}
else if(this.x<40){this.x=45;
prozna(dol,gor);}drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y-30);
	drut.lineTo(this.x+20,this.y-30);
	drut.lineTo(this.x+20,this.y-35);
	drut.lineTo(this.x+25,this.y-35);
	drut.lineTo(this.x+25,this.y-30);
	drut.lineTo(this.x+45,this.y-30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='black';

drut.fill();
drut.closePath();}
	};
	
	
	CH.draw=function(){
		if(this.x>1210)
{this.x=1205;
losow(to,tamto);}
else if(this.x<40){this.x=45;
losow(to,tamto);}

if(this.y>660){this.y=655;
losow(to,tamto);}
else if(this.y<40){this.y=45;
losow(to,tamto);}

	if(los==1){
		if(this.x>1201)
{this.x=1205;
losow(to,tamto);}
else if(this.x<40){this.x=45;
losow(to,tamto);}

if(this.y>660){this.y=655;
losow(to,tamto);}
else if(this.y<40){this.y=45;
losow(to,tamto);}
	drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x+30,this.y);
	drut.lineTo(this.x+30,this.y+20);
	drut.lineTo(this.x+35,this.y+20);
	drut.lineTo(this.x+35,this.y+25);
	drut.lineTo(this.x+30,this.y+25);
	drut.lineTo(this.x+30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='yellow';

drut.fill();
drut.closePath();
	}
	if(los==2){	
	if(this.x>1210)
{this.x=1205;
losow(to,tamto);}
else if(this.x<40){this.x=45;
losow(to,tamto);}

if(this.y>660){this.y=655;
losow(to,tamto);}
else if(this.y<40){this.y=45;
losow(to,tamto);}
drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x-30,this.y);
	drut.lineTo(this.x-30,this.y+20);
	drut.lineTo(this.x-35,this.y+20);
	drut.lineTo(this.x-35,this.y+25);
	drut.lineTo(this.x-30,this.y+25);
	drut.lineTo(this.x-30,this.y+45);
	drut.lineTo(this.x,this.y+45);
	drut.fillStyle='yellow';

drut.fill();
drut.closePath();}
	if(los==3){
if(this.x>1210)
{this.x=1205;
losow(to,tamto);}
else if(this.x<40){this.x=45;
losow(to,tamto);}

if(this.y>660){this.y=655;
losow(to,tamto);}
else if(this.y<40){this.y=45;
losow(to,tamto);}
		drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y+30);
	drut.lineTo(this.x+20,this.y+30);
	drut.lineTo(this.x+20,this.y+35);
	drut.lineTo(this.x+25,this.y+35);
	drut.lineTo(this.x+25,this.y+30);
	drut.lineTo(this.x+45,this.y+30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='yellow';

drut.fill();
drut.closePath();}
	if(los==4){	
	if(this.x>1210)
{this.x=1205;
losow(to,tamto);}
else if(this.x<40){this.x=45;
losow(to,tamto);}

if(this.y>660){this.y=655;
losow(to,tamto);}
else if(this.y<40){this.y=45;
losow(to,tamto);}
drut.beginPath();
	drut.moveTo(this.x,this.y);
	drut.lineTo(this.x,this.y-30);
	drut.lineTo(this.x+20,this.y-30);
	drut.lineTo(this.x+20,this.y-35);
	drut.lineTo(this.x+25,this.y-35);
	drut.lineTo(this.x+25,this.y-30);
	drut.lineTo(this.x+45,this.y-30);
	drut.lineTo(this.x+45,this.y);
	drut.fillStyle='yellow';

drut.fill();
drut.closePath();}
	  return this.x, this.y, this.width, this.height;
};


	
window.addEventListener("keydown",Ruch);
function Ruch(key) {
if(event.keyCode=="39"){PT.x+=PT.vx;pred=2;}
if(event.keyCode=="37"){PT.x-=PT.vx;pred=1;}
if(event.keyCode=="40"){PT.y+=PT.vy;pred=3;}
if(event.keyCode=="38"){PT.y-=PT.vy;pred=4;}
if(event.keyCode=="81"){Spraw+=1;}
}


function wypisz(drut,Polig){
	Polig=document.getElementById('obszar');
	drut=Polig.getContext('2d');
	drut.clearRect(0,0, Polig.width, Polig.height);
	
	
	if((PT.x<=T.x&&PT.x+40>=T.x)&& (PT.y<=T.y&&PT.y+40>=T.y) )
{i+=1;}


 if(pad==1&&i==1)
{iI=1;i+=1;}
else if(pad==2&&i==1)
{iI=2;i+=1;}
else if(pad==3&&i==1)
{iI=3;i+=1;}
else if(pad==4&&i==1)
{iI=4;
i+=1;}

 if(pad==1&&i==3)
{iII=1;i+=1;}
else if(pad==2&&i==3)
{iII=2;i+=1;}
else if(pad==3&&i==3)
{iII=3;i+=1;}
else if(pad==4&&i==3)
{iII=4;
i+=1;}



 if(pad==1&&i==5)
{iIII=1;i+=1;}
else if(pad==2&&i==5)
{iIII=2;i+=1;}
else if(pad==3&&i==5)
{iIII=3;i+=1;}
else if(pad==4&&i==5)
{iIII=4;
i+=1;}


 if(pad==1&&i==7)
{iIV=1;i+=1;}
else if(pad==2&&i==7)
{iIV=2;i+=1;}
else if(pad==3&&i==7)
{iIV=3;i+=1;}
else if(pad==4&&i==7)
{iIV=4;
i+=1;}


 if(pad==1&&i==9)
{iV=1;i+=1;}
else if(pad==2&&i==9)
{iV=2;i+=1;}
else if(pad==3&&i==9)
{iV=3;i+=1;}
else if(pad==4&&i==9)
{iV=4;
i+=1;}

if(pad==1&&i==11)
{iVI=1;i+=1;}
else if(pad==2&&i==11)
{iVI=2;i+=1;}
if(pad==3&&i==11)
{iVI=3;i+=1;}
else if(pad==4&&i==11)
{iVI=4;i+=1;}



 if(i==13&&pad==1)
{iVII=1;
i+=1;}
else if(i==13&&pad==2)
{iVII=2;
i+=1;}
else if(i==13&&pad==3)
{iVII=3;
i+=1;}
else if(i==13&&pad==4)
{iVII=4;
i+=1;}

 if(pad==1&&i==15)
{iVIII=1;
i+=1;}
else if(pad==2&&i==15)
{iVIII=2;i+=1;}
else if(i==15&&pad==3)
{iVIII=3;
i+=1;}
else if(i==15&&pad==4)
{iVIII=4;
i+=1;}


	
if(iI==1){kulaI.x+=kulaI.vx;}
if(iI==2){kulaI.x-=kulaI.vx;}
if(iI==3){kulaI.y+=kulaI.vy;}
if(iI==4){kulaI.y-=kulaI.vy;}
if(iI==0){

if(pad==1){kulaI.x=T.x+20;  kulaI.y=T.y+20;}
if(pad==2){kulaI.x=T.x-20;  kulaI.y=T.y+20;}
if(pad==3){kulaI.x=T.x+20;  kulaI.y=T.y-20;}
if(pad==4){kulaI.x=T.x+20;  kulaI.y=T.y+20;}
	}

if(iII==1){kulaII.x+=kulaII.vx;}
if(iII==2){kulaII.x-=kulaII.vx;}
if(iII==3){kulaII.y+=kulaII.vy;}
if(iII==4){kulaII.y-=kulaII.vy;}
if(iII==0){

if(pad==1){kulaII.x=T.x+20;  kulaII.y=T.y+20;}
if(pad==2){kulaII.x=T.x-20;  kulaII.y=T.y+20;}
if(pad==3){kulaII.x=T.x+20;  kulaII.y=T.y-20;}
if(pad==4){kulaII.x=T.x+20;  kulaII.y=T.y+20;}
	}


if(iIII==1){kulaIII.x+=kulaIII.vx;}
if(iIII==2){kulaIII.x-=kulaIII.vx;}
if(iIII==3){kulaIII.y+=kulaIII.vy;}
if(iIII==4){kulaIII.y-=kulaIII.vy;}
if(iIII==0){

if(pad==1){kulaIII.x=T.x+20;  kulaIII.y=T.y+20;}
if(pad==2){kulaIII.x=T.x-20;  kulaIII.y=T.y+20;}
if(pad==3){kulaIII.x=T.x+20;  kulaIII.y=T.y-20;}
if(pad==4){kulaIII.x=T.x+20;  kulaIII.y=T.y+20;}
	}


if(iIV==1){kulaIV.x+=kulaIV.vx;}
if(iIV==2){kulaIV.x-=kulaIV.vx;}
if(iIV==3){kulaIV.y+=kulaIV.vy;}
if(iIV==4){kulaIV.y-=kulaIV.vy;}
if(iIV==0){

if(pad==1){kulaIV.x=T.x+20;  kulaIV.y=T.y+20;}
if(pad==2){kulaIV.x=T.x-20;  kulaIV.y=T.y+20;}
if(pad==3){kulaIV.x=T.x+20;  kulaIV.y=T.y-20;}
if(pad==4){kulaIV.x=T.x+20;  kulaIV.y=T.y+20;}
	}
	

if(iV==1){kulaV.x+=kulaV.vx;}
if(iV==2){kulaV.x-=kulaV.vx;}
if(iV==3){kulaV.y+=kulaV.vy;}
if(iV==4){kulaV.y-=kulaV.vy;}
if(iV==0){

if(pad==1){kulaV.x=T.x+20;  kulaV.y=T.y+20;}
if(pad==2){kulaV.x=T.x-20;  kulaV.y=T.y+20;}
if(pad==3){kulaV.x=T.x+20;  kulaV.y=T.y-20;}
if(pad==4){kulaV.x=T.x+20;  kulaV.y=T.y+20;}
}

if(iVI==1){kulaVI.x+=kulaVI.vx;}
if(iVI==2){kulaVI.x-=kulaVI.vx;}
if(iVI==3){kulaVI.y+=kulaVI.vy;}
if(iVI==4){kulaVI.y-=kulaVI.vy;}
if(iVI==0){

if(pad==1){kulaVI.x=T.x+20;  kulaVI.y=T.y+20;}
if(pad==2){kulaVI.x=T.x-20;  kulaVI.y=T.y+20;}
if(pad==3){kulaVI.x=T.x+20;  kulaVI.y=T.y-20;}
if(pad==4){kulaVI.x=T.x+20;  kulaVI.y=T.y+20;}
	}
	
	
	if(iVII==1){kulaVII.x+=kulaVII.vx;}
if(iVII==2){kulaVII.x-=kulaVII.vx;}
if(iVII==3){kulaVII.y+=kulaVII.vy;}
if(iVII==4){kulaVII.y-=kulaVII.vy;}
if(iVII==0){

if(pad==1){kulaVII.x=T.x+20;  kulaVII.y=T.y+20;}
if(pad==2){kulaVII.x=T.x-20;  kulaVII.y=T.y+20;}
if(pad==3){kulaVII.x=T.x+20;  kulaVII.y=T.y-20;}
if(pad==4){kulaVII.x=T.x+20;  kulaVII.y=T.y+20;}
	}
	
	if(iVIII==1){kulaVII.x+=kulaVII.vx;}
if(iVIII==2){kulaVIII.x-=kulaVIII.vx;}
if(iVIII==3){kulaVIII.y+=kulaVIII.vy;}
if(iVIII==4){kulaVIII.y-=kulaVIII.vy;}
if(iVIII==0){

if(pad==1){kulaVIII.x=T.x+20;  kulaVIII.y=T.y+20;}
if(pad==2){kulaVIII.x=T.x-20;  kulaVIII.y=T.y+20;}
if(pad==3){kulaVIII.x=T.x+20;  kulaVIII.y=T.y-20;}
if(pad==4){kulaVIII.x=T.x+20;  kulaVIII.y=T.y+20;}
	}
	
	
	
	if (Spraw==1&&pred==1){I=1;
		Spraw+=1;}
		else if (Spraw==1&&pred==2){I=2;
		Spraw+=1;}
		else if (Spraw==1&&pred==3){I=3;
		Spraw+=1;}
		else if (Spraw==1&&pred==4){I=4;
		Spraw+=1;}
		
		
		if (Spraw==3&&pred==1){II=1;
		Spraw+=1;}
		else if (Spraw==3&&pred==2){II=2;
		Spraw+=1;}
		else if (Spraw==3&&pred==3){II=3;
		Spraw+=1;}
		else if (Spraw==3&&pred==4){II=4;
		Spraw+=1;}
		
		if (Spraw==5&&pred==1){III=1;
		Spraw+=1;}
		else if (Spraw==5&&pred==2){III=2;
		Spraw+=1;}
		else if (Spraw==5&&pred==3){III=3;
		Spraw+=1;}
		else if (Spraw==5&&pred==4){III=4;
		Spraw+=1;}
		
		if (Spraw==7&&pred==1){IV=1;
		Spraw+=1;}
		else if (Spraw==7&&pred==2){IV=2;
		Spraw+=1;}
		else if (Spraw==7&&pred==3){IV=3;
		Spraw+=1;}
		else if (Spraw==7&&pred==4){IV=4;
		Spraw+=1;}
		
		if (Spraw==9&&pred==1){V=1;
		Spraw+=1;}
		else if (Spraw==9&&pred==2){V=2;
		Spraw+=1;}
		else if (Spraw==9&&pred==3){V=3;
		Spraw+=1;}
		else if (Spraw==9&&pred==4){V=4;
		Spraw+=1;}
		
		if (Spraw==11&&pred==1){VI=1;
		Spraw+=1;}
		else if (Spraw==11&&pred==2){VI=2;
		Spraw+=1;}
		else if (Spraw==11&&pred==3){VI=3;
		Spraw+=1;}
		else if (Spraw==11&&pred==4){VI=4;
		Spraw+=1;}
		
		if (Spraw==13&&pred==1){VII=1;
		Spraw+=1;}
		else if (Spraw==13&&pred==2){VII=2;
		Spraw+=1;}
		else if (Spraw==13&&pred==3){VII=3;
		Spraw+=1;}
		else if (Spraw==13&&pred==4){VII=4;
		Spraw+=1;}
		
		if (Spraw==15&&pred==1){VIII=1;
		Spraw+=1;}
		else if (Spraw==15&&pred==2){VIII=2;
		Spraw+=1;}
		else if (Spraw==15&&pred==3){VIII=3;
		Spraw+=1;}
		else if (Spraw==15&&pred==4){VIII=4;
		Spraw+=1;}
		

if(I==1){nabI.x-=nabI.vx;}
if(I==2){nabI.x+=nabI.vx;}
if(I==3){nabI.y+=nabI.vy;}
if(I==4){nabI.y-=nabI.vy;}
if(I==0){
	if(pred==1){nabI.x=PT.x-20;
	nabI.y=PT.y+20;}
	if(pred==2){nabI.x=PT.x+20;
	nabI.y=PT.y+20;}
	if(pred==3){nabI.x=PT.x+20;
	nabI.y=PT.y+20;}
	if(pred==4){nabI.x=PT.x+20;
	nabI.y=PT.y-20;}
	}

if(II==1){nabII.x-=nabI.vx;}
if(II==2){nabII.x+=nabI.vx;}
if(II==3){nabII.y+=nabI.vy;}
if(II==4){nabII.y-=nabI.vy;}
if(II==0){if(pred==1){nabII.x=PT.x-20;
	nabII.y=PT.y+20;}
	if(pred==2){nabII.x=PT.x+20;
	nabII.y=PT.y+20;}
	if(pred==3){nabII.x=PT.x+20;
	nabII.y=PT.y+20;}
	if(pred==4){nabII.x=PT.x+20;
	nabII.y=PT.y-20;}}


if(III==1){nabIII.x-=nabIII.vx;}
if(III==2){nabIII.x+=nabIII.vx;}
if(III==3){nabIII.y+=nabIII.vy;}
if(III==4){nabIII.y-=nabIII.vy;}
if(III==0){
	if(pred==1){nabIII.x=PT.x-20;
	nabIII.y=PT.y+20;}
	if(pred==2){nabIII.x=PT.x+20;
	nabIII.y=PT.y+20;}
	if(pred==3){nabIII.x=PT.x+20;
	nabIII.y=PT.y+20;}
	if(pred==4){nabIII.x=PT.x+20;
	nabIII.y=PT.y-20;}
	}
	
	if(IV==1){nabIV.x-=nabIV.vx;}
if(IV==2){nabIV.x+=nabIV.vx;}
if(IV==3){nabIV.y+=nabIV.vy;}
if(IV==4){nabIV.y-=nabIV.vy;}
if(IV==0){
	if(pred==1){nabIV.x=PT.x-20;
	nabIV.y=PT.y+20;}
	if(pred==2){nabIV.x=PT.x+20;
	nabIV.y=PT.y+20;}
	if(pred==3){nabIV.x=PT.x+20;
	nabIV.y=PT.y+20;}
	if(pred==4){nabIV.x=PT.x+20;
	nabIV.y=PT.y-20;}
	}
	
	if(V==1){nabV.x-=nabV.vx;}
if(V==2){nabV.x+=nabV.vx;}
if(V==3){nabV.y+=nabV.vy;}
if(V==4){nabV.y-=nabV.vy;}
if(V==0){
	if(pred==1){nabV.x=PT.x-20;
	nabV.y=PT.y+20;}
	if(pred==2){nabV.x=PT.x+20;
	nabV.y=PT.y+20;}
	if(pred==3){nabV.x=PT.x+20;
	nabV.y=PT.y+20;}
	if(pred==4){nabV.x=PT.x+20;
	nabV.y=PT.y-20;}
	}
	
	if(VI==1){nabVI.x-=nabVI.vx;}
if(VI==2){nabVI.x+=nabVI.vx;}
if(VI==3){nabVI.y+=nabVI.vy;}
if(VI==4){nabVI.y-=nabVI.vy;}
if(VI==0){
	if(pred==1){nabVI.x=PT.x-20;
	nabVI.y=PT.y+20;}
	if(pred==2){nabVI.x=PT.x+20;
	nabVI.y=PT.y+20;}
	if(pred==3){nabVI.x=PT.x+20;
	nabVI.y=PT.y+20;}
	if(pred==4){nabVI.x=PT.x+20;
	nabVI.y=PT.y-20;}
	}
	
if(VII==1){nabVII.x-=nabVII.vx;}
if(VII==2){nabVII.x+=nabVII.vx;}
if(VII==3){nabVII.y+=nabVII.vy;}
if(VII==4){nabVII.y-=nabVII.vy;}
if(VII==0){
	if(pred==1){nabVII.x=PT.x-20;
	nabVII.y=PT.y+20;}
	if(pred==2){nabVII.x=PT.x+20;
	nabVII.y=PT.y+20;}
	if(pred==3){nabVII.x=PT.x+20;
	nabVII.y=PT.y+20;}
	if(pred==4){nabVII.x=PT.x+20;
	nabVII.y=PT.y-20;}
	}
	
	if(VIII==1){nabVIII.x-=nabVIII.vx;}
if(VIII==2){nabVIII.x+=nabVIII.vx;}
if(VIII==3){nabVI.y+=nabVIII.vy;}
if(VIII==4){nabVI.y-=nabVIII.vy;}
if(VIII==0){
	if(pred==1){nabVIII.x=PT.x-20;
	nabVIII.y=PT.y+20;}
	if(pred==2){nabVIII.x=PT.x+20;
	nabVIII.y=PT.y+20;}
	if(pred==3){nabVIII.x=PT.x+20;
	nabVIII.y=PT.y+20;}
	if(pred==4){nabVIII.x=PT.x+20;
	nabVIII.y=PT.y-20;}
	}
	
if(wyn==1){AM.x+=AM.vx;}
if(wyn==2){AM.x-=AM.vx;}
if(wyn==3){AM.y+=AM.vy;}
if(wyn==4){AM.y-=AM.vy;}

if(los==1){CH.x+=CH.vx}
if(los==2){CH.x-=CH.vx}
if(los==3){CH.y+=CH.vy}
if(los==4){CH.y-=CH.vy}

if(pad==1){T.x+=T.vx;}
if(pad==2){T.x-=T.vx;}
if(pad==3){T.y+=T.vy;}
if(pad==4){T.y-=T.vy;}

if(iak==1){LEO.x+=LEO.vx;}
if(iak==2){LEO.x-=LEO.vx;}
if(iak==3){LEO.y+=LEO.vy;}
if(iak==4){LEO.y-=LEO.vy;}



if(PT.x+40>blokI.x&&PT.x<blokI.x+blokI.width&&PT.y+40>blokI.y&&PT.y<blokI.y+blokI.height)
{//1 to prawo 2 w lewo 3 sół 4 góra
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra dla PT
if(pred==1){PT.x=blokI.x+40+blokI.width;}
if(pred==2){PT.x=blokI.x-40;}	
if(pred==3){PT.y=blokI.y+blokI.height+40;}
if(pred==4){PT.y=blokI.y+blokI.height+40;}
	}
	if(AM.x+40>blokI.x&&AM.x<blokI.x+blokI.width&&AM.y+40>blokI.y&&AM.y<blokI.y+blokI.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(wyn==1){AM.x=blokI.x+42+blokI.width;
getRandomInt(min,max);}
if(wyn==2){AM.x=blokI.x-42;
getRandomInt(min,max);}	
if(wyn==3){AM.y=blokI.y+blokI.height+42;
getRandomInt(min,max);}
if(wyn==4){AM.y=blokI.y+blokI.height+42;
getRandomInt(min,max);}
	}
	if(CH.x+40>blokI.x&&CH.x<blokI.x+blokI.width&&CH.y+40>blokI.y&&CH.y<blokI.y+blokI.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(los==1){CH.x=blokI.x+42+blokI.width;
losow(to,tamto);}
if(los==2){CH.x=blokI.x-42;
losow(to,tamto);}	
if(los==3){CH.y=blokI.y+blokI.height+42;
losow(to,tamto);}
if(los==4){CH.y=blokI.y+blokI.height+42;
losow(to,tamto);}
	}
	if(T.x+40>blokI.x&&T.x<blokI.x+blokI.width&&T.y+40>blokI.y&&T.y<blokI.y+blokI.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(pad==1){T.x=blokI.x+42+blokI.width;
   przyp(M, N);
}
if(pad==2){T.x=blokI.x-42;
   przyp(M, N);
}	
if(pad==3){T.y=blokI.y+blokI.height+42;
   przyp(M, N);
}
if(pad==4){T.y=blokI.y+blokI.height+42;
  przyp(M, N);
}
}
if(LEO.x+40>blokI.x&&LEO.x<blokI.x+blokI.width&&LEO.y+40>blokI.y&&LEO.y<blokI.y+blokI.height)
{
//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(iak==1){LEO.x=blokI.x+42+blokI.width;
prozna(gor,dol);}
if(iak==2){LEO.x=blokI.x-42;
prozna(gor,dol);}	
if(iak==3){LEO.y=blokI.y+blokI.height+42;
prozna(gor,dol);}
if(iak==4){LEO.y=blokI.y+blokI.height+42;
prozna(gor,dol);}}
	


if(PT.x+40>blokII.x&&PT.x<blokII.x+blokI.width&&PT.y+40>blokII.y&&PT.y<blokII.y+blokII.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(pred==1){PT.x=blokII.x+40+blokII.width;}
if(pred==2){PT.x=blokII.x-40;}	
if(pred==3){PT.y=blokII.y-40;}
if(pred==4){PT.y=blokII.y+blokII.height+40;}
	}
	if(AM.x+40>blokII.x&&AM.x<blokII.x+blokII.width&&AM.y+40>blokII.y&&AM.y<blokII.y+blokII.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(wyn==1){AM.x=blokII.x-42;//+blokII.width;
getRandomInt(min,max);}
if(wyn==2){AM.x=blokII.x+42+blokII.width;
getRandomInt(min,max);}	
if(wyn==3){AM.y=blokII.y-42;
getRandomInt(min,max);}
if(wyn==4){AM.y=blokII.y+blokII.height+42;
getRandomInt(min,max);}
	}
	if(CH.x+40>blokII.x&&CH.x<blokII.x+blokII.width&&CH.y+40>blokII.y&&CH.y<blokII.y+blokII.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(los==1){CH.x=blokII.x-42;//-blokII.width;
losow(to,tamto);}
if(los==2){CH.x=blokII.x+42;
losow(to,tamto);}	
if(los==3){CH.y=blokII.y-42;
losow(to,tamto);}
if(los==4){CH.y=blokII.y+blokII.height+42;
losow(to,tamto);}
	}
	if(T.x+40>blokII.x&&T.x<blokII.x+blokII.width&&T.y+40>blokII.y&&T.y<blokII.y+blokII.height)
{
	//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(pad==1){T.x=blokII.x-42;//-blokII.width;
przyp(M, N);}
   
if(pad==2){T.x=blokII.x+42+blokII.width;
przyp(M, N);}
	
if(pad==3){T.y=blokII.y-42;//+blokII.height+42;
   przyp(M, N);}
if(pad==4){T.y=blokII.y+blokII.height+42;
  przyp(M, N);
}
}
if(LEO.x+40>blokII.x&&LEO.x<blokII.x+blokII.width&&LEO.y+40>blokII.y&&LEO.y<blokII.y+blokII.height)
{
//1 to lewo, 2 to prawo, 3 to dół, 4 to góra
if(iak==1){LEO.x=blokII.x-42;//+blokII.width
prozna(gor,dol);}
if(iak==2){LEO.x=blokII.x+42;
prozna(gor,dol);}	
if(iak==3){LEO.y=blokII.y-42;//+blokII.height+42;
prozna(gor,dol);}
if(iak==4){LEO.y=blokII.y+blokII.height+42;
prozna(gor,dol);}}


if(PT.y>660){PT.y=659;}
else if(PT.y<40){PT.y=40;}
if(PT.x>1245){PT.x=1244;}
else if(PT.x<0){PT.x=1;}
if(nabI.x>1300||nabI.x<0){I=0;}


if(nabII.x>1300||nabII.x<0){II=0;}
if(Spraw==16){
I=0;
II=0;
III=0;
IV=0;
V=0;
}
if(Spraw==16){Spraw=0;

VI=0;
VII=0;
VIII=0;}

if(nabI.x>T.x&&nabI.x<T.x+40&&nabI.y>T.y&&nabI.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
I=0;
wynikI+=1;
Pek.innerHTML=wynikI;}

if(nabII.x>T.x&&nabII.x<T.x+40&&nabII.y>T.y&&nabII.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
II=0;
wynikI+=1;
Pek.innerHTML=wynikI;}

if(nabIII.x>T.x&&nabIII.x<T.x+40&&nabIII.y>T.y&&nabIII.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
III=0;
wynikI+=1;
Pek.innerHTML=wynikI;}

if(nabIV.x>T.x&&nabIV.x<T.x+40&&nabIV.y>T.y&&nabIV.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
IV=0;
wynikI+=1;
Pek.innerHTML=wynikI;}


if(nabV.x>T.x&&nabV.x<T.x+40&&nabV.y>T.y&&nabV.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
V=0;
wynikI+=1;
Pek.innerHTML=wynikI;}


	if(nabVI.x>T.x&&nabVI.x<T.x+40&&nabVI.y>T.y&&nabVI.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
VI=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}


	if(nabVII.x>T.x&&nabVII.x<T.x+40&&nabVII.y>T.y&&nabVII.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
VII=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

if(nabVIII.x>T.x&&nabVIII.x<T.x+40&&nabVIII.y>T.y&&nabVIII.y<T.y+40)
{T.x=2000;
T.y=2000;
T.vx=0;
T.vy=0;
VIII=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

	if(nabI.x>AM.x&&nabI.x<AM.x+40&&nabI.y>AM.y&&nabI.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
I=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

if(nabII.x>AM.x&&nabII.x<AM.x+40&&nabII.y>AM.y&&nabII.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
II=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

if(nabIII.x>AM.x&&nabIII.x<AM.x+40&&nabIII.y>AM.y&&nabIII.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
III=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

if(nabIV.x>AM.x&&nabIV.x<AM.x+40&&nabIV.y>AM.y&&nabIV.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
IV=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}


if(nabV.x>AM.x&&nabV.x<AM.x+40&&nabV.y>AM.y&&nabV.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
V=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}


	if(nabVI.x>AM.x&&nabVI.x<AM.x+40&&nabVI.y>AM.y&&nabVI.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
VI=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}


	if(nabVII.x>AM.x&&nabVII.x<AM.x+40&&nabVII.y>AM.y&&nabVII.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
VII=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

if(nabVIII.x>AM.x&&nabVIII.x<AM.x+40&&nabVIII.y>AM.y&&nabVIII.y<AM.y+40)
{AM.x=2000;
AM.y=2000;
AM.vx=0;
AM.vy=0;
VIII=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

if(nabI.x>CH.x&&nabI.x<CH.x+40&&nabI.y>CH.y&&nabI.y<CH.y+40)
{CH.x=2000;
CH.y=2000;
CH.vx=0;
CH.vy=0;
I=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

	if(nabII.x>CH.x&&nabII.x<CH.x+40&&nabII.y>CH.y&&nabII.y<CH.y+40)
{CH.x=2000;
CH.y=2000;
CH.vx=0;
CH.vy=0;
II=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

	if(nabIII.x>CH.x&&nabIII.x<CH.x+40&&nabIII.y>CH.y&&nabIII.y<CH.y+40)
{CH.y=2000;
CH.vx=0;
CH.x=2000;
CH.vy=0;
III=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

	if(nabIV.x>CH.x&&nabIV.x<CH.x+40&&nabIV.y>CH.y&&nabIV.y<CH.y+40)
{CH.x=2000;
CH.y=2000;
CH.vx=0;
CH.vy=0;
IV=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}


	if(nabV.x>CH.x&&nabV.x<CH.x+40&&nabV.y>CH.y&&nabV.y<CH.y+40)
{CH.x=2000;
CH.y=2000;
CH.vx=0;
CH.vy=0;
V=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}


	if(nabVI.x>CH.x&&nabVI.x<CH.x+40&&nabVI.y>CH.y&&nabVI.y<CH.y+40)
{CH.x=2000;
CH.y=2000;
CH.vx=0;
CH.vy=0;
VI=0;
wynikI+=1;
Pek.innerHTML=wynikI;
}

	if(nabVII.x>CH.x&&nabVII.x<CH.x+40&&nabVII.y>CH.y&&nabVII.y<CH.y+40)
{CH.x=2000;
CH.y=2000;
CH.vx=0;
CH.vy=0;
VII=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}

	if(nabVIII.x>CH.x&&nabVIII.x<CH.x+40&&nabVIII.y>CH.y&&nabVIII.y<CH.y+40)
{CH.y=2000;
CH.vx=0;
CH.x=2000;
CH.vy=0;
VIII=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}


if(nabI.x>LEO.x&&nabI.x<LEO.x+40&&nabI.y>LEO.y&&nabI.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
I=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}

	if(nabII.x>LEO.x&&nabII.x<LEO.x+40&&nabII.y>LEO.y&&nabII.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
II=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}

	if(nabIII.x>LEO.x&&nabIII.x<LEO.x+40&&nabIII.y>LEO.y&&nabIII.y<LEO.y+40)
{LEO.y=2000;
LEO.vx=0;
LEO.x=2000;
LEO.vy=0;
III=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}

	if(nabIV.x>LEO.x&&nabIV.x<LEO.x+40&&nabIV.y>LEO.y&&nabIV.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
IV=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}


	if(nabV.x>LEO.x&&nabV.x<LEO.x+40&&nabV.y>LEO.y&&nabV.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
V=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}


	if(nabVI.x>LEO.x&&nabVI.x<LEO.x+40&&nabVI.y>LEO.y&&nabVI.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
VI=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}


if(nabVII.x>LEO.x&&nabVII.x<LEO.x+40&&nabVII.y>LEO.y&&nabVII.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
VII=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}

	if(nabVIII.x>LEO.x&&nabVIII.x<LEO.x+40&&nabVIII.y>LEO.y&&nabVIII.y<LEO.y+40)
{LEO.x=2000;
LEO.y=2000;
LEO.vx=0;
LEO.vy=0;
VIII=0;
//wynikI+=1;
//Pek.innerHTML=wynikI;
}


window.requestAnimationFrame(wypisz);
PT.draw();
AM.draw();
CH.draw();
T.draw();
LEO.draw();

kulaI.draw();
kulaII.draw();
kulaIII.draw();
kulaIV.draw();
kulaV.draw();
kulaVI.draw();
kulaVII.draw();
kulaVIII.draw();

nabI.draw();
nabII.draw();
nabIII.draw();
nabIV.draw();
nabV.draw();
nabVI.draw();
nabVII.draw();
nabVIII.draw();
blokI.draw();
blokII.draw();
blokIII.draw();
blokIV.draw();

}

klik.onclick=function(e){
Ruch(event);
wypisz();
}
