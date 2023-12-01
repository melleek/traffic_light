
let light = document.querySelectorAll('.light');
let cArrays = ["red", "yellow", "green"]
let i = 0;
let n = 5;

function trafficLight () {
    for (let j = 0; j < light.length; j++) {
        light[j].style.background = "black";
        light[j].innerHTML = "";
    }
    light[i].style.background = cArrays[i]
   
    if(i < light.length) {
        if (n >= 0){
            light[i].innerHTML = n;
            n--; 
        }
        if (n == 0) {
            i++; 
            n=5; 
            if (i == 3) {
                i = 0;
            }
         }
    }
}
setInterval(trafficLight, 1000);
