var APV ;
var licznik;
var naboje;
var nabojeI;
var nabojeII;
var nabojeIII;
var nabojeIV;
var obszar;
var pole;
var X;
var Y;
var kir;
var wsk;
var spraw;
var auxil;
var min;
var max;
var lufa;
var przełd;
var wskI;
var wskII;
var wskIII;
var wskIV;
var przełd;
var lufa;
var gasien;
var poz;
var i,ii,iii,iv,v;
var skala;
var pod;
var taktyk;
var a,b,c,d;
var ciągłość;
var res;
res=document.querySelector("#Przełącz");
res.addEventListener("click",razjeszcze);
ciągłość=0;
a=document.querySelector('#a');
b=document.querySelector('#b');
c=document.querySelector('#c');
d=document.querySelector('#d');
taktyk=0;
pod=[];
skala=[];
i=document.getElementById('i');
ii=document.getElementById('ii');
iii=document.getElementById('iii');
iv=document.getElementById('iv');
v=document.getElementById('v');
lufa=[];
gasien=[];
wskI=[];
wskII=[];
wskIII=[];
wskIV=[];
przełd=[];
nabojeI=[];
nabojeII=[];
nabojeIII=[];
nabojeIV=[];
auxil=0;
APV=[];
X=100;
Y=100;
poz=[]
spraw=[];
obszar=document.getElementById('obszar');
pole=obszar.getContext('2d');
APV[0]={x:400,y:400,w:30,h:30,v:7,stan:1};
poz[0]={x:400,y:400};
lufa[0]={x:APV[0].x+9,y:APV[0].y,w:12,h:6}
gasien[0]={x:APV[0].x-5,y:APV[0].y-7,w:40,h:7};
gasien[5]={x:APV[0].x-5,y:APV[0].y+30,w:40,h:7};
kir=[];
min=[];
max=[];
wsk=[];
naboje=[];
spraw[0]=0;
licznik=0;
licznik=1;
przełd[0]=110;
while(licznik!=5){
APV[licznik]={x:X,y:Y,w:30,h:30,v:7,stan:1};
poz[licznik]={x:X,y:Y};
gasien[licznik]={x:X-5,y:Y-7,w:40,height:7};
gasien[licznik+5]={x:X-5,y:Y+30,w:40,height:7};
X+=150;
przełd[licznik]=110;
spraw[licznik]=0;
min[licznik]=1;
max[licznik]=4;
kir[licznik]=0;
pod[licznik]=0;
licznik+=1;	
}
licznik=0;
kir[0]=1;
function kierunek()
{
min[taktyk] = Math.ceil(min[taktyk]);
max[taktyk] = Math.floor(max[taktyk]);
kir[taktyk]=Math.floor(Math.random() * (max[taktyk]- min[taktyk] + 1)) + min[taktyk];

return kir[licznik];}


while(licznik!=50)
{wsk[licznik]=0;
naboje[licznik]={x:APV[0].x+15,y:APV[0].y+15,v:20};
nabojeI[licznik]={x:APV[1].x+15,y:APV[1].y+15,v:20};
nabojeII[licznik]={x:APV[2].x+15,y:APV[2].y+15,v:20};
nabojeIII[licznik]={x:APV[3].x+15,y:APV[3].y+15,v:20};
nabojeIV[licznik]={x:APV[4].x+15,y:APV[4].y+15,v:20};
wskI[licznik]=0;
wskII[licznik]=0;
wskIII[licznik]=0;
wskIV[licznik]=0;
licznik+=1;}
licznik=0;
X=200;
Y=222;
while(licznik!=150)
{skala[licznik]={x:X,y:Y,width:16,height:16,stan:1};
X+=16;
if(licznik%7==0)
{X=200;
Y+=16;}
licznik+=1;}
X=600;
Y=400;
while(licznik!=375)
{skala[licznik]={x:X,y:Y,width:16,height:16,stan:1};
X+=16;
if(auxil%12==0)
{X=600;
Y+=16;}
licznik+=1;}
X=1100;
Y=300;
while(licznik!=525)
{skala[licznik]={x:X,y:Y,width:16,height:16,stan:1};
X+=16;
if(licznik%6==0)
{X=1100;
Y+=16;
X=900;}
licznik+=1;}
X=420;
Y=450;
while(licznik!=600)
{skala[licznik]={x:X,y:Y,width:16,height:16,stan:1};
X+=16;
if(licznik%6==0)
{Y+=16;
X=420;}
licznik+=1;}
licznik=601;
skala[licznik]={x:800,y:350,width:100,height:100,stan:1};
licznik=0;

function razjeszcze()
{return APV[licznik],naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],skala[licznik],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil];}
if(navigator.userAgent.match(/Android/i))
{
a.addEventListener('touchstart',A);
b.addEventListener('touchstart',B);
c.addEventListener('touchstart',C);
d.addEventListener('touchstart',D);
e.addEventListener('touchstart',E);

}
else if(navigator.userAgent.match(/Windows/i))
{document.addEventListener('keydown',wajcha);}


function A(){
	ciągłość=1;
if(APV[0].stan==1)
{poz[0].y=APV[0].y;
kir[0]=3;
APV[0].y-=7;
}
return APV[0],poz[0],kir[0];}
function B()
{ 	ciągłość=1;
if(APV[0].stan==1)
{poz[0].x=APV[0].x;
kir[0]=2;
auxil=0;
APV[0].x-=7;
}return APV[0],poz[0],kir[0];
}
function C()
{ 	ciągłość=1;
if(APV[0].stan==1)
{poz[0].x=APV[0].x;
kir[0]=1;	APV[0].x+=7;
}
return APV[0],poz[0],kir[0];}

function D(){ 
	ciągłość=1;
if(APV[0].stan==1)
{poz[0].y=APV[0].y;
kir[0]=4;
APV[0].y+=7;

}return APV[0],poz[0],kir[0];}

 function E()
 { if(APV[0].stan==1&&spraw[0]<50&&przełd[0]==110)
{wsk[spraw[0]]=kir[0];
spraw[0]+=1;
przełd[0]=0;}
return wsk[spraw[0]],przełd[0],spraw[0];
}


function wajcha(event)
{if(event.code=="ArrowUp"&&APV[0].stan==1){poz[0].y=APV[0].y;
kir[0]=3;
APV[0].y-=7;
}
else if(event.code=="ArrowDown"&&APV[0].stan==1){poz[0].y=APV[0].y;
kir[0]=4;
APV[0].y+=7;
}	
else if(event.code=="ArrowRight"&&APV[0].stan==1){poz[0].x=APV[0].x;
kir[0]=1;	APV[0].x+=7;}	
else if(event.code=="ArrowLeft"&&APV[0].stan==1)
{poz[0].x=APV[0].x;
kir[0]=2;

APV[0].x-=7;
}
//tutaj  wystrzeliwujemy kolejne kule  poprzez nadawanie im właściwości obecnego kulomiotu
else if(event.code=="KeyQ"&&APV[0].stan==1&&spraw[0]<50&&przełd[0]==110)
{wsk[spraw[0]]=kir[0];
spraw[0]+=1;
przełd[0]=0;}

return APV[0],poz[0],kir[0],przełd[0];}

function cement()
{
if(skala[licznik].stan==1)
{pole.fillRect(skala[licznik].x,skala[licznik].y,skala[licznik].width,skala[licznik].height);
if(auxil<600){pole.fillStyle='red';}
else if(auxil==600){pole.fillStyle='silver';}
pole.fill();}
return skala[licznik];}


function kolizje()
{if(APV[licznik].x>APV[auxil].x&&APV[licznik].x<APV[auxil].x+30&&APV[licznik].y>APV[auxil].y&&APV[licznik].y<APV[auxil].y+30)
{if(kir[licznik]==1&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==1&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y}
else if(kir[licznik]==2&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==2&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
taktyk=licznik;
if(taktyk!=0){
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
taktyk=auxil;
if(taktyk!=0){kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
}
else if(APV[licznik].x<APV[auxil].x&&APV[licznik].x+30>APV[auxil].x&&APV[licznik].y>APV[auxil].y&&APV[licznik].y<APV[auxil].y+30)
{if(kir[licznik]==1&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==1&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y}
else if(kir[licznik]==2&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==2&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
taktyk=licznik;
if(licznik!=0){
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
taktyk=auxil;
if(auxil!=0){kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
}
else if(APV[licznik].x<APV[auxil].x&&APV[licznik].x+30>APV[auxil].x&&APV[licznik].y<APV[auxil].y&&APV[licznik].y+30>APV[auxil].y)
{if(kir[licznik]==1&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==1&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y}
else if(kir[licznik]==2&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==2&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
taktyk=licznik;
if(taktyk!=0){
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
taktyk=auxil;
if(taktyk!=0){kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}

else if(APV[licznik].x>APV[auxil].x&&APV[licznik].x<APV[auxil].x+30&&APV[licznik].y<APV[auxil].y&&APV[licznik].y+30>APV[auxil].y)
{if(kir[licznik]==1&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==1&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==1&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y}
else if(kir[licznik]==2&&kir[auxil]==1)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==2)
{APV[licznik].x=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==2&&kir[auxil]==3)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==2&&kir[auxil]==4)
{APV[licznik].x=poz[licznik].x;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].x;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==3&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==3&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==1)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==2)
{APV[licznik].y=poz[licznik].y;
APV[auxil].x=poz[auxil].x;}
else if(kir[licznik]==4&&kir[auxil]==3)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
else if(kir[licznik]==4&&kir[auxil]==4)
{APV[licznik].y=poz[licznik].y;
APV[auxil].y=poz[auxil].y;}
taktyk=licznik;
if(taktyk!=0){
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
taktyk=auxil;
if(auxil!=0){kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
return APV[licznik],kir[licznik],APV[auxil];}

function podwozie(){
if(kir[licznik]==3||kir[licznik]==4)
{gasien[licznik]={x:APV[licznik].x-7,y:APV[licznik].y-5,w:7,h:40};
gasien[licznik+5]={x:APV[licznik].x+30,y:APV[licznik].y-5,w:7,h:40};}
else if(kir[licznik]==1||kir[licznik]==2)
{gasien[licznik]={x:APV[licznik].x-5,y:APV[licznik].y-7,w:40,h:7};
gasien[licznik+5]={x:APV[licznik].x-5,y:APV[licznik].y+30,w:40,h:7};}
pole.fillRect(gasien[licznik].x,gasien[licznik].y,gasien[licznik].w,gasien[licznik].h);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();
pole.fillRect(gasien[licznik+5].x,gasien[licznik+5].y,gasien[licznik+5].w,gasien[licznik+5].h);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();
return gasien[licznik],gasien[licznik+5];}

function falkonet()
{if(kir[licznik]==3)
{lufa[licznik]={x:APV[licznik].x+12,y:APV[licznik].y-14,w:6,h:14};}

else if(kir[licznik]==1)
{lufa[licznik]={x:APV[licznik].x+30,y:APV[licznik].y+12,w:14,h:6};}

else if(kir[licznik]==2)
{lufa[licznik]={x:APV[licznik].x-14,y:APV[licznik].y+12,w:14,h:6};}

else if(kir[licznik]==4)
{lufa[licznik]={x:APV[licznik].x+12,y:APV[licznik].y+30,w:6,h:14};}

pole.fillRect(lufa[licznik].x,lufa[licznik].y,lufa[licznik].w,lufa[licznik].h);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();
return lufa[licznik];}

function kule()
{pole.beginPath();
pole.arc(naboje[auxil].x,naboje[auxil].y,6,0,2*Math.PI);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();

pole.beginPath();
pole.arc(nabojeI[auxil].x,nabojeI[auxil].y,6,0,2*Math.PI);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();


pole.beginPath();
pole.arc(nabojeII[auxil].x,nabojeII[auxil].y,6,0,2*Math.PI);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();


pole.beginPath();
pole.arc(nabojeIII[auxil].x,nabojeIII[auxil].y,6,0,2*Math.PI);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();

pole.beginPath();
pole.arc(nabojeIV[auxil].x,nabojeIV[auxil].y,6,0,2*Math.PI);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();
return naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil];
}
function maluj()
{pole.fillRect(APV[licznik].x,APV[licznik].y,APV[licznik].w,APV[licznik].h);
if(licznik==0){pole.fillStyle='red';}
else if(licznik==1){pole.fillStyle='green';}
else if(licznik==2){pole.fillStyle='black';}
else if(licznik==3){pole.fillStyle='blue';}
else if(licznik==4){pole.fillStyle='yellow';}
pole.fill();
return APV[licznik];}

function ruch ()
{if(kir[licznik]==1){poz[licznik].x=APV[licznik].x;
APV[licznik].x+=APV[licznik].v;}
else if(kir[licznik]==2){poz[licznik].x=APV[licznik].x;
APV[licznik].x-=APV[licznik].v;}
else if(kir[licznik]==3){poz[licznik].y=APV[licznik].y;
APV[licznik].y-=APV[licznik].v;}
else if(kir[licznik]==4){poz[licznik].y=APV[licznik].y;
APV[licznik].y+=APV[licznik].v;}
return APV[licznik],poz[licznik];}

function granice()
{if(APV[licznik].x<0&&APV[licznik].stan==1){APV[licznik].x+=APV[licznik].v;
taktyk=licznik;
kierunek(min[taktyk],max[taktyk],kir[taktyk],pod[taktyk]);}
else if(APV[licznik].y<0&&APV[licznik].stan==1){APV[licznik].y+=APV[licznik].v;
taktyk=licznik;
kierunek(min[taktyk],max[taktyk],kir[taktyk],pod[taktyk]);}
else if(APV[licznik].x+APV[licznik].w>obszar.width&&APV[licznik].stan==1)
{APV[licznik].x-=APV[licznik].v;
taktyk=licznik;
kierunek(min[taktyk],max[taktyk],kir[taktyk],pod[taktyk]);}
else if(APV[licznik].y+APV[licznik].h>obszar.height&&APV[licznik].stan==1)
{APV[licznik].y-=APV[licznik].v;
taktyk=licznik;
kierunek(min[taktyk],max[taktyk],kir[taktyk],pod[taktyk]);}
return APV[licznik],kir[licznik];}


function pozycja()
{
if(wsk[auxil]==1){naboje[auxil].x+=20;}
else if(wsk[auxil]==2){naboje[auxil].x-=20;}
else if(wsk[auxil]==0){naboje[auxil]={x:APV[0].x+15,y:APV[0].y+15};}
else if(wsk[auxil]==3){naboje[auxil].y-=20;}
else if(wsk[auxil]==4){naboje[auxil].y+=20;}

if(wskI[auxil]==1){nabojeI[auxil].x+=20;}	
else if(wskI[auxil]==2){nabojeI[auxil].x-=20;}
else if(wskI[auxil]==3){nabojeI[auxil].x-=20;}	
else if(wskI[auxil]==4){nabojeI[auxil].y+=20;}
else if(wskI[auxil]==0){nabojeI[auxil]={x:APV[1].x+15,y:APV[1].y+15};}

if(wskII[auxil]==1){nabojeII[auxil].x+=20;}	
else if(wskII[auxil]==2){nabojeII[auxil].x-=20;}
else if(wskII[auxil]==3){nabojeII[auxil].y-=20;}	
else if(wskII[auxil]==4){nabojeII[auxil].y+=20;}
else if(wskII[auxil]==0){nabojeII[auxil]={x:APV[2].x+15,y:APV[2].y+15};}	

if(wskIII[auxil]==1){nabojeIII[auxil].x+=20;}
else if(wskIII[auxil]==2){nabojeIII[auxil].x-=20;}
else if(wskIII[auxil]==3){nabojeIII[auxil].y-=20;}	
else if(wskIII[auxil]==4){nabojeIII[auxil].y+=20;}
else if(wskIII[auxil]==0){nabojeIII[auxil]={x:APV[3].x+15,y:APV[3].y+15};}	

if(wskIV[auxil]==1){nabojeIV[auxil].x+=20;}
else if(wskIV[auxil]==2){nabojeIV[auxil].x-=20;}
else if(wskIV[auxil]==3){nabojeIV[auxil].y-=20;}
else if(wskIV[auxil]==4){nabojeIV[auxil].y+=20;}
else if(wskIV[auxil]==0){nabojeIV[auxil]={x:APV[4].x+15,y:APV[4].y+15};}	
return naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil];}
licznik=1;
while(licznik!=5)
{taktyk=licznik
kierunek(min[taktyk],max[taktyk],kir[taktyk]);
licznik+=1;}

function trafienie()
{if(APV[licznik].x<naboje[auxil].x&&APV[licznik].x+APV[licznik].w>naboje[auxil].x&&APV[licznik].y<naboje[auxil].y&&APV[licznik].y+APV[licznik].h>naboje[auxil].y&&licznik!=0&&wsk[auxil]!=0)
{APV[licznik].y=1200;
APV[licznik].x=2200;
naboje[auxil].y=1200;
naboje[auxil].x=2200;
APV[licznik].v=0;
APV[licznik].stan=0;}
 if(APV[licznik].x<nabojeI[auxil].x&&APV[licznik].x+APV[licznik].w>nabojeI[auxil].x&&APV[licznik].y<nabojeI[auxil].y&&APV[licznik].y+APV[licznik].h>nabojeI[auxil].y&&licznik!=1&&wskI[auxil]!=0)
{APV[licznik].y=1200;
APV[licznik].x=2200;
nabojeI[auxil].y=1200;
nabojeI[auxil].x=2200;
APV[licznik].v=0;
APV[licznik].stan=0;}

 if(APV[licznik].x<nabojeII[auxil].x&&APV[licznik].x+APV[licznik].w>nabojeII[auxil].x&&APV[licznik].y<nabojeII[auxil].y&&APV[licznik].y+APV[licznik].h>nabojeII[auxil].y&&licznik!=2&&wskII[auxil]!=0)
{APV[licznik].y=1200;
APV[licznik].x=2200;
nabojeII[auxil].y=1200;
nabojeII[auxil].x=2200;
APV[licznik].v=0;
APV[licznik].stan=0;}

 if(APV[licznik].x<nabojeIII[auxil].x&&APV[licznik].x+APV[licznik].w>nabojeIII[auxil].x&&APV[licznik].y<nabojeIII[auxil].y&&APV[licznik].y+APV[licznik].h>nabojeIII[auxil].y&&licznik!=3&&wskIII[auxil]!=0)
{APV[licznik].y=1200;
APV[licznik].x=2200;
nabojeIII[auxil].y=1200;
APV[licznik].v=0;
nabojeIII[auxil].x=2200;
APV[licznik].stan=0;}

 if(APV[licznik].x<nabojeIV[auxil].x&&APV[licznik].x+APV[licznik].w>nabojeIV[auxil].x&&APV[licznik].y<nabojeIV[auxil].y&&APV[licznik].y+APV[licznik].h>nabojeIV[auxil].y&&licznik!=4&&wskIV[auxil]!=0)
{APV[licznik].y=1200;
APV[licznik].x=2200;
nabojeIV[auxil].y=1200;
APV[licznik].v=0;
nabojeIV[auxil].x=2200;
APV[licznik].stan=0;}

return APV[licznik],naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil];}

function klang()
{
if(APV[auxil].x+30>skala[licznik].x&&APV[auxil].x+30<skala[licznik].x+skala[licznik].width&&APV[auxil].y>skala[licznik].y&&APV[auxil].y<skala[licznik].y+skala[licznik].height)
{	if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[taktyk].y+=APV[taktyk].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}

}
else if(APV[auxil].x<skala[licznik].x+skala[licznik].width&&APV[auxil].x+APV[auxil].width>skala[licznik].x+skala[licznik].width&&APV[auxil].y>skala[licznik].y&&APV[auxil].y<skala[licznik].y+skala[licznik].height)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}

}
else if(APV[auxil].x+30>skala[licznik].x&&APV[auxil].x+30<skala[licznik].x+skala[licznik].width&&APV[auxil].y<skala[licznik].y&&APV[auxil].y+30>skala[licznik].y)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}

}
else if(APV[auxil].x<skala[licznik].x+skala[licznik].width&&APV[auxil].x+APV[auxil].width>skala[licznik].x+skala[licznik].width&&APV[auxil].y<skala[licznik].y&&APV[auxil].y+30>skala[licznik].y+skala[licznik].height)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}

}
else if(APV[auxil].x<skala[licznik].x&&APV[auxil].x+30>skala[licznik].x+skala[licznik].width&&APV[auxil].y>skala[licznik].y&&APV[auxil].y<skala[licznik].y+skala[licznik].height)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
}

else if(APV[auxil].x<skala[licznik].x&&APV[auxil].x+30>skala[licznik].x+skala[licznik].width&&APV[auxil].y<skala[licznik].y&&APV[auxil].y+30>skala[licznik].y)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}

}
else if(APV[auxil].x+30>skala[licznik].x&&APV[auxil].x+30<skala[licznik].x+skala[licznik].width&&APV[auxil].y<skala[licznik].y&&APV[auxil].y+30>skala[licznik].y+skala[licznik].width)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
}
else if(APV[auxil].x<skala[licznik].x+skala[licznik].width&&APV[auxil].x+30>skala[licznik].x+skala[licznik].width&&APV[auxil].y<skala[licznik].y&&APV[auxil].y+30>skala[licznik].y+skala[licznik].width)
{if(kir[auxil]==1){APV[auxil].x-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
}
else if(kir[auxil]==2){APV[auxil].x+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}
}
else if(kir[auxil]==3){APV[auxil].y+=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
else if(kir[auxil]==4){APV[auxil].y-=APV[auxil].v;
if(auxil!=0)
{taktyk=auxil;
kierunek(min[taktyk],max[taktyk],kir[taktyk]);}}
}
return APV[auxil],kir[auxil];}

function anihilacja()
{
if(skala[licznik].x<=naboje[auxil].x&&skala[licznik].x+skala[licznik].width>=naboje[auxil].x&&skala[licznik].y<=naboje[auxil].y&&skala[licznik].y+skala[licznik].height>=naboje[auxil].y&&licznik!=0&&wsk[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
naboje[auxil].y=1200;
naboje[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=naboje[auxil].x&&skala[licznik].x<=naboje[auxil].x+3&&skala[licznik].y<=naboje[auxil].y&&skala[licznik].y+skala[licznik].height>=naboje[auxil].y&&licznik!=0&&wsk[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
naboje[auxil].y=1200;
naboje[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=naboje[auxil].x&&skala[licznik].x<=naboje[auxil].x+3&&skala[licznik].y>=naboje[auxil].y&&skala[licznik].y<=naboje[auxil].y+3&&licznik!=0&&wsk[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
naboje[auxil].y=1200;
naboje[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x<=naboje[auxil].x&&skala[licznik].x>=naboje[auxil].x&&skala[licznik].y>=naboje[auxil].y&&skala[licznik].y<=naboje[auxil].y+3&&licznik!=0&&wsk[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
naboje[auxil].y=1200;
naboje[auxil].x=2200;
skala[licznik].stan=0;
}

 if(skala[licznik].x<=nabojeI[auxil].x&&skala[licznik].x+skala[licznik].width>=nabojeI[auxil].x&&skala[licznik].y<=nabojeI[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeI[auxil].y&&licznik!=1&&wskI[auxil]!=0&&licznik!=601&&licznik!=0)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeI[auxil].y=1200;
nabojeI[auxil].x=2200;
skala[licznik].stan=0;
}


else if(skala[licznik].x>=nabojeI[auxil].x&&skala[licznik].x<=nabojeI[auxil].x+3&&skala[licznik].y<=nabojeI[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeI[auxil].y&&licznik!=0&&wskI[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeI[auxil].y=1200;
nabojeI[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=nabojeI[auxil].x&&skala[licznik].x<=nabojeI[auxil].x+3&&skala[licznik].y>=nabojeI[auxil].y&&skala[licznik].y<=nabojeI[auxil].y+3&&licznik!=0&&wskI[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeI[auxil].y=1200;
nabojeI[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x<=nabojeI[auxil].x&&skala[licznik].x>=nabojeI[auxil].x&&skala[licznik].y>=nabojeI[auxil].y&&skala[licznik].y<=nabojeI[auxil].y+3&&licznik!=0&&wskI[auxil]!=0)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeI[auxil].y=1200;
nabojeI[auxil].x=2200;
skala[licznik].stan=0;
}


 if(skala[licznik].x<=nabojeII[auxil].x&&skala[licznik].x+skala[licznik].width>=nabojeII[auxil].x&&skala[licznik].y<=nabojeII[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeII[auxil].y&&licznik!=2&&wskII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeII[auxil].y=1200;
nabojeII[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=nabojeII[auxil].x&&skala[licznik].x<=nabojeII[auxil].x+3&&skala[licznik].y<=nabojeII[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeII[auxil].y&&licznik!=0&&wskII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeII[auxil].y=1200;
nabojeII[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=nabojeII[auxil].x&&skala[licznik].x<=nabojeII[auxil].x+3&&skala[licznik].y>=nabojeII[auxil].y&&skala[licznik].y<=nabojeII[auxil].y+3&&licznik!=0&&wskII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeII[auxil].y=1200;
nabojeII[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x<=nabojeII[auxil].x&&skala[licznik].x>=nabojeII[auxil].x&&skala[licznik].y>=nabojeII[auxil].y&&skala[licznik].y<=nabojeII[auxil].y+3&&licznik!=0&&wskII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeII[auxil].y=1200;
nabojeII[auxil].x=2200;
skala[licznik].stan=0;
}


 if(skala[licznik].x<=nabojeIII[auxil].x&&skala[licznik].x+skala[licznik].width>=nabojeIII[auxil].x&&skala[licznik].y<=nabojeIII[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeIII[auxil].y&&licznik!=3&&wskIII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIII[auxil].y=1200;
nabojeIII[auxil].x=2200;
skala[licznik].stan=0;
}
else if(skala[licznik].x>=nabojeIII[auxil].x&&skala[licznik].x<=nabojeIII[auxil].x+3&&skala[licznik].y<=nabojeIII[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeIII[auxil].y&&licznik!=0&&wskIII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIII[auxil].y=1200;
nabojeII[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=nabojeIII[auxil].x&&skala[licznik].x<=nabojeIII[auxil].x+3&&skala[licznik].y>=nabojeIII[auxil].y&&skala[licznik].y<=nabojeIII[auxil].y+3&&licznik!=0&&wskIII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIII[auxil].y=1200;
nabojeIII[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x<=nabojeIII[auxil].x&&skala[licznik].x>=nabojeIII[auxil].x&&skala[licznik].y>=nabojeIII[auxil].y&&skala[licznik].y<=nabojeIII[auxil].y+3&&licznik!=0&&wskIII[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIII[auxil].y=1200;
nabojeIII[auxil].x=2200;
skala[licznik].stan=0;
}

 if(skala[licznik].x<nabojeIV[auxil].x&&skala[licznik].x+skala[licznik].width>nabojeIV[auxil].x&&skala[licznik].y<nabojeIV[auxil].y&&skala[licznik].y+skala[licznik].height>nabojeIV[auxil].y&&licznik!=4&&wskIV[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
skala[licznik].stan=0;
nabojeIV[auxil].y=1200;
nabojeIV[auxil].x=2200;}

else if(skala[licznik].x>=nabojeIV[auxil].x&&skala[licznik].x<=nabojeIV[auxil].x+3&&skala[licznik].y<=nabojeIV[auxil].y&&skala[licznik].y+skala[licznik].height>=nabojeIV[auxil].y&&licznik!=0&&wskIV[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIV[auxil].y=1200;
nabojeIV[auxil].x=2200;
skala[licznik].stan=0;
}

else if(skala[licznik].x>=nabojeIV[auxil].x&&skala[licznik].x<=nabojeIV[auxil].x+3&&skala[licznik].y>=nabojeIV[auxil].y&&skala[licznik].y<=nabojeIV[auxil].y+3&&licznik!=0&&wskIV[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIV[auxil].y=1200;
nabojeIV[auxil].x=2200;
skala[licznik].stan=0;}

else if(skala[licznik].x<=nabojeIV[auxil].x&&skala[licznik].x>=nabojeIV[auxil].x&&skala[licznik].y>=nabojeIV[auxil].y&&skala[licznik].y<=nabojeIV[auxil].y+3&&licznik!=0&&wskIV[auxil]!=0&&licznik!=601)
{skala[licznik].y=1200;
skala[licznik].x=2200;
nabojeIV[auxil].y=1200;
nabojeIV[auxil].x=2200;
skala[licznik].stan=0;}

return skala[licznik],naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil];}

function szczelać()
{if(kir[licznik]==1&&przełd[licznik]==110){
if(APV[licznik].x<APV[0].x&&lufa[licznik].y<APV[0].y&&lufa[licznik].y+lufa[licznik].h>APV[0].y)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}	}
else if(APV[licznik].x<APV[0].x&&lufa[licznik].y>APV[0].y&&lufa[licznik].y<APV[0].y+APV[0].h)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1&&przełd[licznik]==110;}}
else if(licznik==2){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}
}
else if(kir[licznik]==2){
if(APV[licznik].x>APV[0].x&&lufa[licznik].y<APV[0].y&&lufa[licznik].y+lufa[licznik].h>APV[0].y&&przełd[licznik]==110)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}
else if(APV[licznik].x>APV[0].x&&lufa[licznik].y>APV[0].y&&lufa[licznik].y<APV[0].y+APV[0].h)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}	
}
else if(kir[licznik]==3&&przełd[licznik]==110){
if(APV[licznik].y&&APV[0].y&&lufa[licznik].x<APV[0].x&&lufa[licznik].x+lufa[licznik].w>APV[0].x)
{przełd[licznik]=0;
if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}
else if(APV[licznik].x&&APV[0].x&&lufa[licznik].x>APV[0].x&&lufa[licznik].x<APV[0].x+APV[0].w)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}
}
else if(kir[licznik]==4&&przełd[licznik]==110)
{if(APV[licznik].y&&APV[0].y&&lufa[licznik].x<APV[0].x&&lufa[licznik].x+lufa[licznik].w>APV[0].x)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}
else if(APV[licznik].x&&APV[0].x&&lufa[licznik].x>APV[0].x&&lufa[licznik].x<APV[0].x+APV[0].w)
{if(licznik==1&&przełd[licznik]==110){wskI[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==2&&przełd[licznik]==110){wskII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==3&&przełd[licznik]==110){wskIII[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
else if(licznik==4&&przełd[licznik]==110){wskIV[spraw[licznik]]=kir[licznik];
przełd[licznik]=0;
if(spraw[licznik]<=50)
{spraw[licznik]+=1;}}
}
}

return naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil],przełd[licznik];}



function odnowa()
{
obszar=document.getElementById('obszar');
pole=obszar.getContext('2d');
pole.clearRect(0,0,obszar.width,obszar.height);
window.requestAnimationFrame(odnowa);

licznik=0;
if(przełd[0]!=110)
{przełd[0]+=1;}
//wajcha(APV[0],poz[0],przełd[0],kir[0]);
while(licznik!=5)
{auxil=0;
if(przełd[licznik]!=110)
{przełd[licznik]+=1;}

auxil=0;
granice(APV[licznik]);
maluj(APV[licznik]);
podwozie(gasien[licznik],gasien[licznik+5]);
falkonet(lufa[licznik]);
auxil=0;
while(auxil!=50)
{trafienie(APV[licznik],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil]);
if(auxil<5&&auxil>=0){
kolizje(APV[licznik],kir[licznik],poz[licznik],APV[auxil]);}
if(licznik>0){szczelać(wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil],przełd[licznik],APV[licznik]);}
auxil+=1;}
if(licznik>0){ruch(APV[licznik],poz[licznik]);}
licznik+=1;}
auxil=0;
while(auxil!=50)
{licznik=0;
pozycja(naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil]);
kule(naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil]);
auxil+=1;}
auxil=0;
licznik=0;

while(auxil!=50)
{licznik=0;
while(licznik!=600){
anihilacja(naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],skala[licznik],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil]);
if(auxil>=0&&auxil<=4){klang(APV[auxil],kir[auxil]);}
else if(auxil==49){cement(skala[licznik]);}
licznik+=1;}	
licznik=601;
anihilacja(naboje[auxil],nabojeI[auxil],nabojeII[auxil],nabojeIII[auxil],nabojeIV[auxil],skala[licznik],wsk[auxil],wskI[auxil],wskII[auxil],wskIII[auxil],wskIV[auxil]);
auxil+=1;}


i.innerHTML=przełd[0];
ii.innerHTML=przełd[1];
iii.innerHTML=przełd[2];
iv.innerHTML=przełd[3];
v.innerHTML=przełd[4];
auxil=0;
return pole,obszar,auxil;}
odnowa(pole,obszar);
