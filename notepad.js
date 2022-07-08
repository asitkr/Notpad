
// For change fonts family
function changeFont(font){
    document.getElementById("content").style.fontFamily = font.value;
}

//for change font size
function changeSize(size){
    var si = document.getElementById("content");
    si.style.fontSize = size.value + 'px';
}

//for bold button
function changeBold(){
    var bol = document.getElementById("content").style.fontWeight;

    if(bol == 'normal'){
        document.getElementById("content").style.fontWeight = 'bold';
    }
    else{
        document.getElementById("content").style.fontWeight = 'normal';
    }
}

//for Italic button
function changeItalic(){
    var ita = document.getElementById("content").style.fontStyle;

    if(ita == 'normal'){
        document.getElementById("content").style.fontStyle = 'italic';
    }
    else{
        document.getElementById("content").style.fontStyle = 'normal';
    }
}

//for underline button
function changeUnderline(){
    var under = document.getElementById("content").style.textDecoration;

    if(under !== 'underline'){
        document.getElementById("content").style.textDecoration = 'underline';
    }
    else{
        document.getElementById("content").style.textDecoration = 'none';
    }
}

//for reset button
function reset(){
    document.getElementById("content").style.fontStyle = "normal";
    document.getElementById("content").style.fontWeight = "normal";
    document.getElementById("content").style.textDecoration = 'none';
}

//for clear button
function remove(){
    document.getElementById("content").value = "";
}