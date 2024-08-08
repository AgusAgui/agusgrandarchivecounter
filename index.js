let p1hp = 0;
let p2hp = 0;

const increase_1 = document.getElementById("increase_1");
const decrease_1 = document.getElementById("decrease_1");
const increase_2 = document.getElementById("increase_2");
const decrease_2 = document.getElementById("decrease_2");
const count_1 = document.getElementById("count1");
const count_2 = document.getElementById("count2");

increase_1.onclick = function(){
    p1hp++;
    count_1.textContent = p1hp;
}
decrease_1.onclick = function(){
    p1hp--;
    count_1.textContent = p1hp;
}
increase_2.onclick = function(){
    p2hp++;
    count_1.textContent = p2hp;
}
decrease_2.onclick = function(){
    p2hp--;
    count_1.textContent = p2hp;
}
