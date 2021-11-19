var character = document.getElementById("character")
var block = document.getElementById("block")
var question = document.getElementById('question')
block.style.animation="block 2s infinite linear"

var optionQuestion = question.getElementsByClassName('option')
var time=2;
function jump() {
    if (character.classList !== "animate")
        character.className = "animate"
    setTimeout(() => {
        character.classList.remove("animate")
    }, 500)
}
var showQuestion = setTimeout(() => {
    block.style.animation=""
        
    question.className = "visible"
}, 4000)
var checkDead = setInterval(() => {
    var characterTop = window.getComputedStyle(character).getPropertyValue("top")
    characterTop = characterTop.slice(0, characterTop.length - 2)
    characterTop = Number(characterTop)
    var blockLeft = window.getComputedStyle(block).getPropertyValue("left")
    blockLeft = Number(blockLeft.slice(0, blockLeft.length - 2))
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation=""
        alert('loose')
       window.location.reload()
    }
}, 10)
var wrongAnswer=1
async function answer() {
    
    if (event.target.value == "Delhi")
        setTimeout(()=>{
            alert('correct')
        },1000) 
     else
     {
         alert('incorrect')
         wrongAnswer++
     }
    setTimeout(()=>{ 
        block.style.animation=`block ${time/wrongAnswer}s infinite linear`
        
        

     question.setAttribute('class', "hidden")
     showQuestion = setTimeout(() => {
        for (let item of optionQuestion)
        item.checked=false
        block.style.animation=""
         question.className = "visible"
     }, 4000)
    },1500)
}


window.addEventListener('load', () => {
    for (let item of optionQuestion)
        item.addEventListener('click', answer)
})
