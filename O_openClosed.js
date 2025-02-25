/*
In Object Oriented Programming , The Open Closed Principle states that 
Software entities, functions , modules should be open for Extension and Closed for
modification
*/

/*
In This Switch Case Example below , when we want to implement a new 
question type , we would modify the switch case , but this break the open closed rule
it mean's the switch case should be able to extend,but without  actual modification
The switch case indicates a closed state here , it shouldn't be modified

*/
/*
function printQuiz(questions){
questions.forEach(question => {
    console.log(question.description);
    switch(question.type) {
        case 'boolean':
            console.log('1.True');
            console.log('1.False');
            break;
        case 'multipleChoice':
            question.options.forEach((language ,index ) =>{
                console.log(`${index+1} . ${language}`);
            })
            break;
        case 'text':
            console.log('Ans:_______________')
            break;
        //Here within the switch case , we should add a new case , if we want to extend
        
        
        
    }
})
}

const questions =[
    {
        type:'boolean',
        description:'This is boolean '
    },
    {
        type:'multipleChoice',
        description:'what is your favourite Language ?',
        options:['Python','Java','JavaScript']
    },
    {
        type:'text',
        description:'Describe your favorite Js Feature'

    }
        //we should add a new type here to extend a new type

    
]

printQuiz(questions);

*/

class BooleanQuestion{
    constructor(description){
        this.description=description
    }

    printQuestionChoices() {
        console.log('1.True');
        console.log('2.False');
    }
}

class MultipleChoiceQuestion {
    constructor(description,options){
        this.description=description;
        this.options=options;
    }

    printQuestionChoices(){
        this.options.forEach((option , index) =>{
            console.log(`${index+1} . ${option}`);
        } )
    }
}

function printQuiz(questions){
    
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices()
    }
    )
    
}
const questions =[
 new BooleanQuestion('Boolean Question has Following Options'),
 new MultipleChoiceQuestion('Which one is your favourite Language ?',['Java','Python'])
]
/*In this way if we want to extend a new feature , we can extend it
without actually modifying the actual functionality 
*/

printQuiz(questions)