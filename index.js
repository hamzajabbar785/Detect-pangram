// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
// the sentence  "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters 
// A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

const isPangram = (str) => {
    return new Set(str.toLowerCase().replace(/[^a-z]/gi, "")).size === 26

}

isPangram("The quick brown fox 1234 jumps over the lazy dog")


//Solution 2
const isPangram = (str) => {
    let alphabets = new Set("abcdefghijklmnopqrstuvwxyz")
    for(let el of str){
        alphabets.delete(el)
        if(alphabets.size === 0) return true
    }
    return false
}


//Soluttion 3 
const isPangram = (str) => {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}