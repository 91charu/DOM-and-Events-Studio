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
        //console.log("takeoff button clicked");
        if(window.confirm("Confirm that the shuttle is ready for takeoff?"))
        {
            document.getElementById("flightStatus").textContent="Shuttle in flight.";
            console.log("Shuttle in flight.");
            document.getElementById("shuttleBackground").style.backgroundColor="blue";
            //document.getElementById("spaceShuttleHeight");
            let currentHeight = parseInt(spaceShuttleHeight.textContent);
            let newHeight = currentHeight + 10000;
            spaceShuttleHeight.textContent = newHeight;
        }
    });

    let landingButton=document.getElementById("landing");
    landingButton.addEventListener("click",function(event){
        //console.log("landing button clicked");
        if(window.confirm("The shuttle is landing. Landing gear engaged."))
        {
            document.getElementById("flightStatus").textContent="The shuttle has landed.";
            console.log("The shuttle has landed.");
            document.getElementById("shuttleBackground").style.backgroundColor="green";
            //document.getElementById("spaceShuttleHeight");
            let currentHeight = parseInt(spaceShuttleHeight.textContent);
            let newHeight = 0;
            spaceShuttleHeight.textContent = newHeight;
        }
    });

    let missionabortButton=document.getElementById("missionAbort");
    missionabortButton.addEventListener("click",function(event){
        //console.log("mission abort button clicked");
        if(window.confirm("Confirm that you want to abort the mission."))
        {
            document.getElementById("flightStatus").textContent="Mission aborted.";
            console.log("Mission aborted.");
            document.getElementById("shuttleBackground").style.backgroundColor="green";
            //document.getElementById("spaceShuttleHeight");
            let currentHeight = parseInt(spaceShuttleHeight.textContent);
            let newHeight = 0;
            spaceShuttleHeight.textContent = newHeight;
        }
    });

    
});

