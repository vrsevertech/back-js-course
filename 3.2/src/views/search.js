i = document.getElementById('search')
i.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault()
        console.log(i.value)
        document.location.href = 'http://localhost:3001/?search=' + i.value
    }
})
