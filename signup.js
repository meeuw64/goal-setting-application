let startTime = new Date();
let keyCount = 0;
let mouseClickCount = 0;
let isVisible = true;
let timeSpentHour = 0;
let timeSpentMin = 0;
let timeSpentS = 0;
let timeSpentMs = 0;



// function that gets called when someone types in a text/number field
// and tracks the total number of characters currently on the screen
function trackCharacterCount(){
    // we retrieve all number/text fields so we update accurately each time a change has been made to one 
    // of these fields 
    let allInput = document.querySelectorAll("input[type='text'],input[type='number']");
    // reset the counter because we count every single field again in the foreach loop
    let totalCharacterCount = 0;

    // we go through all of our input fields and retrieve their character length
    // we finish by adding that number to the counter
    allInput.forEach(input => {
        totalCharacterCount += input.value.length;
    });
    // update the text field
    characterCount.innerText = totalCharacterCount;
}

// function for toggling the visibility of the info
function toggleVisible(){

    // toggle logic to hide and show the hidden div
    if(isVisible){
        // hide
        document.getElementById("TemplateDiv").style.display = "none";
        isVisible = false;
    }else{
        // show
        document.getElementById("TemplateDiv").style.display = "block";
        isVisible = true;
    }
}

// function that gets called when the mouse button is clicked
document.addEventListener("click", () => {
    // adds 1 to the counter and updates the text
    mouseClickCount++;
    clickCount.innerText = mouseClickCount;
});

// function that gets called when a key board button is pressed 
document.addEventListener("keydown", () => {
    // adds 1 to the counter and update the text
    keyCount++;
    keyPressCount.innerText = keyCount;
});


setInterval(trackTime, 1)

function trackTime(){    
    let endTime = new Date();
    // calculates the raw time spent on the page in ms 
    timeSpentMs = endTime - startTime;

    // calculates the time spent in s mod 60 
    timeSpentS = Math.floor(timeSpentMs/1000)%60;

    // calculates the time spent in min mod 60
    timeSpentMin = Math.floor(timeSpentMs/1000/60)%60;

    // calculates the time spent in hours,
    // we assume that they don't take more than 
    // a whole day, so no mod 
    timeSpentHour = Math.floor(timeSpentMs/1000/60/60);

    // puts everything together in a neat string and updates the text
    timeCount.innerText = timeSpentHour + ' Hours ' + timeSpentMin + ' Minutes ' + timeSpentS + ' Seconds ';
}
