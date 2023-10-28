let msg = document.querySelector(".message");
let right_wrong = document.querySelector(".right_wrong");
let update_score = document.querySelector(".score_update");
let update_time = document.querySelector(".time_update");
let input_value = document.querySelector("#number");
let button = document.querySelector("#button");
let btn = document.querySelector("#btn");
let times = 60;
let rand_number;
 btn.style.display = "none"
 // disable input field
 function isDisabled() {
   return input_value.disabled = true;
 }

 //enable input
 function isEnabled() {
  return  input_value.disabled = false;
 }

//##############################################################################################
function isGuessed() {
    let element = document.createElement("div");
                  element.classList.add("comp_guess");
                  element.textContent = ` The correct number is ${rand_number}`;
    let container_inp = document.querySelector(".inp_container");
    container_inp.appendChild(element);
    
//#############################################################################
input_value.style.display = "none"
}



 // congratulations message
 
 function congrats() {
    msg.innerHTML = "**CONGRATULATIONS** \n YOU HAVE WON #100 MTN AIRTIME \n 876589354889";
    msg.style.fontSize = "1.3em";
    times = null
    document.querySelector(".score_container").remove("time")
    isDisabled()
    //###############################################################################################
    let element = document.createElement("div");
                  element.classList.add("comp_guess");
                  element.style.marginTop = "70px"
                  element.style.backgroundColor = "green"
                  element.textContent = ` ${rand_number} is correct`;
    let container_inp = document.querySelector(".inp_container");
    container_inp.appendChild(element);
                  right_wrong.style.display = "none";
    return
 }
 

let score = 0;
 //let times = 60;
let msg_pass = " I'm thinking of a number between 1 and 9, guess the number and win #100 airtime "

function message(){
    window.addEventListener("load", ()=>{
        isDisabled()
        for (let i = 0; i < msg_pass.length; i++) {
            setTimeout(()=>{
                msg.innerHTML += msg_pass.charAt(i);
            }, i * 20)       
        }
    })
}message()
    
button.addEventListener("click", ()=>{
    isEnabled();

//disappear start button
btn.style.display = "block";
btn.value = " RESET";

    //create random number
//let rand_number;

function rand_num() {
  return  Math.floor( Math.random() * 10);
}

//##############################################################################################


    

 
//##############################################################################################
 
 // create function to update random number evrytime user guess right

 function update_rand() {
    rand_number = rand_num();
    console.log(rand_number);
    
 }update_rand()

// input should listen to event
input_value.addEventListener("input", (e)=>{

// check if input value equal random number
if (e.target.value == rand_number) {

    congrats()
   // update_rand();
   // update_score.innerHTML = ++score;
   // right_wrong.innerHTML = "yes" + " " + input_value.value + " " + "is correct";
   // right_wrong.style.display = "block";
   // right_wrong.style.backgroundColor = "green";
    //e.target.value = "";
}else{
    right_wrong.innerHTML = `${input_value.value} is wrong. Try again`;
    right_wrong.style.display = "block";
    right_wrong.style.backgroundColor = "red";
    e.target.value = ""
}
})
//make input focus
input_value.focus();

//function to update the time

function updateTime(){
 update_time.innerHTML = --times + "s" ;
 if(times == 0 ){
    clearInterval(time_interval)
    update_time.innerHTML = times + "s";
    msg.innerHTML = "GAME OVER";
    msg.style.fontSize = "40px";
    button.style.display = "none";
    btn.style.display = "block";
    btn.value = "PLAY AGAIN";
    input_value.disabled = true;
    input_value.value = "";
    right_wrong.innerHTML = "";
    right_wrong.style.display = "none";
    isGuessed();
 }
}updateTime()

let time_interval = setInterval(updateTime, 100)

})

function play_again() {
    btn.addEventListener("click", () => {
        location.reload(); 
      });
    
}play_again()  
 

