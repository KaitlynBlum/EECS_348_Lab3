function next(){
    picture_index= (picture_index+1)%5
    var picture_url = 'pictures/${picture_index}.jpeg'
    document.getElementById("picture").src = picture_url
}

function changeParagraphColor(){
    var borderR = document.getElementById("borderR").value;
    var borderG = document.getElementById("borderG").value;
    var borderB = document.getElementById("borderB").value;
    var borderWidth = document.getElementById("borderWidth").value;
    var backgroundR = document.getElementById("backgroundR").value;
    var backgroundG = document.getElementById("backgroundG").value;
    var backgroundB = document.getElementById("backgroundB").value;

    var tag = document.getElementById("paragraph");
     tag.style.border = borderWidth + "px solid rgb(" + borderR + "," + borderG + "," + borderB + ")";

    // Background
    tag.style.backgroundColor = "rgb(" + backgroundR + "," + backgroundG + "," + backgroundB + ")";
}