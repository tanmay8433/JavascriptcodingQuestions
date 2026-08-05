// Convert a string to an array of words
function strtoarr(str){
    return str.split(" ")
}

console.log(strtoarr("hello my self"))


function strtoarr(str) {
  const result = [];
  let currentWord = "";

  for (const char of str) {
    if (char === " ") {
      if (currentWord !== "") { // Prevents adding empty strings for double spaces
        result.push(currentWord);
        currentWord = ""; // Reset for the next word
      }
    } else {
      currentWord += char; // Build the word character by character
    }
  }

  // Push the final word since the string doesn't end with a space
  if (currentWord !== "") {
    result.push(currentWord);
  }

  return result;
}

console.log(strtoarr("hello my self")); // ["hello", "my", "self"]