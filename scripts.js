// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    console.log('window loaded');

    //let rocket = document.getElementById("rocket");
    let rocketPosition=document.getElementById("rocket");
    rocketPosition.style.position = 'relative';
    rocketPosition.style.left = '0px';
    rocketPosition.style.top = '0px';
    function leftMove() {
        //let rocket = document.getElementById("rocket");
        //rocket.style.position = 'relative';
        //rocket.style.left = '0px';
        //rocket.style.top = '0px';
        let currentLeft = parseInt(rocket.style.left);
        rocket.style.left = currentLeft - 10 +"px";
        console.log("left button clicked");
    }
    let leftButton=document.getElementById("left");
    leftButton.addEventListener("click",leftMove);
        //console.log("up button clicked");
    
        //let rocket = document.getElementById("rocket");
        function rightMove() {
            //let rocket = document.getElementById("rocket");
            //rocket.style.position = 'relative';
            //rocket.style.left = '0px';
           //rocket.style.top = '0px';
            let currentRight = parseInt(rocket.style.left);
            rocket.style.left = currentRight + 10 +"px";
           
            console.log("right button clicked");
        }
    let rightButton=document.getElementById("right");
    rightButton.addEventListener("click",rightMove);
        //console.log("down button clicked");
    

    let upButton=document.getElementById("up");
    upButton.addEventListener("click",function(event){
        let currentUp=parseInt(rocket.style.top);
        rocket.style.top = currentUp - 10 +"px";
        let currentHeight = parseInt(spaceShuttleHeight.textContent);
        let newHeight = currentHeight + 10000;
        spaceShuttleHeight.textContent = newHeight;
        console.log("up button clicked");
    });

    let downButton=document.getElementById("down");
    downButton.addEventListener("click",function(event){
        let currentDown=parseInt(rocket.style.top);
        rocket.style.top = currentDown + 10 +"px";
        let currentHeight = parseInt(spaceShuttleHeight.textContent);
        let newHeight = currentHeight - 10000;
        spaceShuttleHeight.textContent = newHeight;
        console.log("down button clicked");
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
        window.alert("The shuttle is landing. Landing gear engaged.")
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


