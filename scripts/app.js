//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

let Answer1 = document.getElementById("Answer1");
let Answer2 = document.getElementById("Answer2");
let Answer3 = document.getElementById("Answer3");
let Answer4 = document.getElementById("Answer4");
let Answer5a = document.getElementById("Answer5a");
let Answer5b = document.getElementById("Answer5b");
let AnswerE1 = document.getElementById("AnswerE1");
let AnswerE2 = document.getElementById("AnswerE2");

let counter;

async function FetchData(){
    const promise = await fetch('./data/quizdata.json')
    const data = await promise.json();

    console.log(data);

    GetAnswer1(data.People)
    GetAnswer2(data.People)
    GetAnswer3(data.People)
    GetAnswer4(data.People)
    GetAnswer5a(data.People)
    GetAnswer5b(data.People)
    GetAnswerE1(data.People)
    GetAnswerE2(data.People)

}

FetchData();

const GetAnswer1 = data => {
    counter = 0;

    data.forEach( x => {
        if(x.age > 19 && x.age < 30){
            counter++;
        }
    })

    Answer1.innerText = `There are ${counter} people in their 20's.`;
}

const GetAnswer2 = data => {
    counter = 0;

    data.forEach( x => {
        if(x.age >= 21){
            counter++;
        }
    })

    Answer2.innerText = `There are ${counter} people who can legally drink alcohol.`;
}

const GetAnswer3 = data => {
    counter = 0;

    data.forEach( x => {
        if(parseInt(x.height) > 65){
            counter++;
        }
    })

    Answer3.innerText = `There are ${counter} people taller than 5'5.`;
}

const GetAnswer4 = data => {
    counter = 0;

    let person = data.find(x => {
        parseInt(x.height) > 56;
        return x;
    })

    Answer4.innerText = `The first person listed above 56" is ${person.name}.`
}

const GetAnswer5a = data => {
    Answer5a.innerText = data.every(x => x.name.length > 14)? "Yes, everyone has a name that is greater than 15 characters" : "No, not everyone has a name that is greater than 15 characters.";
}

const GetAnswer5b = data => {
    Answer5b.innerText = data.every(x => parseInt(x.height) > 50)? "Yes, everyone is taller than 50 inches" : "No, not everyone is taller than 50 inches.";
}

const GetAnswerE1 = data => { 
    let Arr1 = [...data];

    let names = Arr1.map(x =>x.name).sort();

    let Arr2 = names.map(x => {
        return Arr1.find( y =>  y.name == x)
    });

    Arr2.forEach( x => {
        AnswerE1.innerText += JSON.stringify(x) +"\n";
    });

}

const GetAnswerE2 = data => { 
    let Arr1 = [...data];

    let lastNames = Arr1.map(x =>x.name.split(" ")[1]).sort();

    let Arr2 = lastNames.map(x => {
        return Arr1.find( y =>  y.name.split(" ")[1] == x)
    });

    Arr2.forEach( x => {
        AnswerE2.innerText += JSON.stringify(x) +"\n";
    });


}