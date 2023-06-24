const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let newArray = []
let count = 0
for (let single in users) {

    console.log(users[single].skills.length)

    const array = users[single].skills;

    count = 0


    if (array.includes('MongoDB') && array.includes('Express') && array.includes('React') && array.includes('Node')) {

        newArray.push(single)

    }
    // for (let i = 0; i < arry.length; i++) {

    //     if (arry[i] == 'MongoDB') {

    //         count++
    //     }


    //     if (arry[i] == 'Express') {
    //         count++

    //     }


    //     if (arry[i] == 'React') {
    //         count++

    //     }



    //     if (arry[i] == 'Node') {
    //         count++

    //     }




    // }


    // if (count == 4) {

    //     newArray.push(single)
    // }

}


console.log(newArray)