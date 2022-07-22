let name = 'Alex'
let money = 10000
let account = '7777'

let inputName = prompt('What is your name?')
if (inputName === name) {
    let inputAccount = prompt('What is the account number?')
    if (inputAccount === account) {
        let cashOut = prompt('How much money to cash out?')
        if (cashOut <= money) {
            let difference = money-cashOut
            let answer = 'Cash out = ' + cashOut + ' ' + 'Left = ' + difference
            alert(answer)
        }
        else {
            alert('Not enought money')
        }
    }
    else {
        alert('This user does not exist')
    }
}
else {
    alert('This user does not exist')
}