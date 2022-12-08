const confirm = document.querySelector(".confirm")
const quality = document.querySelector(".quality")
const order_sum = document.querySelector(".order-sum")
const n_people = document.querySelector(".amount")
const span_tips_total = document.querySelector(".tips-total")
const span_per_person = document.querySelector(".tips-per-person")
const reset_button = document.querySelector(".reset")

confirm.addEventListener("click", calculate_tips)
reset_button.addEventListener("click", reset_all)

function calculate_tips(event){
    event.preventDefault()
    sum = Number(order_sum.value)
    num = n_people.value
    let tips = sum * Number(quality.value)
    span_per_person.innerHTML = (tips/num).toFixed(2)+" руб."
    span_tips_total.innerHTML = ((sum+tips)/num).toFixed(2)+" руб."
}

function reset_all(event){
    event.preventDefault()
    span_tips_total.innerHTML = "0 руб." // we have to round up
    span_per_person.innerHTML = "0 руб." // use .toFixed
    n_people.value = ''
    order_sum.value = ''
    quality.value = '0.1' // can be changed
}