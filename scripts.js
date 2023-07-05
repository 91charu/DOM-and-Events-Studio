// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    console.log('window loaded');

    let upButton=document.getElementById("up");
    upButton.addEventListener("click",function(event){
        console.log("up button clicked");
    });

    let downButton=document.getElementById("down");
    downButton.addEventListener("click",function(event){
        console.log("down button clicked");
    });

    let rightButton=document.getElementById("right");
    rightButton.addEventListener("click",function(event){
        console.log("right button clicked");
    });

    let leftButton=document.getElementById("left");
    leftButton.addEventListener("click",function(event){
        console.log("left button clicked");
    });

    let takeoffButton=document.getElementById("takeoff");
    takeoffButton.addEventListener("click",function(event){
        console.log("takeoff button clicked");
    });

    let landingButton=document.getElementById("landing");
    landingButton.addEventListener("click",function(event){
        console.log("landing button clicked");
    });

    let missionabortButton=document.getElementById("missionAbort");
    missionabortButton.addEventListener("click",function(event){
        console.log("mission abort button clicked");
    });
});