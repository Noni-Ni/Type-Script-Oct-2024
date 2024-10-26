interface PersonalInfo {
    firstName: string,
    lastName: string,
    age: number
}

function personalInfo( firstName1: string, lastName1: string, age1: string) : PersonalInfo{
    

    let person1Info : PersonalInfo = {
        firstName: firstName1,
        lastName: lastName1,
        age: Number(age1),
    }
    
    return person1Info
}

console.log(personalInfo("Peter","Pan","20"))
console.log(personalInfo("George", "Smith","18"))