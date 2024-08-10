function filterWords(words) {
    const filteredWords = [];
    for (let word of words) {
        if (!word.endsWith('er')) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}

module.exports = filterWords;
