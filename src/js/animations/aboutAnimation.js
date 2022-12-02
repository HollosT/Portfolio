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
const skillContainer = document.querySelector('.skills-container')
const skills = document.querySelectorAll('.skill-container')

const waveDown = document.querySelector('#aboutBreakSVG2')


let scrollHappen = false

// window.addEventListener('scroll', (e) => {
//     if(window.pageYOffset > 0) scrollHappen = true 
// })

// Revailing sections
const revealIntro = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;
    
    if(entry.isIntersecting ) {;
        entry.target.classList.remove('hidden-article');
        observer.unobserve(entry.target);


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



// Skills slider
const currSkills = [...skills]

const preparSkills = function() {

    resetSkills()

    currSkills.forEach((skill, i) => {
        skill.classList.remove('active-skill');
        skill.classList.remove('final-active');
        if(1 === i) {
            skill.classList.add('active-skill')

            setTimeout(() => {
                skill.classList.add('final-active')
            }, 1000)
        }
        skill.style.transform = `translateX(${150 * (i - 1)}%)`
    });
}

const resetSkills = function() {


    currSkills.forEach(s => {
        s.removeEventListener('mouseenter', nextSkill)
        s.removeEventListener('mouseenter', prevSkill)

        s.style.transform = `translateX(0%)`

        s.classList.contains('active-skill') ? s.classList.remove('active-skill') : ''
    })

}

const nextSkill = function() {

    currSkills.push(currSkills.shift())

    preparSkills()
    addHandler()
    
}

const prevSkill = function() {
    currSkills.unshift(currSkills.pop())

    preparSkills()
    addHandler()
}

const addHandler = function() {
    currSkills[2].addEventListener('mouseenter', nextSkill)
    currSkills[0].addEventListener('mouseenter', prevSkill)
}


const init = function() {
    preparSkills()
    addHandler()
}

init()