const pathSVG = document.querySelector('#aboutSVGpath')
const arrowSVG = document.querySelector('#aboutArrowPath')
const aboutSVG = document.querySelector('#aboutSVG');
const aboutIntroductionContainer = document.querySelector('.about-introduction');
const allSectios = document.querySelectorAll('.about-article')
const aboutNature = document.querySelector('.about--nature-body')
const aboutSport = document.querySelector('.about-sport')
const mainAbout = document.querySelector('.main-about')
const articleContaienr = document.querySelector('.about-introduction-container')
const allBullets = document.querySelectorAll('.bulletpoint')
const waveUpPath = document.querySelector('#breakSVGpath')
const waveDownPath = document.querySelector('#breakSVGpath2')
const waveDownPathShadow = document.querySelector('#breakShadowSVGpath2')
const imgContainers = document.querySelectorAll('.about-img-container')

const waveDown = document.querySelector('#aboutBreakSVG2')



let scrollHappen = false

window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 0) scrollHappen = true 
})

// Revailing sections
const revealIntro = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;
    
    if(entry.isIntersecting && scrollHappen) {
        entry.target.classList.remove('hidden-article');
        observer.unobserve(entry.target);
        svgAnimation()
        // articleContaienr.style.backgroundColor = 'var(--lightgreen)'
    }
}

const sectionObserve = new IntersectionObserver(revealIntro, {
    root: null,
    threshold: 0.08,

    
})

allSectios.forEach(function(section) {
    sectionObserve.observe(section);
    section.classList.add('hidden-article')
})

// Start of the SVG animation
const svgAnimation = function() {
    // pathSVG.setAttribute("d", "M-6,0h606v438.7c-34.6-5.2-83.7-11.6-143.1-15.6c-114.3-7.6-176.5-11.7-239.8,3.1 C60.8,462.9-16.6,595.4-41.4,575.8c-15.2-12,13.7-61.3,28-193.1c5.3-48.4,3.9-64.3-6.2-77.9c-36.9-49.6-148.2-11.6-155.7-34.3 c-7.2-21.9,98.6-50.2,146.4-140.2C-4.5,84.3-2.7,36.1-6,0z")
}


