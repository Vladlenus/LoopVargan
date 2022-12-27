
  
   g=1
   g2=1
   g3=1
   g4=1
   g5=1
   x=1
   x2=0
   x3=1
   x4=1
   x5=1

function play1(){
    console.log(11111)    
    var audio1 = new Audio()
    audio1.src = 's/5.wav';
    audio1.currentTime = 0;
    audio1.play();   
}
function play2(){
    console.log(22222)    
    var audio1 = new Audio()
    audio1.src = 's/4.wav';
    audio1.currentTime = 0;
    audio1.play();   
}
function play3(){
    console.log(33333)    
    var audio1 = new Audio()
    audio1.src = 's/3.wav';
    audio1.currentTime = 0;
    audio1.play();   
}
function play4(){
    console.log(44444)    
    var audio1 = new Audio()
    audio1.src = 's/2.wav';
    audio1.currentTime = 0;
    audio1.play();   
}
function play5(){
    console.log(11111)    
    var audio1 = new Audio()
    audio1.src = 's/1.wav';
    audio1.currentTime = 0;
    audio1.play();   
}


function timeout() {
    setTimeout(
function clock2(){
    
    x=x+0.5
    if (x>3){g=-1}
    else{g =1}
    x2=x2+1
    if (x2>3){g2=-1}
    else{g2=1}
    x3=x3+2
    if (x3>3){g3=-1}
    else{g3=1}
    x4=x4+2.5
    if (x4>3){g4=-1}
    else{g4 =1}
    x5=x5+3
    if (x5>3){g5=-1}
    else{g5 =1}
    

    var ctx = document.getElementById('cnvs2').getContext('2d');
    ctx.save();
    ctx.clearRect(0,0,150,150);
    ctx.translate(75,75);
    ctx.scale(0.4,0.4);
    ctx.rotate(-Math.PI/2);
    ctx.fillStyle = "black";


    //write min
    ctx.save();
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(133,0);
    ctx.stroke();
    ctx.restore();


//write min1
    ctx.save();
    ctx.rotate( g2*x2*Math.PI/90)
    ctx.strokeStyle = "#D825DE";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(103,0);
    ctx.stroke();
    ctx.restore();
//write min 2
    ctx.save();
    ctx.rotate( g3*x3*Math.PI/90)
    ctx.strokeStyle = "#3EDE25";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(93,0);
    ctx.stroke();
    ctx.restore();
//write min 3
    ctx.save();
    ctx.rotate( g4*x4*Math.PI/90)
    ctx.strokeStyle = "#39E1D0";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(63,0);
    ctx.stroke();
    ctx.restore();
//write min4
ctx.save();
ctx.rotate( g5*x5*Math.PI/90)
ctx.strokeStyle = "#3955E1";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(43,0);
ctx.stroke();
ctx.restore();

// Write seconds 5
    ctx.save();
    ctx.rotate((g*x+180)*Math.PI/90);
    ctx.strokeStyle = "#E13955";

    //line 
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(113,0);
    ctx.stroke();

    //mini ring
   
    ctx.fill();
    ctx.restore();

//circle
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0,0,142,0,Math.PI*2,true);
    ctx.stroke();
  
    ctx.restore();
    console.log(x5) 

    if (x==0){play1() }
    if (x2==0){play2() }
    if (x3==1){play3() }
    if (x4==-1){play4() }
    if (x4==1){play4() }
    if (x5==1){play5() }
    if (x5==-1){play5() }
    if (x>180){
        x=-1*x   
        play1()  
    }
    if (x2>180){
        x2=-1*x2
        play2() 
    }
    if (x3>180){
        x3=-1*x3
        play3() 
    }
    if (x4>180){
        x4=-1*x4
        play4()  
    }
    if (x5>180){
        x5=-1*x5
        play5()  
    }
    timeout();
}, 20);
}
timeout()





    

   


