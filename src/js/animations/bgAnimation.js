window.addEventListener('DOMContentLoaded', () => {
    const boxColor = localStorage.getItem('color')

    if(boxColor == 2) {
        document.documentElement.style.setProperty('--case-bg', '#f6ecc5')
        document.documentElement.style.setProperty('--wave-bg', '#efd159')
    } else if(boxColor == 1) {
        document.documentElement.style.setProperty('--case-bg', '#d3e7f3')
        document.documentElement.style.setProperty('--wave-bg', '#76a8c5')

    }
})