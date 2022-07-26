enum B {
    minus,
    plus
}
const buttonPlus = document.querySelector('#pb')
buttonPlus?.addEventListener('click', () => {
    fetch('http://localhost:3000/api',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({b: B.plus})
    }).then(res => res.json()).then(res => {
        const u = document.querySelector('#p')
        if (u !== null) {
            u.textContent = res
        }
    })
})

const buttonMinus = document.querySelector('#mb')
buttonMinus?.addEventListener('click', () => {
    fetch('http://localhost:3000/api',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({b: B.minus})
    }).then(res => res.json()).then(res => {
        const u = document.querySelector('#m')
        if (u !== null) {
            u.textContent = res
        }
    })
})