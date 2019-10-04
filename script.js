document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
    const words= ['programmeren', 'javascript', 'slack', 'tutorials', 'github', 'samenwerken',
    'studeren', 'browser', 'terminal'];

    const word= words[Math.random() * words.length | 0];

    console.log(word);

    /*5 levens. Loop. elke keer als er iets gebeurt, gaat er 1 af. (i--?)
    for loop. var i. Elke keer dat het fout is 1 eraf. (of if else)
    alert gebruiken als game over.


    */








    let lives = 5;
    console.log(lives);
    let liveElement = document.getElementById("lives");
    console.log(liveElement);
    liveElement.innerHTML= "you have " + lives + " lives remaining";
    console.log(liveElement);
  })



/*function (activeren als geklikt wordt, in zetten dat startleven 5 is){
if (guess = goed){

}
else {
    lives--
}
 }
*/
 //en dan de levens in het bestand schrijven. #lives
