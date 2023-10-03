let message_el = document.getElementById("message-el");
let cards_el = document.getElementById("cards-el");
let sum_el = document.getElementById("sum-el");
let cards = [];
let sum = 0;
let got_black_jack = false;
let is_alive = false;

function start_game(){
    is_alive = true;
    got_black_jack = false;
    sum = 0;
    cards = [];
    new_card();
}

function render_game(){
    sum_el.textContent = sum
    cards_el.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cards_el.textContent += cards[i]+"  "
    }
    let message = "";
    if(sum<21){
        message = "Pick cards to get Black Jack!";
    }
    else if(sum === 21){
        message = "Congratulations! You got Black Jack";
        got_black_jack = true;
    }
    else{
        message = "Oops! You are out of the game!"
        is_alive = false;
    }
    message_el.textContent = message;
}

function new_card(){
    if (is_alive == true && got_black_jack == false){
        random_number = get_random_card();
        sum += random_number;
        cards.push(random_number);
        render_game();
    }
    else{
        alert("Game Over, Reload tab or press Start New Game");
    }
}

function get_random_card(){
    let random_card = Math.floor(Math.random()*13)+1
    if(random_card >= 10){
        random_card = 10;
    }
    if(random_card === 1){
        random_card = 11;
    }
    return random_card;
}