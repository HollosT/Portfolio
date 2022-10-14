// Back transition based on Thomas lecture
const backArrow = document.querySelector('#backArrow')
const transitionSVG = document.querySelector('#filler')
const animateSVGsection = document.querySelector('#fillerSVG');
const aboutNav = document.querySelector('#aboutNav');
const portfolioNav = document.querySelector('#portfolioNav');


backArrow.addEventListener('click', (e) => {
    e.preventDefault()

    backArrow.remove()
    transitonNav("index.html?preview")
})
aboutNav.addEventListener('click', (e) => {
    e.preventDefault()

    transitonNav("about.html")
})
portfolioNav.addEventListener('click', (e) => {
    e.preventDefault()

    transitonNav("cases.html")
})


// transition between pages

const transitonNav = function(location) {
    const url = window.location.href
    console.log(url);
    if(!url.includes(location)) {
        animateSVGsection.style.zIndex = "1000"
        transitionSVG.setAttribute("d", "M-4,960.2V-110H606V960.2c0,0-102.9,780.1-164.8,0s-152.5-64.5-152.5-64.5s-87,464.2-123.8,0C164.9,895.7,92.7-258.3-4,960.2z")
        setTimeout(()=> {
            window.location.href= location
    
        }, 1500)
    }
}

