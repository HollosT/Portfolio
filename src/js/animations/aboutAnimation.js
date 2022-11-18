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

let curSkill = 0;
const maxSkill = skills.length - 1;
let curSkillArr = []
let min = 0;
let active = 1;
let max = 2;

let eventMin = 0;
let eventMax = 2;




const adjustCurSkillArr = function (min, active, max) {
    console.log(min, max);
    resetSkills()
   skills.forEach(s => {
        s.classList.remove('rest-skill')
        s.classList.add('almost-active-skill')

    })
    curSkillArr.push(skills[min])
    curSkillArr.push(skills[active])
    curSkillArr.push(skills[max])

   goToSkill(curSkillArr, 1)
}

const resetSkills = function () {
    curSkillArr = [];
    skills.forEach(s => {
        s.classList.remove('almost-active-skill')
        s.classList.remove('active-skill')
        s.classList.add('rest-skill')

   })
    
}

const goToSkill = function (skillArr, slide) {
    console.log(skillArr);
    skillArr.forEach((skill, i) => {

        if(slide === i) {
            skill.classList.remove('almost-active-skill')
            skill.classList.add('active-skill')

            
        }
        skill.style.transform = `translateX(${200 * (i - slide)}%)`
    })
}

   


 // Next slide
 const nextSkill = function () {

    console.log(eventMax);
    eventMax++
    eventMin++

  
    // if(max === maxSkill) {
    //     max = 0
    // } else {
        max++
        active++
        min++
    // }

    adjustCurSkillArr(min, active, max)

  };

  const prevSkill = function () {

    eventMax--
    eventMin--
    
    max--
    active--
    min--

    adjustCurSkillArr(min, active, max)
  };

  const init = function () {
    // goToSkill(0);
    adjustCurSkillArr(min, active, max)
    
  };
  init();



  curSkillArr[eventMax].addEventListener('click', nextSkill)
  curSkillArr[eventMin].addEventListener('click', prevSkill)