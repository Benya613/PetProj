const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// There is assign of varible button that refer on id of our button
const btn = document.getElementById('btn');
const color= document.querySelector(".color");
btn.addEventListener('click', function(){
    //get random number between 0-3 colors
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    //at the first take our doc, than go to the body and choice style property
    
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})
/*
We dont put in our func any parametrs, but try to return 
random num.(if we did only random method it will be always float
    number between 0 and 1, but never 1)
*/
//Above we try to get number from 0 to 3 and to do that we multiply on count of colors
//After that operation we can see that our console gives us a number that we want. 
//Math.floor - returns the greatest integer less than or equal to its numeric argument
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

