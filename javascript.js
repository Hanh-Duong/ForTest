const date = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const test = ["first","second","third","fourth","fifth"];
const lesson = ["HTML", "CSS", "Javascript", "React", "NodeJS"];

let i = 0;
while (test[i]){
    console.log(`Our ${test[i]} test will be on ${date[i]} and it is about ${lesson[i]}`);
    i++;
}
const number = (0);
function getNum(number){
    let result;
    if (number > 5){
        result = "Bingo!";
    }else{
        result = "Try again!";
    }
    return result;
};
console.log(getNum(4));