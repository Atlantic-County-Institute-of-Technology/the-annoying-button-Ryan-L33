let score = document.getElementById("score")
let annoying_button = document.getElementById("annoying_button")
let main_button = document.getElementById("main_button")

var cookies = 0;
var click_power=1;
var move_button = 0

annoying_button.addEventListener("click" , main_click)

function main_click(){
    cookies += click_power;
    score.innerText = cookies;
    check_score();
}

function movement(){
        annoying_button.style.position = 'absolute';
        move_button += 20;
        annoying_button.style.transform = 'translateX(20) translateY(30)';
}





function check_score(){
    if( cookies >= 50 && cookies <= 100 )
    {
        console.log("true");
        movement();
    }
        


    if( cookies == 100)
    {make_button()
    make_button2()
    make_button3()
    make_button4()
    make_button5()
    make_button6()
    make_button7()
    make_button8()
    make_button9()}
}

function make_button() {
    const granny=document.createElement("button"); 
    granny.classList.add("button")
    granny.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(granny);
}

function make_button2() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button3() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button4() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button5() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button6() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button7() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button8() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}

function make_button9() {
    const grannyy=document.createElement("button"); 
    grannyy.classList.add("button")
    grannyy.innerText = "DO NOT CLICK!!!!!"
    main_button.appendChild(grannyy);
}