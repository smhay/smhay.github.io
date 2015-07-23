{
frameRate(25);
var x = 220;
var winX = 10;
var winY = 62;
var winston = getImage("https://www.khanacademy.org/computer-programming/winston/823977317/23001.png");
var winstons = 0;
var alltimewinstons = 0;
var wps = 0;
var i1 = false;
var i2 = false;
var i3 = false;
var i4 = false;
var i5 = false;
var i6 = false;
var i7 = false;
var i8 = false;
var i9 = false;
var i10 = false;
var i1Y = 0;
var i2Y = 40;
var i3Y = 80;
var i4Y = 120;
var i5Y = 160;
var i6Y = 200;
var i7Y = 240;
var i8Y = 280;
var i9Y = 320;
var i10Y = 360;
var i1price = 15;
var i2price = 100;
var i3price = 500;
var i4price = 3000;
var i5price = 10000;
var i6price = 40000;
var i7price = 200000;
var i8price = 1667000;
var i9price = 123456789;
var i10price = 4000000000;
var numi1 = 0;
var numi2 = 0;
var numi3 = 0;
var numi4 = 0;
var numi5 = 0;
var numi6 = 0;
var numi7 = 0;
var numi8 = 0;
var numi9 = 0;
var numi10 = 0;
var vwps = 0;
}

fill(255, 0, 0);

var item1 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i1Y && mouseY < i1Y + 40 && winstons >= floor(i1price)) {
       fill(0, 0, 255);
       rect(x, i1Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Variable", x + 5, i1Y + 15);
       text("Cost: "+ floor(i1price)+" Winstons", x + 5, i1Y + 30);
       i1=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i1Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Variable", x + 5, i1Y + 15);
       text("Cost: "+floor(i1price)+" Winstons", x + 5, i1Y + 30);
   }
   fill(255, 0, 0);
};
var item2 = function() {
   if(mouseX > x && mouseX < 400 && mouseY > i2Y && mouseY < i2Y + 40 && winstons >= floor(i2price)) {
       fill(0, 0, 255);
       rect(x, i2Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Math.Winston", x + 5, i2Y + 15);
       text("Cost: "+ floor(i2price) + " Winstons", x + 5, i2Y + 30);
       i2=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i2Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Math.Winston", x + 5, i2Y + 15);
       text("Cost: "+ floor(i2price) +" Winstons", x + 5 , i2Y + 30);
   }
   fill(255, 0, 0);
};
var item3 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i3Y && mouseY < i3Y + 40 && winstons >= floor(i3price)) {
       fill(0, 0, 255);
       rect(x, i3Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Function", x + 5, i3Y + 15);
       text("Cost: "+ floor(i3price)+" Winstons", x + 5, i3Y + 30);
       i3=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i3Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Function  ", x + 5, i3Y + 15);
       text("Cost: "+floor(i3price)+" Winstons", x + 5, i3Y + 30);
   }
   fill(255, 0, 0);
};
var item4 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i4Y && mouseY < i4Y + 40 && winstons >= floor(i4price)) {
       fill(0, 0, 255);
       rect(x, i4Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Stuffed Winston Factory", x + 5, i4Y + 15);
       text("Cost: "+ floor(i4price)+" Winstons", x + 5, i4Y + 30);
       i4=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i4Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Stuffed Winston Factory", x + 5, i4Y + 15);
       text("Cost: "+floor(i4price)+" Winstons", x + 5, i4Y + 30);
   }
   fill(255, 0, 0);
};
var item5 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i5Y && mouseY < i5Y + 40 && winstons >= floor(i5price)) {
       fill(0, 0, 255);
       rect(x, i5Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Costume Editor", x + 5, i5Y + 15);
       text("Cost: "+ floor(i5price)+" Winstons", x + 5, i5Y + 30);
       i5=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i5Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Costume Editor", x + 5, i5Y + 15);
       text("Cost: "+floor(i5price)+" Winstons", x + 5, i5Y + 30);
   }
   fill(255, 0, 0);
};
var item6 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i6Y && mouseY < i6Y + 40 && winstons >= floor(i6price)) {
       fill(0, 0, 255);
       rect(x, i6Y, 400 - x, 40);
       fill(0, 0, 0);
       text("WINSTONS IN SPACE!!!!", x + 5, i6Y + 15);
       text("Cost: "+ floor(i6price)+" Winstons", x + 5, i6Y + 30);
       i6=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i6Y, 400 - x, 40);
       fill(0, 0, 0);
       text("WINSTONS IN SPACE!!!!", x + 5, i6Y + 15);
       text("Cost: "+floor(i6price)+" Winstons", x + 5, i6Y + 30);
   }
   fill(255, 0, 0);
};
var item6 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i6Y && mouseY < i6Y + 40 && winstons >= floor(i6price)) {
       fill(0, 0, 255);
       rect(x, i6Y, 400 - x, 40);
       fill(0, 0, 0);
       text("WINSTONS IN SPACE!!!!", x + 5, i6Y + 15);
       text("Cost: "+ floor(i6price)+" Winstons", x + 5, i6Y + 30);
       i6=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i6Y, 400 - x, 40);
       fill(0, 0, 0);
       text("WINSTONS IN SPACE!!!!", x + 5, i6Y + 15);
       text("Cost: "+floor(i6price)+" Winstons", x + 5, i6Y + 30);
   }
   fill(255, 0, 0);
};
var item7 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i7Y && mouseY < i7Y + 40 && winstons >= floor(i7price)) {
       fill(0, 0, 255);
       rect(x, i7Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Duplication", x + 5, i7Y + 15);
       text("Cost: "+ floor(i7price)+" Winstons", x + 5, i7Y + 30);
       i7=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i7Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Duplication", x + 5, i7Y + 15);
       text("Cost: "+floor(i7price)+" Winstons", x + 5, i7Y + 30);
   }
   fill(255, 0, 0);
};
var item8 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i8Y && mouseY < i8Y + 40 && winstons >= floor(i8price)) {
       fill(0, 0, 255);
       rect(x, i8Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Dimension", x + 5, i8Y + 15);
       text("Cost: "+ floor(i8price)+" Winstons", x + 5, i8Y + 30);
       i8=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i8Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Winston Dimension", x + 5, i8Y + 15);
       text("Cost: "+floor(i8price)+" Winstons", x + 5, i8Y + 30);
   }
   fill(255, 0, 0);
};
var item9 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i9Y && mouseY < i9Y + 40 && winstons >= floor(i9price)) {
       fill(0, 0, 255);
       rect(x, i9Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Time Machine", x + 5, i9Y + 15);
       text("Cost: "+ floor(i9price)+" Winstons", x + 5, i9Y + 30);
       i9=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i9Y, 400 - x, 40);
       fill(0, 0, 0);
       text("Time Machine", x + 5, i9Y + 15);
       text("Cost: "+floor(i9price)+" Winstons", x + 5, i9Y + 30);
   }
   fill(255, 0, 0);
};
var item10 = function() {

   if(mouseX > x && mouseX < 400 && mouseY > i10Y && mouseY < i10Y + 40 && winstons >= floor(i10price)) {
       fill(0, 0, 255);
       rect(x, i10Y, 400 - x, 40);
       fill(0, 0, 0);
       text("The Winston Scepter", x + 5, i10Y + 15);
       text("Cost: "+ floor(i10price)+" Winstons", x + 5, i10Y + 30);
       i10=true;
       
   }
   else {
       fill(255, 0, 0);
       rect(x, i10Y, 400 - x, 40);
       fill(0, 0, 0);
       text("The Winston Scepter", x + 5, i10Y + 15);
       text("Cost: "+floor(i10price)+" Winstons", x + 5, i10Y + 30);
   }
   fill(255, 0, 0);
};

var drawItems = function() {
   item1();
   item2();
   item3();
   item4();
   item5();
   item6();
   item7();
   item8();
   item9();
   item10();
};

var mouseClicked = function() {
   if(mouseX > winX && mouseX < winX + 200 && mouseY > winY && mouseY < winY + 200) {
       winstons++;
       alltimewinstons++;
       text(floor(winstons) + " Winstons", winX + 30, winY - 10);
   }
   if(i1) {
       i1=false;
       wps+=0.005;
       winstons-=floor(i1price);
       i1price *= 1.15;
       vwps += 0.1;
   }
   if(i2) {
       i2 = false;
       wps+=0.025;
       winstons-=floor(i2price);
       i2price *= 1.15;
       vwps += 0.5;
   }
   if(i3) {
       i3 = false;
       wps+=0.2;
       winstons-=floor(i3price);
       i3price*=1.15;
       vwps += 4;
   }
   if(i4) {
       i4 = false;
       wps += 0.5;
       winstons-=floor(i4price);
       i4price*=1.15;
       vwps += 10;
   }
   if(i5) {
       i5 = false;
       wps += 2;
       winstons-=floor(i5price);
       i5price*=1.15;
       vwps +=40;
   }
   if(i6) {
       i6 = false;
       wps += 5;
       winstons-=floor(i6price);
       i6price*=1.15;
       vwps +=100;
   }
   if(i7) {
       i7 = false;
       wps += 20;
       winstons-=floor(i7price);
       i7price*=1.15;
       vwps +=400;
   }
   if(i8) {
       i8 = false;
       wps += 333.3;
       winstons-=floor(i8price);
       i8price*=1.15;
       vwps +=6666;
   }
   if(i9) {
       i9 = false;
       wps += 4938.25;
       winstons-=floor(i9price);
       i9price*=1.15;
       vwps +=98765;
   }
   if(i10) {
       i10=false;
       wps+=49999.95;
       winstons-=floor(i10price);
       i10price *= 1.15;
       vwps += 999999;
   }
};

mousePressed = function() {
   if(mouseX > winX && mouseX < winX + 200 && mouseY > winY && mouseY < winY + 200) {
       background(255, 255, 255);
       text(floor(winstons) + " Winstons", winX + 30, winY - 10);
       text("All time Winstons: " + floor(alltimewinstons), 10, 20);
       image(winston, winX, winY, 180, 180);
       text("Winstons Per Second: " + vwps.toFixed(1), 10, 35);
       noStroke();
       fill(255, 255, 255);
       
       stroke(0, 0, 0);
       drawItems();
   }
};

mouseReleased = function() {
   background(255, 255, 255);
   text(floor(winstons) + " Winstons", winX + 30, winY - 10);
   
   image(winston, winX, winY, 200, 200);
   text(floor(winstons) + " Winstons", winX + 30, winY - 10);
   text("All time Winstons: " + floor(alltimewinstons), 10, 20);
   text("Winstons Per Second: " + vwps.toFixed(1), 10, 35);
   noStroke();
   fill(255, 255, 255);
   
   stroke(0, 0, 0);
   drawItems();

   
};

var draw = function() {
   background(255, 255, 255);
   if(mouseIsPressed === true && mouseX > winX && mouseX < winX + 200 && mouseY > winY && mouseY < winY + 200) {
       image(winston, winX, winY, 180, 180);
   }
   else {
       image(winston, winX, winY, 200, 200);
   }
   text(floor(winstons) + " Winstons" , winX + 30, winY - 10);
   text("All time Winstons: " + floor(alltimewinstons), 10, 20);
   text("Winstons Per Second: " + vwps.toFixed(1), 10, 35);
   noStroke();
   fill(255, 255, 255);
   
   stroke(0, 0, 0);
   drawItems();
   winstons += wps;
   alltimewinstons += wps;
   text("Winston Variables: " + numi1, 10, 280);
   text("Math.Winstons: " + numi2, 10, 292);
   text("Winston Functions: " + numi1, 10, 304);
   text("Stuffed Winston Factories: " + numi1, 10, 316);
   text("Costume Editors: " + numi1, 10, 328);
   text("WINSTONS IN SPACE!!!!!!!!!!!!!!!!: " + numi1, 10, 340);
   text("Duplicators: " + numi1, 10, 352);
   text("Dimensions: " + numi1, 10, 364);
   text("Time Machines: " + numi1, 10, 376);
   text("Winstons Scepter: " + numi1, 10, 388);
};

