
module.exports = { detectLanguage, removeNonLetters };


/**
 * Object to store the frequency of each letter in various languages.
 * 
 * @constant
 * @type {object}
 * @description Contains the frequency of each letter in English, Italian, Portuguese, Spanish, and French.
 * Each language is represented as an object where the keys are the letters and the values are their frequencies.
 * Example: {
 *   'english': {'a': 0.0834, 'b': 0.0154, ...},
 *   'portuguese': {'a': 0.1221, 'ã': 0.0083, ...},
 *   'italian': {'a': 0.1085, 'à': 0.0015, ...},
 *   'spanish': {'a': 0.1172, 'á': 0.0044, ...},
 *   'french': {'a': 0.0813, 'â': 0.0003, ...}
 * }
 */
const languageFrenquency = {
    'english': {'a': 0.0834, 'b': 0.0154, 'c': 0.0273, 'd': 0.0414, 'e': 0.126, 'f': 0.0203, 'g': 0.0192, 'h': 0.0611, 'i': 0.0671, 'j': 0.0023, 'k': 0.0087, 'l': 0.0424, 'm': 0.0253, 'n': 0.068, 'o': 0.077, 'p': 0.0166, 'q': 0.0009, 'r': 0.0568, 's': 0.0611, 't': 0.0937, 'u': 0.0285, 'v': 0.0106, 'w': 0.0234, 'x': 0.002, 'y': 0.0204, 'z': 0.0006},
    'portuguese': {'a': 0.1221, 'ã': 0.0083, 'â': 0.0003, 'á': 0.0041, 'à': 0.0004, 'b': 0.0101, 'c': 0.0335, 'ç': 0.004, 'd': 0.0421, 'e': 0.1319, 'é': 0.0052, 'ê': 0.0036, 'f': 0.0107, 'g': 0.0108, 'h': 0.0122, 'i': 0.0549, 'í': 0.0018, 'j': 0.003, 'k': 0.0013, 'l': 0.03, 'm': 0.0507, 'n': 0.0502, 'o': 0.1022, 'ó': 0.0017, 'õ': 0.0004, 'ô': 0.0001, 'p': 0.0301, 'q': 0.011, 'r': 0.0673, 's': 0.0735, 't': 0.0507},
    'italian': {'a': 0.1085, 'à': 0.0015, 'b': 0.0105, 'c': 0.043, 'd': 0.0339, 'e': 0.1149, 'é': 0.0006, 'è': 0.0042, 'f': 0.0101, 'g': 0.0165, 'h': 0.0143, 'i': 0.1018, 'ì': 0.0009, 'l': 0.057, 'm': 0.0287, 'n': 0.0702, 'o': 0.0997, 'ò': 0.0011, 'p': 0.0296, 'q': 0.0045, 'r': 0.0619, 's': 0.0548, 't': 0.0697, 'u': 0.0316, 'ù': 0.0012, 'v': 0.0175, 'z': 0.0085},
    'spanish': {'a': 0.1172, 'á': 0.0044, 'b': 0.0149, 'c': 0.0387, 'd': 0.0467, 'e': 0.1372, 'é': 0.0036, 'f': 0.0069, 'g': 0.01, 'h': 0.0118, 'i': 0.0528, 'í': 0.007, 'j': 0.0052, 'k': 0.0011, 'l': 0.0524, 'm': 0.0308, 'n': 0.0683, 'ñ': 0.0017, 'o': 0.0844, 'ó': 0.0076, 'p': 0.0289, 'q': 0.0111, 'r': 0.0641, 's': 0.072, 't': 0.046, 'u': 0.0455, 'ü': 0.0002, 'ú': 0.0012, 'v': 0.0105, 'w': 0.0004, 'x': 0.0014, 'y': 0.0109, 'z': 0.0047},
    'french': {'a': 0.0813, 'â': 0.0003, 'à': 0.0054, 'b': 0.0093, 'c': 0.0315, 'ç': 0.0001, 'd': 0.0355, 'e': 0.151, 'ê': 0.0024, 'é': 0.0213, 'è': 0.0035, 'ë': 0.0001, 'f': 0.0096, 'g': 0.0097, 'h': 0.0108, 'i': 0.0694, 'ï': 0.0001, 'î': 0.0003, 'j': 0.0071, 'k': 0.0016, 'l': 0.0568, 'm': 0.0323, 'n': 0.0642, 'o': 0.0527, 'ô': 0.0007, 'œ': 0.0001, 'p': 0.0303, 'q': 0.0089, 'r': 0.0643, 's': 0.0791, 't': 0.0711, 'u': 0.0605, 'ü': 0.0002, 'û': 0.0005, 'ù': 0.0002, 'v': 0.0183, 'w': 0.0004, 'x': 0.0042, 'y': 0.0019, 'z': 0.0021}

};

/**
 * Removes all non-letter characters from a string.
 * This function is case insensitive and only considers letters from English, Italian, French, Portuguese, and Spanish languages.
 * 
 * @param {string} text The text from which to remove non-letter characters.
 * @returns {string} The text with all non-letter characters removed.
 */
function removeNonLetters(text) { 
    return text.replace(/[^a-zàãâáçéêíìóõôúùüñëïîœ]/ig, ''); 
}

/**
 * This function detects which language the letter frequency comes from.
 * It considers letters from English, Italian, Portuguese, and Spanish.
 * 
 * @param {object} letterFreqObj An object where keys are single characters in lowercase and values are their frequencies.
 * @returns {object} An object with the detected language in the 'detectedLanguage' key 
 *                   and key 'languageScores' containing scores for all languages.
 */
function detectLanguage(letterFreqObj) {
    const totalFrequency = Object.values(letterFreqObj).reduce((acc, val) => acc + val, 0);
    let minDistance = Number.MAX_SAFE_INTEGER;
    let detectedLanguage = null;
    let languageScores = {};

    for (const language in languageFrenquency) {
        let distance = 0;
        const languageFreq = languageFrenquency[language];
        for (const letter in languageFreq) {
            if (letterFreqObj[letter]) {
                distance += Math.abs(languageFreq[letter] - letterFreqObj[letter]);
            }
        }
        distance /= totalFrequency;
        languageScores[language] = distance;
        if (detectedLanguage === null || distance < minDistance) {
            minDistance = distance;
            detectedLanguage = language;
        }
    }

    return { detectedLanguage, languageScores };
}


