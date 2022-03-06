/* Masthan Swamy */
var maxRecords = 100;
var start = 1;
var threshold = 12;

document.getElementById("body").onload = htmlLoaded();

function htmlLoaded(){
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    next.onclick = nextPage;
    prev.onclick = prevPage;

    // Display Initial Records
    displayRecords();
}

function displayRecords(){
    let str = "";
    for(let i=0; i<threshold; i++){
        if((start + i) <= maxRecords)
            str = str + ( start + i ) + "\n";
        else
            break;
    }

    document.getElementById("data").innerHTML = str;
    checkButtonStatus();
}

function checkButtonStatus(){
    if((start+threshold)>maxRecords)
        next.disabled = true;
    else
        next.disabled = false;


    if((start-threshold)<1)
        prev.disabled = true;
    else
        prev.disabled = false;
}

function nextPage(){
    start += threshold;
    displayRecords();
}

function prevPage(){
    start -= threshold;
    displayRecords();
}