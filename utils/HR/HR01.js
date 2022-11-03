const validAnagram = (firstString, secondString) => {
    // console.log(firstString.length, secondString.length);
    if (firstString.length !== secondString.length) {
    //   console.log("já foste");
      return false;
    }
  
    let lookup = {};
  
    for (const letter of firstString) {
      lookup[letter] = ++lookup[letter] || 1;
    }
  
    for (const letter of secondString) {
      if (!lookup[letter]) {
        // console.log("já foste");
        return false;
      }
      --lookup[letter];
    }
    return true;
  };


  function funWithAnagrams(text) {
    //write your code here
    // let sortText = text.slice();
    // sortText.sort((a,b) => (a).localeCompare(b))
    
    // console.log(sortText)

    // let words = []

    // let currentWord = sortText[0]
    // let currentWordIndex = 0;

    // for(let i = 1; i < sortText.length; i++){
    //     // console.log(validAnagram(sortText[i], sortText[i - 1]))

    //     if (validAnagram(sortText[i], currentWord)) {
    //         if(!words[currentWordIndex] || words[currentWordIndex] !== currentWord) words.push(currentWord)
    //     }else{
    //         currentWordIndex++
    //         currentWord = sortText[i]
    //     }
    // }

    // return words;
    

    // console.log(ABA)

    let sortText = text.slice()

    for(let i = 0; i < sortText.length -1; i++){
        if(sortText[i] === `Z9`) continue
        for (let t = 0; t < sortText.length; t++) {
            // console.log("AQUI", sortText[i])
            if (i !== t && sortText[t] !== `Z9` && validAnagram(sortText[i], sortText[t])) {
                sortText.splice(t,1,`Z9`)
            }
        }
    }

    
    sortText.sort((a,b) => (a).localeCompare(b))
    
    let finalWords = []

    for(const word of sortText){
        if(word !== `Z9`){ finalWords.push(word) } else {break;} 
    }


    return finalWords
  }

  console.log(funWithAnagrams(['code', 'gaaamnrs', 'anagrams', 'doce','anagrams', 
  'doce','anagrams', 'doce', 'batatas', 'bataats','btaatas'])) //'code', 'aaagmnrs'
  