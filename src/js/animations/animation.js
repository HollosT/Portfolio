const overlayContainer = document.querySelector('.overlay-container');
const titleContainer = document.querySelector('.hero-section')
const businessValue = document.querySelector('.business-value')
const heroSection = document.querySelector('.hero-section')
const overlayContainerDiv = document.querySelector('.overlay-container-div')
const articleContainer = document.querySelector('.article-container')
const iconContainer = document.querySelector('#articleIconCon')
const icons = document.querySelectorAll('.article-icons')
const articleBox = document.querySelectorAll('.article-box')
const articleBtn = document.querySelectorAll('.article-btn')
const navbar = document.querySelector('.navbar')
const titleIntroductionContainer = document.querySelector('.title-introduction_container');
const ctaScroll = document.querySelector('.cta-scroll')
const ctaPara = document.querySelector('.cta-scroll-p')


// Main container
let startingYOffset = window.pageYOffset
const curOcXPos = overlayContainer.getBoundingClientRect().x
let ocXPos;




window.addEventListener('DOMContentLoaded', (e) => {
    if (window.location.href.includes('preview')) {
        titleIntroductionContainer.classList.add('hide')
        overlayContainer.classList.add('max-view')


        overlayContainer.style.backgroundColor = 'var(--black)'

        // overlayContainer.classList.add('stop-scroll')

        overlayContainerDiv.classList.remove('hide')
        articleContainer.classList.add('article-container-animation')

    }
})



    window.addEventListener('scroll', () => {
       ocXPos = overlayContainer.getBoundingClientRect().x
    
        const halfCurOcXPos = curOcXPos / 2 
    
        // Keeping track how far is the left side of the body
        if (!ocXPos === 0 || ocXPos > 0) {

            if( halfCurOcXPos >= ocXPos) {
                ctaScroll.classList.remove('hide')
                ctaPara.innerHTML = 'just a little bit more...'
                
                
            } else {
                ctaScroll.classList.add('hide')

            }
    
            //Scrolling down --> increasing the width of the div
            if (window.pageYOffset > startingYOffset) {
                startingYOffset = window.pageYOffset;
               if(halfCurOcXPos / 2 >= ocXPos) {
                ctaPara.innerHTML = 'Almost there...'
               } 


                overlayContainer.style.width = Number.parseFloat(getComputedStyle(overlayContainer).width, 10) + 15 + 'px';
                overlayContainer.style.height = Number.parseFloat(getComputedStyle(overlayContainer).height, 10) + 25 + 'px';
                
           
            }
            // Scrolling up --> decreasing the width of the div
            else if (window.pageYOffset < startingYOffset) {

                // If the very top of the page is reached --> cannot scroll up more --> restarting the position of the div
                if (window.pageYOffset === 0) {
                    
                    
                    overlayContainer.style.width = '5vw';
                    overlayContainer.style.height = '110vh';
                    startingYOffset = 0;
                }
                startingYOffset = window.pageYOffset;
                ctaPara.innerHTML = 'we were so close...'
                overlayContainer.style.width = Number.parseFloat(getComputedStyle(overlayContainer).width, 10) - 15 + 'px';
                overlayContainer.style.height = Number.parseFloat(getComputedStyle(overlayContainer).height, 10) - 25 + 'px';
            }
    
    
        } 
        // If the distance between the left side and the div is 0 -->
        // fix the div to the viewport
        // prepare the template
        else {

            window.location.href = "index.html?preview"
        }
    
    })
    

// ICONS in the main container
let parentPos;
let childPos;
let isMouseover = false

window.addEventListener('DOMContentLoaded', async (e) => {
    try {
        await animation()
    } catch (err) {

    }
})

const animation = async function () {
    try {
        parentPos = iconContainer.getBoundingClientRect()
        let duration = 500

        icons.forEach((icon, count) => {
            // Trasnlate on the X or Y axis
            let xy = true
            
            // Giving a random period of time for each icon and for its interval --> to calculate a new distance
            
             duration = calcDuration() * 1000;

            // Getting the starting position for each icons
            childPos = icons[count].getBoundingClientRect()

            icon.style.transitionDuration = `${duration}ms`
            
    
            
            // After each icons transformation expired it will be called again --> giving new distance with new duration
            const iconInt = setInterval(function () {
                if(!isMouseover) {
                    duration = calcDuration() * 1000
                    calcDistancFromTop(xy)
                        .then(data => {
                            icon.style.transform = `translate${xy ? 'Y' : 'X'}(${data}px)`
                            if (data > 0) {
                                xy = false
                            } else {
                                xy = true
                            }
                        })
                } else {
                    clearInterval(iconInt)
                }
            }, duration)

        })
    } catch (err) {
        console.log(err);
    }
}

// Generating a random number between 1 and 10 --> set the duration for the animation
const calcDuration = function () {
        return Math.floor(Math.random() * 6) + 3;
}

// Generating a random distance between the height of the parent container and the half of it --> set the route for the icons
const calcDistancFromTop = function (xy) {
    return new Promise((resolve, reject) => {
        let relativePos = {}
        const dest = Math.floor(Math.random() * 2) + 1;

        if (xy) {
            // Referencing: https://www.codegrepper.com/code-examples/javascript/javascript+get+element+position+relative+to+parent

            // Calculating the distance between the parent element top and its child element top
            relativePos.top = childPos.top - parentPos.top
            // console.log(`From top: ${relativePos.top}`);

            let max = Math.floor(relativePos.top);
            const min = Math.floor(relativePos.top / 2)

            if (dest == 2) {
                max = -max
            }

            // return a random value between the top of the parent element and a minimum value
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        } else {
            // Calculating the distance between the parent element left and its child element left --> its relative
            relativePos.right = childPos.right - parentPos.right
            // console.log(`From right: ${relativePos.right}`);

            let max = Math.floor(relativePos.right);
            const min = Math.floor(relativePos.right / 2)

            if (dest == 2) {
                max = -max
            }
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        }

    })
}

iconContainer.addEventListener('mouseover', (e) => {
    isMouseover = true
})
iconContainer.addEventListener('mouseout', (e) => {
    isMouseover = false
    animation()
})



// Animation to the next page
articleContainer.addEventListener('click',  (e) => {
    const mobileCheck = window.innerWidth 
    if(mobileCheck >= 750) {
       
        e.preventDefault();
        const btn = e.target.closest('.article-btn')
        if(!btn) return


        const parentEl = btn.parentElement
        const articleNum = parentEl.dataset.article

        // get the color of the clicked card
        localStorage.removeItem('color')
        const boxColor = parentEl.dataset.article
        localStorage.setItem('color', boxColor)

        
        const reParentElLeft = parentEl.getBoundingClientRect().left
        const reParentElTop = parentEl.getBoundingClientRect().top

        parentEl.style.zIndex = '100'
 
        articleBox.forEach((article,count) => {
            const curElLeft = article.getBoundingClientRect().left
            const curElTop = article.getBoundingClientRect().top
                


            article.style.transform = `translate(${reParentElLeft - curElLeft}px, ${reParentElTop - curElTop}px)`
            
            if(articleNum != count + 1) {
                article.classList.add('article-animation')
                article.style.position = 'relative'

                
            }
   
            else {
                const children = [...article.children]
                children.forEach(child => {
                    child.remove()
                })

            
                article.classList.add('article-animation-clicked-grow')
      
                article.style.opacity = '1'
                article.style.scale = '1'
             
                // Aniamtion start
                article.addEventListener('animationstart', (e) => {
                    document.body.classList.add('stop-scroll')
    
                })

                // Checking whether the div filled out the whole window --> Navigate to the applicable page
                const animationInt = setInterval( function() {

                    if(article.getBoundingClientRect().x <= 0 && article.getBoundingClientRect().y <= 0 ) {
                        clearInterval(animationInt);

                        
                        articleNum == 3 ? window.location.href = "about.html" : window.location.href = "cases.html"
                    }

                },100 )

            } 
        })
    } 

     
})




