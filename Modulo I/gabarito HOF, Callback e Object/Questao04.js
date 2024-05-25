/**
 * Questão 4 - A partir do link: https://cat-fact.herokuapp.com/facts, se é possível receber um JSON com informações sobre gatos, vejamos a estrutura:
[
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e00b5f0aac31001185ed24",
        "user": "58e007480aac31001185ecef",
        "text": "When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied \"cats.\"",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-02-19T21:20:03.434Z",
        "deleted": false,
        "used": false
    },
    {
        "status": {
            "verified": true,
            "feedback": "",
            "sentCount": 1
        },
        "_id": "5887e1d85c873e0011036889",
        "user": "5a9ac18c7478810ea6c06381",
        "text": "Cats make about 100 different sounds. Dogs make only about 10.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-09-03T16:39:39.578Z",
        "type": "cat",
        "createdAt": "2018-01-15T21:20:00.003Z",
        "deleted": true,
        "used": true
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e008780aac31001185ed05",
        "user": "58e007480aac31001185ecef",
        "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-03-29T20:20:03.844Z",
        "deleted": false,
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e009390aac31001185ed10",
        "user": "58e007480aac31001185ecef",
        "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-03-04T21:20:02.979Z",
        "deleted": false,
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e00af60aac31001185ed1d",
        "user": "58e007480aac31001185ecef",
        "text": "It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-09-16T20:20:04.164Z",
        "type": "cat",
        "createdAt": "2018-01-15T21:20:02.945Z",
        "deleted": false,
        "used": true
    }
]
a partir dessas informações crie um array com os fatos sobre gatos 
(que estão representados pela chave “text”), somente com os fatos que deleted = false.
 */

const arr = [
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e00b5f0aac31001185ed24",
        "user": "58e007480aac31001185ecef",
        "text": "When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied \"cats.\"",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-02-19T21:20:03.434Z",
        "deleted": false,
        "used": false
    },
    {
        "status": {
            "verified": true,
            "feedback": "",
            "sentCount": 1
        },
        "_id": "5887e1d85c873e0011036889",
        "user": "5a9ac18c7478810ea6c06381",
        "text": "Cats make about 100 different sounds. Dogs make only about 10.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-09-03T16:39:39.578Z",
        "type": "cat",
        "createdAt": "2018-01-15T21:20:00.003Z",
        "deleted": true,
        "used": true
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e008780aac31001185ed05",
        "user": "58e007480aac31001185ecef",
        "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-03-29T20:20:03.844Z",
        "deleted": false,
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e009390aac31001185ed10",
        "user": "58e007480aac31001185ecef",
        "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-03-04T21:20:02.979Z",
        "deleted": false,
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e00af60aac31001185ed1d",
        "user": "58e007480aac31001185ecef",
        "text": "It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-09-16T20:20:04.164Z",
        "type": "cat",
        "createdAt": "2018-01-15T21:20:02.945Z",
        "deleted": false,
        "used": true
    }
]

const newArr = arr.filter( e => !e.deleted).map( e => e.text)

console.log(newArr)