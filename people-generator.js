class Person{

    constructor(name, height, age, eyeColor,occupation) {
        this.name = name;
        this.height = height;
        this.age = age;
        this.eyeColor = eyeColor;
        this.isAlive = true;
        this.occupation = occupation;
        this.hasHeart = true;
    }
    greet() {
        return "Hello , " + " " + "my name is" + " " + this.name;
    }
    
    sayAge() {
        return ", I am " + "" + this.age + "" + " years old";
    }

    sayOccupation() {
        return " and I work as a " + this.occupation + ".";
    }

    sayHeightAndEyeColor() {
        return " I have " + this.eyeColor + " eyes " + "and I am " + this.height + "cm tall.";
    }
}

let people = []

const getPersonInfo = () => {
    const newPerson = new Person (
        document.getElementById("name").value,
        document.getElementById("height").value,
        document.getElementById("age").value,
        document.getElementById("eyeColor").value,
        document.getElementById("occupation").value
    )
 people.push(newPerson)
 console.log(newPerson)
 printGreeting(newPerson)
}

const printGreeting = (person) => {
    document.getElementById("result").innerHTML += "<p>" + person.greet() + person.sayAge() + person.sayOccupation() + person.sayHeightAndEyeColor() + "</p>";
    
}

const printOnScreen = () => {
    newPerson.forEach(printGreeting) 
}

const reset = () => {
    document.getElementById('name').value = "";
    document.getElementById('height').value = "";
    document.getElementById('age').value = "";
    document.getElementById('eyeColor').value = "";
    document.getElementById('occupation').value = "";
}

const submitInfo = () => {
    getPersonInfo();
    reset();
}



// turn input into an array of people
// execute greeting + name on each of the people from people array
// output the outcome of people array + greeting