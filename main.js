
let form = document.getElementById("my-form");
let table = document.getElementById('data');
let btn = document.getElementById('button');
let dice = document.getElementById('my-dice');

let countpara = document.getElementById('dice-count-para');
let scorepara = document.getElementById('dice-score-para');
let totalpara = document.getElementById('dice-total-para');

/* Accessing 4 logos on top */
let signup = document.getElementById("logo-1");
let data = document.getElementById("logo-2");
let dicegame = document.getElementById("logo-3");
let coupon = document.getElementById("logo-4");


/* -----------------------Adding Event listner on all 4 logos --------------------------*/
signup.addEventListener("click", (e) => {
    e.preventDefault();
    showForm();
    signup.style.pointerEvents="none";
});

data.addEventListener("click", (e) => {
    e.preventDefault();
    showData();
    hideForm();
    data.style.pointerEvents="none";
    dicegame.style.pointerEvents="auto";

});
dicegame.addEventListener("click", (e) => {
    e.preventDefault();
    showDice();
    hideData();
    dicegame.style.pointerEvents="none";
});
coupon.addEventListener("click", (e) => {
    e.preventDefault();
    showGenerate();
    hideDice();
    generatecoupon();
    coupon.style.pointerEvents="none";
});
/* ------------------------Functions to call for show---------------------------- */
function showForm() {
    document.getElementById("my-form-div").classList.remove("hide");
}

function showData() {
    document.getElementById("database-div").classList.remove("hide");
}

function showDice() {
    document.getElementById("dicegame-div").classList.remove("hide");
}
function showGenerate() {
    document.getElementById("generate-coupon-div").classList.remove("hide");
}


/* ------------------------Functions to call for hide---------------------------------- */
function hideForm(){
    document.getElementById("my-form-div").classList.add("hide");
}

function hideData(){
    document.getElementById("database-div").classList.add("hide");
}

function hideDice(){
    document.getElementById("dicegame-div").classList.add("hide");
}

function hideGenerate(){
    document.getElementById("generate-coupon-div").classList.add("hide");
}






form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
    data.style.pointerEvents="auto";
    btn.disabled=true;
    document.getElementById('goto').innerHTML="Successfully Registered, go to Data."
})


const submit = () => {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;

    let newArray = [name, username];
    newArray.forEach((item) => {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li);
    })
    form.reset();
}

/* let count=0;
let sum=0;
document.getElementById("dice-image").addEventListener("click",(e) => {
    count = count++;

   while(count<=3){
    let  arr= ["1", "2", "3", "4", "5", "6"];
    let randomIndex = Math.floor(Math.random() * 6);
    let randomDice = arr[randomIndex];
    document.getElementById("dice-score-para").innerHTML = randomDice;
    sum = sum + randomDice;
   }
   if(count === 3 ){
    dice.style.pointerEvents="none";
    alert("Try after scoring more than 10");
   }
}); */
let count = 0;
let sum=0;
document.getElementById("dice-image").addEventListener("click",myfunction);

function myfunction(){
    if(count == 3 && sum > 10){
        prompt("Excellent, you can generate coupon now.");
        coupon.style.pointerEvents = "auto";   
    }else if(count == 3 && sum < 10){
        prompt("Try again after scoring greater than 10.");
        dicegame.style.pointerEvents="auto"; 

    }
    else
    {
        count++;
        let  arr= ["1", "2", "3", "4", "5", "6"];
        let randomIndex = Math.floor(Math.random()*6);
        console.log(randomIndex);
        let randomDice = arr[randomIndex];
        sum = parseInt(sum)+parseInt(randomDice);
    
        countpara.innerHTML=count;
        scorepara.innerHTML=randomDice;
        totalpara.innerHTML=sum;
    }
}

function generatecoupon(){
let characters ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let result = ''
let length = 12 // Customize the length here.
for (let i = length; i > 0; --i) result += characters[Math.round(Math.random() * (characters.length - 1))]
alert("Your Coupon is - " +result);
}



