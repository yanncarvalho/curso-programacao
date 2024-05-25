/**
 * Questão 02 - UA frequência de letras se refere a proporção ou percentual com que cada letra do alfabeto aparece em um texto. Analisando as línguas humanas se nota que geralmente há um padrão no aparecimento da letra, por exemplo, em textos escritos em português há muito a ocorrência da letra “a”: ao analisar a frequência de letras em um texto, é possível extrair informações sobre a língua em que o texto está escrito.
 * Com base nessa informação e usando as funções do arquivo letter-frequency.js, desenvolva uma função em JavaScript que, dado um texto como entrada, extraia a frequência de ocorrência de cada letra e identifique o idioma predominante, levando em conta somente as línguas: italiano, espanhol, portugues, inglês e francês. 
 * Use os casos como exemplos:
 * Input: "Mi chiamo Luca e adoro restare da solo nella mia camera e avere un po’ di tempo per me stesso. In particolare, mi piace stare sdraiato sul letto a leggere un buon libro. Le pareti della mia camera hanno quattro colori differenti. Sulla parete verde è appeso un quadro di Picasso, accanto alla grande finestra, mentre sulla parete blu ho attaccato la foto dei miei migliori amici. Appoggiata alla parete gialla c’è la mia scriva” 
 * Output: Italian
 * Input: "Nenhuma distribuição de frequência de letras exata é subjacente a uma determinada língua, uma vez que todos os escritores escrevem um pouco diferente."
 * Output: portuguese
 * Input: "Le matin, Théo se lève à six heures. Il reste au lit un quart d’heure dans le noir avant de se lever, pour faire durer la nuit. Tous les matins, il suit la même routine : il commence par se laver le visage avant de prendre une douche. Ensuite, il se sèche très vite les cheveux pour aller manger son petit déjeuner. Il doit se dépêcher pour ne pas être en retard à l’école."
 * Output: french
 * Input: "I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!” 
 * Output: english
 * Input: “Voy al parque a las cinco de la tarde, cuando termino los deberes de la escuela. Allí veo a mi amigo Juan y a mi amigo Luis. Con ellos juego al escondite y a otros juegos muy entretenidos. Luis se va más temprano del parque porque tiene que ir a la escuela de música a aprender a tocar el piano.” 
 * Output: spanish
*/

const { detectLanguage, removeNonLetters } = require('./letter-frequency.js');

function calculateLetterFrequency(text) {
    const letterFrequency = {};
    const cleanLowerCase = removeNonLetters(text).toLowerCase();
    const totalLetters = cleanLowerCase.length;

    for (const char of cleanLowerCase) {
        letterFrequency[char] = (letterFrequency[char] || 0) + 1 / totalLetters;
    }
    return letterFrequency;
}

const italian = "Mi chiamo Luca e adoro restare da solo nella mia camera e avere un po’ di tempo per me stesso. In particolare, mi piace stare sdraiato sul letto a leggere un buon libro. Le pareti della mia camera hanno quattro colori differenti. Sulla parete verde è appeso un quadro di Picasso, accanto alla grande finestra, mentre sulla parete blu ho attaccato la foto dei miei migliori amici. Appoggiata alla parete gialla c’è la mia scrivania e Amelia, la mia gatta, adora dormire nel divanetto che ho messo sopra la comoda sedia, sulla quale mi siedo per fare i compiti.";
const portuguese = "Nenhuma distribuição de frequência de letras exata é subjacente a uma determinada língua, uma vez que todos os escritores escrevem um pouco diferente.";
const french = "Le matin, Théo se lève à six heures. Il reste au lit un quart d’heure dans le noir avant de se lever, pour faire durer la nuit. Tous les matins, il suit la même routine : il commence par se laver le visage avant de prendre une douche. Ensuite, il se sèche très vite les cheveux pour aller manger son petit déjeuner. Il doit se dépêcher pour ne pas être en retard à l’école.";
const english = "I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!"
const spanish = "Voy al parque a las cinco de la tarde, cuando termino los deberes de la escuela. Allí veo a mi amigo Juan y a mi amigo Luis. Con ellos juego al escondite y a otros juegos muy entretenidos. Luis se va más temprano del parque porque tiene que ir a la escuela de música a aprender a tocar el piano.";

const test = {
    italian: italian,
    portuguese: portuguese,
    french: french,
    english: english,
    spanish: spanish
}

Object.keys(test).forEach(
    key => {
        const letterOccurrences = calculateLetterFrequency(test[key]);
        console.log(key, detectLanguage(letterOccurrences).detectedLanguage === key)
    }
)

