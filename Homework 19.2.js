let name = prompt('What is your name?')

if (name.charAt() === "A") {
    let age = prompt('How old are you?')
    if (age >= 20) {
        if (age <= 40) {
            let money = prompt('How much money do you have?')
            if (money >= 100) {
                let people = prompt('How many people want to come in?')
                if (people <= 8) {
                    alert('You can come in lucky man')
                }
                else {
                    alert('Get out')
                }
            }
            else {
                alert('Get out')
            }
        }
        else {
            alert('Get out')
        }
    }
    else {
        alert('Get out')
    }
}
else if (name.charAt() === "a") {
    let age = prompt('How old are you?')
    if (age >= 20) {
        if (age <= 40) {
            let money = prompt('How much money do you have?')
            if (money >= 100) {
                let people = prompt('How many people want to come in?')
                if (people <= 8) {
                    alert('You can come in lucky man')
                }
                else {
                    alert('Get out')
                }
            }
            else {
                alert('Get out')
            }
        }
        else {
            alert('Get out')
        }
    }
    else {
        alert('Get out')
    }
}
else {
    alert('Get out')
}