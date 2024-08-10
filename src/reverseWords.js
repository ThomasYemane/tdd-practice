function reverseWords(words) {
    return words.map(word => word.split('').reverse().join(''));
}

module.exports = reverseWords;
