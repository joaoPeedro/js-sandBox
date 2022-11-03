
function solution() {

    let textList = document.querySelectorAll('td')
    let textToReturn = ""

    Array.from(textList).map( (text) => {
        if(text.style.backgroundColor !== text.style.color) 
        textToReturn += text.textContent
    })

    return textToReturn
}


console.log(solution())