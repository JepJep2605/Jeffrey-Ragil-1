// Prompt user to enter the first string
let word1 = prompt("Enter the first word: (e.g., RACECAR)");
// Prompt user to enter the second string
let word2 = prompt("Enter the second word: (e.g., RECORDER)");

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
    }

    // Reverse the strings
    let reversedWord1 = reverseString(word1);
    let reversedWord2 = reverseString(word2);

    // Log the original and reversed strings
    console.log("Original Word 1:", word1);
    console.log("Reversed Word 1:", reversedWord1);
    console.log("Is Word 1 a Palindrome?", word1 === reversedWord1);

    console.log("Original Word 2:", word2);
    console.log("Reversed Word 2:", reversedWord2);
    console.log("Is Word 2 a Palindrome?", word2 === reversedWord2);