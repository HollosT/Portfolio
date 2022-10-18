const upArrow = document.querySelector('#upArrow')



// // Observing the up arrow

const arrowObs = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    // prepare animation
    console.log('passed');
    animateArrow()
}

const arrowObserver = new IntersectionObserver(arrowObs, {
    root: null,
    threshold: .15,
})

arrowObserver.observe(upArrow);
    

const animateArrow = function() {
    upArrow.classList.add('arrow-animation')

}

upArrow.addEventListener('click', (e) => {
    document.querySelector('#nav').scrollIntoView({behavior: 'smooth'})
})
