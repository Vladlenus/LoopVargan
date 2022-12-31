





g=g2=g3=g4=g5=g6=g7=g8=1
x=x2=x3=x4=x5=x6=x7=x8=1


function gbl(){

    function play1(){ 
        var audio1 = new Audio()
        audio1.src = 's/0.wav';
        audio1.play();   
    }
    function play2(){ 
        var audio1 = new Audio()
        audio1.src = 's/1.wav';
        audio1.play();   
    }
    function play3(){ 
        var audio1 = new Audio()
        audio1.src = 's/2.wav';
        audio1.play();   
    }
    function play4(){ 
        var audio1 = new Audio()
        audio1.src = 's/3.wav';
        audio1.play();   
    }
    function play5(){ 
        var audio1 = new Audio()
        audio1.src = 's/4.wav';
        audio1.play();   
    }
    function play6(){ 
        var audio1 = new Audio()
        audio1.src = 's/5.wav';
        audio1.play();   
    }
    function play7(){ 
        var audio1 = new Audio()
        audio1.src = 's/6.wav';
        audio1.play();   
    }
    function play8(){ 
        var audio1 = new Audio()
        audio1.src = 's/7.wav';
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
 x3=x3+1.5
 if (x3>3){g3=-1}
 else{g3=1}
 x4=x4+2
 if (x4>3){g4=-1}
 else{g4 =1}
 x5=x5+2.5
 if (x5>3){g5=-1}
 else{g5 =1}

 x6=x6+3
 if (x6>3){g6=-1}
 else{g6 =1}
 x7=x7+4
 if (x7>3){g7=-1}
 else{g7 =1}
 x8=x8+5
 if (x8>3){g8=-1}
 else{g8=1}
 

 var ctx = document.getElementById('cnvs2').getContext('2d');
 ctx.save();
 ctx.clearRect(0,0,150,150);
 ctx.translate(75,75);
 ctx.scale(0.4,0.4);
 ctx.rotate(-Math.PI/2);
 ctx.fillStyle = "black";


 //write line black
 ctx.save();
 ctx.lineWidth = 3;
 ctx.beginPath();
 ctx.moveTo(0,0);
 ctx.lineTo(133,0);
 ctx.stroke();
 ctx.restore();

arr=[x,x2,x3,x4,x5,x6,x7,x8]
arr2=[g,g2,g3,g4,g5,g6,g7,g8]
arr3=[114,103,93,83,73,63,53,43]
arr4=['#FF0000','#FF8C00','#FFD700','#7FFF00','#00FF7F','#00BFFF','#0000FF','#8B008B']

// Write seconds 1
for(i=0;i<8;i++){
    ctx.save();
    ctx.rotate((arr2[i]*arr[i]+180)*Math.PI/90);
    ctx.strokeStyle = arr4[i];
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(arr3[i],0);
    ctx.stroke();
    ctx.fill();
    ctx.restore();    
}

//circle
 ctx.beginPath();
 ctx.lineWidth = 5;
 ctx.strokeStyle = 'black';
 ctx.arc(0,0,142,0,Math.PI*2,true);
 ctx.stroke();
 ctx.restore();

    if (x  >= -1 && x  <= 1){x=1; play1() }
    if (x2 >= -1 && x2 <= 1){x2=1;play2() }
    if (x3 >= -1 && x3 <= 1){x3=1;play3() }
    if (x4 >= -1 && x4 <= 1){x4=1;play4() }
    if (x5 >= -1 && x5 <= 1){x5=1;play5() }
    if (x6 >= -1 && x6 <= 1){x6=1;play6() }
    if (x7 >= -1 && x7 <= 1){x7=1;play7() }
    if (x8 >= -1 && x8 <= 1){x8=1;play8(); console.log(x8)}



if (x>180){
    x=-1*x        
    play1()
    console.log(x)
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
if (x6>180){
    x6=-1*x6
    play6()

}
if (x7>180){
   x7=-1*x7
   play7()
}
if (x8>180){
    x8=-1*x8
    play8()
 }
 
 timeout();
}, 30);
}
timeout()
}

document.getElementById('btn').onclick=  gbl


