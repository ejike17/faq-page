//using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function () {
        question.classList.toggle('show-text')
    })
})




// traversing the dom solution
/*
const questionBtn = document.querySelectorAll('.question-btn');

questionBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const event = e.currentTarget.parentElement.parentElement
        event.classList.toggle('show-text')
    })
})
*/
