// Capitalize the First Letter of Each Word in a Sentence

function capitalizefirstLetter(str){
    let arr = str.split(" ");
    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ')
}
console.log(capitalizefirstLetter("my name is tanmay"))