const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputlists = document.querySelectorAll('.goal-input')
const error = document.querySelector('.err')
const showError = document.querySelector('.error')
const numTaskCompleted = document.querySelectorAll('.completed').length
const progressval = document.querySelector('.progress-val')
const progressbar = document.querySelector('.bar')
const clearTask = document.querySelector('.btn')
const textValue = document.querySelector('.text-value')
const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill :D'
]
const comment = document.querySelector('.cmt')

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    first: {
        name:"",
        completed: false
    },
    second: {
        name:"",
        completed: false
    },
    third: {
        name:"",
        completed: false
    },
}

let completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length
progressval.style.width = `${(completedGoalCount / 3) * 100}%`
textValue.innerHTML = `${completedGoalCount}/3 completed`


checkBoxList.forEach((checkBox) => {


    checkBox.addEventListener('click', () => {
        const allinputFieldFilled = [...inputlists].every(function (input) {
            return input.value
        })
        if (allinputFieldFilled == true) {
            checkBox.parentElement.classList.toggle('completed')



            const inputId = checkBox.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed

            completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length
            progressval.style.width = `${(completedGoalCount / 3) * 100}%`
            textValue.innerHTML = `${completedGoalCount}/3 completed`
            comment.innerHTML = allQuotes[completedGoalCount]

            localStorage.setItem('allGoals', JSON.stringify(allGoals));
        }

        else {
            error.classList.add('show-error')
        }
    })
})

inputlists.forEach((input) => {
    input.value = allGoals[input.id]?.name || ''

    if (allGoals[input.id].completed) {
        input.parentElement.classList.add('completed')
    }
    input.addEventListener('focus', () => {
        error.classList.remove('show-error')
    })
    input.addEventListener('input', (e) => {
        if (allGoals[input.id].completed) {
            input.value = allGoals[input.id].name
            return
        }
        allGoals[input.id].name= input.value
        localStorage.setItem('allGoals', JSON.stringify(allGoals))


    })
})

clearTask.addEventListener('click', ()=>{
localStorage.clear();
location.reload()
})
// if(numTaskCompleted==1){
//     progressbar.classList.add('one-third')
//     progressbar.classList.remove('two-third three-third')
// }
// else if(numTaskCompleted==2){
//    progressbar.classList.add('two-third')
//     progressbar.classList.remove('one-third three-third')
// }
// else if(numTaskCompleted==3){
//     progressbar.classList.add('three-third')
//     progressbar.classList.remove('one-third two-third')
// }


