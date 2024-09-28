var hour=0;
var minutes=0;
var seconds=0;
var counter=0;
 
var timer=false;
  function start(){
    timer=true
    stopwatch()
  }
  function stop(){
    timer=false
  }
  function restart(){
    timer=false
  }
  document.getElementById("hr").innerHTML  = "00"; 
  document.getElementById("min").innerHTML  = "00"; 
  document.getElementById("sec").innerHTML  = "00"; 
  document.getElementById("count").innerHTML  = "00"; 

  function stopwatch(){
    if(timer==true){
        counter++
        setTimeout(stopwatch,10)
        document.getElementById("count").innerHTML=counter;
    }
if(counter==100){
    seconds++
    document.getElementById("sec").innerHTML=seconds
    counter=0
}
if(seconds==60){
    minutes++
    document.getElementById("min").innerHTML=minutes
    seconds=0
}
if( minutes==60){
    hour++
    document.getElementById("hr").innerHTML=hour
    minutes=0
}
if(hour<10){
    document.getElementById("hr").innerHTML= "0"+  hour
}
if(minutes<10){
    document.getElementById("min").innerHTML= "0"+  minutes
}
if(seconds<10){
    document.getElementById("sec").innerHTML= "0"+  seconds
}
  }