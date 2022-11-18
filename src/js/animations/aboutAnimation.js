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
const maxSkill = skills.length;
let curSkillArr = []
let cur;
let min;
let max;





const adjustCurSkillArr = function (active) {
     max =  active + 1
     min = active - 1
     cur =  active


    // console.log('min:', min, 'active:', cur, 'max:', max );

    resetSkills()
   skills.forEach(s => {
        s.classList.remove('rest-skill')
        s.classList.add('almost-active-skill')

    })

    if(max > maxSkill - 1) {
        max = 0;
    };

    curSkillArr.push(skills[min])
    curSkillArr.push(skills[cur])
    curSkillArr.push(skills[max])

   goToSkill( 1)
}

const resetSkills = function () {
    curSkillArr = [];
    skills.forEach(s => {
        s.style.transform = `translateX(0%)`
        s.classList.remove('almost-active-skill')
        s.classList.remove('active-skill')
        s.classList.add('rest-skill')

        s.removeEventListener('click', nextSkill)
        s.removeEventListener('click', prevSkill)

   })
}



const goToSkill = function (slide) {
    curSkillArr.forEach((skill, i) => {
        if(slide === i) {
            skill.classList.remove('almost-active-skill')
            skill.classList.add('active-skill')

            
        }
        skill.style.transform = `translateX(${200 * (i - slide)}%)`
    })
}



 // Next slide
 const nextSkill = function () {

    cur++
     
     adjustCurSkillArr(cur)
     
   

    addHandler()

  };

  const prevSkill = function () {
    // if(min === 0) {
    //     min = 4
    // } 
    // if(max === 0) {
    //         active = 4
    // } 

    // if(active === 0) {
    //         min = 4
    // } 
    
    // else {
    //     min++
    //     active++
    //     max++
    // }

adjustCurSkillArr( cur)



addHandler()

  };
  const addHandler = function() {

        curSkillArr[2].addEventListener('click', nextSkill)
        curSkillArr[0].addEventListener('click', prevSkill)
    }
    
    const init = function () {

        adjustCurSkillArr(1)
        addHandler()
    };
    init();
    
    