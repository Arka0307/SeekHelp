let firsth1 = document.getElementById('h1-one');
let secondh1 = document.getElementById('h1-two');
let thirdh1 = document.getElementById('h1-three');

let readop = document.getElementById('more');
let moreop = document.getElementById('read');
let lessop = document.getElementById('less');

let getAge = document.getElementById('age-tab');
let sympBtn = document.getElementById('symp-btn');

let mainBody = document.getElementById('mainb');

function viewTwo(){
    firsth1.style.display='none';
    secondh1.style.display='block';
}

function viewThree(){
    secondh1.style.display='none';
    thirdh1.style.display='block';
}

function viewOne(){
    thirdh1.style.display='none';
    firsth1.style.display='block';
}

function readMore(){
    readop.style.display='none';
    moreop.style.display='inline';
    lessop.style.display='inline';
}

function readLess(){
    readop.style.display='inline';
    moreop.style.display='none';
    lessop.style.display='none';

}

function showAgeTab(){
    getAge.style.display='block';
    mainBody.style.filter='blur(6px)';
}

firsth1.addEventListener('click',viewTwo);
secondh1.addEventListener('click',viewThree);
thirdh1.addEventListener('click',viewOne);

readop.addEventListener('click',readMore);
lessop.addEventListener('click',readLess);

sympBtn.addEventListener('click',showAgeTab);