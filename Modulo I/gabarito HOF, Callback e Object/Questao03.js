/**
 * Questão 3 -  A partir do link: http://dog-api.kinduff.com/api/facts?number=10, se é possível receber um JSON com informações sobre cachorros, vejamos a estrutura:

 {
    "facts": [
        "Dachshunds were bred to fight badgers in their dens.",
        "The American Kennel Club, the most influential dog club in the United States, was founded in 1884.",
        "Dogs need a strong sense of smell because their eyesight is not as keen as a human’s.",
        "Greyhounds are the fastest dogs on earth, with speeds of up to 45 miles per hour.",
        "In 2001, it was estimated that there are approximately 400 million dogs in the world.",
        "Dogs aren't colorblind but their eyes don't have receptors for red. They see in shades of black and white and also in shades of blue and yellow.",
        "Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
        "The Boy Scouts and Girl Scouts both offer merit badges in dog care.",
        "The Newfoundland has a water-resistant coat and webbed feet.",
        "A dog’s powerful sense of smell is frequently called upon to detect    anything from mines and explosives to termites and bed bugs."
    ],
    "success": true
 }

usando o método slice do Array gere um novo vetor 3 fatos sobre cachorros

 */
const obj = {
    "facts": [
        "Dachshunds were bred to fight badgers in their dens.",
        "The American Kennel Club, the most influential dog club in the United States, was founded in 1884.",
        "Dogs need a strong sense of smell because their eyesight is not as keen as a human’s.",
        "Greyhounds are the fastest dogs on earth, with speeds of up to 45 miles per hour.",
        "In 2001, it was estimated that there are approximately 400 million dogs in the world.",
        "Dogs aren't colorblind but their eyes don't have receptors for red. They see in shades of black and white and also in shades of blue and yellow.",
        "Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
        "The Boy Scouts and Girl Scouts both offer merit badges in dog care.",
        "The Newfoundland has a water-resistant coat and webbed feet.",
        "A dog’s powerful sense of smell is frequently called upon to detect    anything from mines and explosives to termites and bed bugs."
    ],
    "success": true
 }

 console.log(obj.facts.slice(0,3))