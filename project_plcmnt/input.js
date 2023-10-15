let inputElement = document.querySelector('input');
let submitAge = document.getElementById('submit-age');

function openWin(){
    let enteredAge = inputElement.value;
    if( enteredAge>0 && enteredAge<=12){
        window.open("/children.html");
    }
    else if(enteredAge>=13 && enteredAge<=19){
        window.open("/teen.html");
    }
    else if(enteredAge>=20){
        window.open("/older.html");
    }
    else{
        alert("Not Valid! Enter Again");
    }
}

submitAge.addEventListener('click',openWin);