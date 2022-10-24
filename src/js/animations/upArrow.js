const upArrow = document.querySelector('#upArrow')
const upContainer = document.querySelector('.up-container-cases')


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
    console.log(upContainer)
    upContainer.classList.remove('hide')
    upArrow.classList.add('arrow-animation')

}

upArrow.addEventListener('click', (e) => {

        document.querySelector('#header').scrollIntoView({behavior: 'smooth'})
})
