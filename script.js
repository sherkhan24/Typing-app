
let typeContent = document.querySelector('.typeContent p');


let details = document.querySelector('.details button');


let typeContentInput =document.querySelector('.typeContent input'); 

let userError = document.querySelector('.mistakes');

let cpm = document.querySelector('.cpm');

// let letterIndex = (mistakes = isTyping = 0)

let letterIndex = 0;
let mistakes = 0 ;
let isTyping = 0 ;

let time;
let maxTime = 60;
let timeLeft = maxTime;


let loadPrda = () => {
    typeContentInput.focus();
    
    let peraData = Math.floor(Math.random()*pera.length)

    pera[peraData].split('').forEach((element, index) => {

        let span =`<span>${element}</span>`;
        typeContent.innerHTML += span;
        
        
    })
}

loadPrda();

details.addEventListener('click', () => {
    typeContent.innerHTML  = '';
    loadPrda(); 

})

typeContentInput.addEventListener('input', (e) => {
    let userInput = e.target.value.split('')[letterIndex];

    let snapData = typeContent.querySelectorAll('span');
    
    if(!isTyping){
        time = setInterval(timeLoad, 1000);
        isTyping = true
    }

    if(letterIndex < snapData.length -1){
        if(userInput === null){
            console.log(`something went wrong`);

        }else{
            if(snapData[letterIndex].innerText === userInput){
                snapData[letterIndex].classList.add('correct');
            }else{
                snapData[letterIndex].classList.add('incorrect');
                mistakes++
            }
        }

        letterIndex++
        snapData.forEach(element => {
            element.classList.remove('blink')
        })

        typeContentInput.addEventListener('input', function(e) {
            
        })
        snapData[letterIndex].classList.add('blink');
        userError.innerHTML = `mistakes : ${mistakes}`
        cpm.innerHTML = `cpm : ${letterIndex - mistakes}`

    }
})
const timeLoad = () => {
    if(timeLeft > 0){
        timeLeft--
        document.querySelector('.timeLeft').innerHTML = `Time Left : ${timeLeft}s`;
        let wpmData = Math.round((letterIndex - mistakes)/ 5 / (maxTime - timeLeft)* 60);
        

        document.querySelector('.wpm').innerHTML = `Wpm : ${wpmData}`

    }
}
