import View from './View.js'


class CasePreview extends View {
    _parentElement = document.querySelector('.portfolio_introduction');
    _readMoreBtnP = document.querySelectorAll('#portfolio_introduction-btn--p');
    _btnTriangle = document.querySelectorAll('.portfolio_introduction-readBtn--triangle');
    _portfolioList = document.querySelector('.portfolio_introduction-list')

    async addHandlerPreview(handler) {
        try{
                window.addEventListener('DOMContentLoaded', (e) => {
                handler()
            })
        } catch(err) {
            console.log(err);
        }
    }


   async addHandlerToBtn(handler) {
       try{ 
            this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.portfolio_introduction-btn');
            
            if(!btn) return
            
            handler(btn.dataset.btn)
            })
        } catch(err) {
            console.log(err);
        }
    }
   async addHandlerToArrow(handler) {
       try{ 
            this._parentElement.addEventListener('click', function(e) {
            const arrow = e.target.closest('.arrow');
            
            if(!arrow) return
            console.log(arrow.dataset.arrow);
            
            handler(arrow.dataset.arrow)
            })
        } catch(err) {
            console.log(err);
        }
    }
   async addHandlerToMobileArrow(handler) {
       try{ 
            this._parentElement.addEventListener('click', function(e) {
            const mobileArrow = e.target.closest('.mobile-arrow');
            
            if(!mobileArrow) return
        
            
            handler(mobileArrow.dataset.mobile)
            })
        } catch(err) {
            console.log(err);
        }
    }


    animationOpen( btnNumber) {
       const curBtn = document.querySelector(`.portfolio_introduction-btn--${btnNumber}`)
        const imgContainer = document.querySelector(`.container-img--${btnNumber}`)
        const casesContainer = document.querySelector(`.cases-container--${btnNumber}`)
        const caseContainer = document.querySelector(`.case-container--${btnNumber}`)
        const wave = document.querySelector(`#wave--${btnNumber}`)
        const wave2 = document.querySelector(`#wave2--${btnNumber}`)
        const arrow = document.querySelector(`#arrow--${btnNumber}`)
        const arrow2 = document.querySelector(`#arrow2--${btnNumber}`)
        const svgContainer = document.querySelectorAll('.svgcontainer')
       const list = document.querySelector(`.list--${btnNumber}`)
       const mobileArrow = document.querySelector(`#cases-container-close--mobile-${btnNumber}`)
        const mobileCheck = window.innerWidth;

            svgContainer.forEach(svg => svg.style.setProperty('--svgContainerZ', '5'))

          

            // Adjusting the height of the container
            caseContainer.classList.add('grow-length')
            caseContainer.classList.remove('reduce-length')

            
            // Mid point of the SVG animation
            wave.setAttribute("d", "M13.1,479.7c33.7-22.9,89-52.9,155.7-49.9c172.9,7.7,295.7,230.9,339.5,204.1c24.6-15.1-12-87,22.3-115 c43.5-35.6,144.6,45.8,170.7,18.6c30.9-32.3-85.8-173.1-55.7-204.1c23.1-23.7,108.9,40.2,126.1,20.4c21.4-24.7-107-129-148.4-298.7 c-16.5-67.5-14.7-126.7-10.4-167C486.3-196.5,359.8-281,233.2-365.5C67-267.1,31.1-193.9,35-142.3c3,39.7,31.1,84.7,15.9,97.7 C33-29.3-23.1-77.1-33.6-65C-44.5-52.4,8.6,5.7-4.5,22.5c-11.1,14.4-59.6-15.2-71,0.1c-10.1,13.5,21,46,11.6,59.2 c-10.1,14.1-51.6-14.4-89.3-12c-33.3,2.1-80.4,29.1-133.6,150.5C-186.9,306.7-86.9,393.2,13.1,479.7z")
            wave2.setAttribute("d", "M13.1,479.7c33.7-22.9,89-52.9,155.7-49.9c172.9,7.7,295.7,230.9,339.5,204.1c24.6-15.1-12-87,22.3-115 c43.5-35.6,144.6,45.8,170.7,18.6c30.9-32.3-85.8-173.1-55.7-204.1c23.1-23.7,108.9,40.2,126.1,20.4c21.4-24.7-107-129-148.4-298.7 c-16.5-67.5-14.7-126.7-10.4-167C486.3-196.5,359.8-281,233.2-365.5C67-267.1,31.1-193.9,35-142.3c3,39.7,31.1,84.7,15.9,97.7 C33-29.3-23.1-77.1-33.6-65C-44.5-52.4,8.6,5.7-4.5,22.5c-11.1,14.4-59.6-15.2-71,0.1c-10.1,13.5,21,46,11.6,59.2 c-10.1,14.1-51.6-14.4-89.3-12c-33.3,2.1-80.4,29.1-133.6,150.5C-186.9,306.7-86.9,393.2,13.1,479.7z")
            
            // End point of the SVG animation
            setTimeout(() => {
                // Hiding the applicable content
                imgContainer.classList.add('hide')
                list.classList.add('hide')
               curBtn.classList.add('hide')
               
               
               wave.setAttribute("d", "M223.1,588.8c76.3-63,157.3-111.3,209.1-84.7c54.6,28,63.2,132.2,75.9,129.7c11.6-2.3-13.1-86.1,22.3-115 c43.5-35.6,144.6,45.8,170.7,18.6c30.9-32.3-85.8-173.1-55.7-204.1c19.8-20.3,92.6,45.1,126.1,20.4c24.6-18,9.9-70,6.3-108.9 c-6.1-66.4,13.9-162.4,131.4-290.4c-36.9-2.3-73.7-4.6-110.6-6.9C632.8,57,598.7,139.9,600,196.5c0.6,27.3,10.2,84.1-12.2,95.1 c-20.7,10.1-54.1-26-66.5-15.7c-13.5,11.1,17.1,61.2,4.2,71c-11.6,8.9-46.3-24.6-57-15.6c-8.8,7.5,10.8,33.3,0,51.9 c-9.6,16.3-36.8,16.6-43.2,16.9c-35.6,1.4-117.8,29.6-305.9,128.3C154,548.5,188.6,568.6,223.1,588.8z")
               wave2.setAttribute("d", "M223.1,588.8c76.3-63,157.3-111.3,209.1-84.7c54.6,28,63.2,132.2,75.9,129.7c11.6-2.3-13.1-86.1,22.3-115 c43.5-35.6,144.6,45.8,170.7,18.6c30.9-32.3-85.8-173.1-55.7-204.1c19.8-20.3,92.6,45.1,126.1,20.4c24.6-18,9.9-70,6.3-108.9 c-6.1-66.4,13.9-162.4,131.4-290.4c-36.9-2.3-73.7-4.6-110.6-6.9C632.8,57,598.7,139.9,600,196.5c0.6,27.3,10.2,84.1-12.2,95.1 c-20.7,10.1-54.1-26-66.5-15.7c-13.5,11.1,17.1,61.2,4.2,71c-11.6,8.9-46.3-24.6-57-15.6c-8.8,7.5,10.8,33.3,0,51.9 c-9.6,16.3-36.8,16.6-43.2,16.9c-35.6,1.4-117.8,29.6-305.9,128.3C154,548.5,188.6,568.6,223.1,588.8z")
            }, 800)
            
            // Giving the right z-index
            curBtn.style.zIndex = '1'
            list.style.zIndex = '1'
            setTimeout(() => {

                casesContainer.classList.remove('hide')
              

                caseContainer.style.backgroundColor = 'var(--white)' 
                
            }, 1000)
            setTimeout(() => {

                if(mobileCheck <= 750) {
                    mobileArrow.classList.remove('hide')
                }
                curBtn.style.zIndex = '111'

               
                arrow.classList.remove('hide')
                arrow2.classList.remove('hide')
                
                svgContainer.forEach(svg => svg.style.setProperty('--svgContainerZ', '1'))
             
            }, 1700)

            arrow.addEventListener('mouseenter', (e) => {
            
                arrow.setAttribute("d", "M554.1,386.5c0.3-0.2,6.2-4.5,6.4-4.6c1.6-1.1,2.6-1.9,3-2.2c2.3-1.4,3.4-2.1,4.6-2c2.8,0.2,4.7,4.5,5.5,6.4 c1.7,4,1,5.7,2.3,6.4c2.9,1.5,10.5-5.7,9.4-8.1c-0.4-0.9-1.8-0.4-4.6-1.5c-3.6-1.4-7.4-4.5-7-7c0.2-1,1-1.9,2.2-3 c0.6-0.6,1.3-0.9,2.8-2c0,0,7.6-5.4,7.6-5.4c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.3-0.4l-36.5-15.2c-0.3-0.1-0.7,0.1-0.6,0.5 l4.4,38.2C553.4,386.6,553.8,386.7,554.1,386.5z")
                arrow2.setAttribute("d", "M554.1,386.5c0.3-0.2,6.2-4.5,6.4-4.6c1.6-1.1,2.6-1.9,3-2.2c2.3-1.4,3.4-2.1,4.6-2c2.8,0.2,4.7,4.5,5.5,6.4 c1.7,4,1,5.7,2.3,6.4c2.9,1.5,10.5-5.7,9.4-8.1c-0.4-0.9-1.8-0.4-4.6-1.5c-3.6-1.4-7.4-4.5-7-7c0.2-1,1-1.9,2.2-3 c0.6-0.6,1.3-0.9,2.8-2c0,0,7.6-5.4,7.6-5.4c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.3-0.4l-36.5-15.2c-0.3-0.1-0.7,0.1-0.6,0.5 l4.4,38.2C553.4,386.6,553.8,386.7,554.1,386.5z")
            });
            arrow.addEventListener('mouseleave', (e) => {
                arrow.setAttribute("d", "M563.6,393.9c0.3-0.2,6.2-4.5,6.4-4.6c0.1-0.1,3-2.1,3-2.2c0.1,0,2.5-1.8,2.5-1.8c0,0,1.4-1,1.5-1c0,0,1.4-1,1.4-1 c0,0,1.3-0.9,1.3-0.9c0.7-0.5,1.4-1,2.1-1.5c0.5-0.4,1-0.7,1.5-1.1c0.6-0.5,1.3-0.9,1.9-1.4c0,0,2.7-2,2.8-2c0,0,7.6-5.4,7.6-5.4 c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.3-0.4l-36.5-15.2c-0.3-0.1-0.7,0.1-0.6,0.5l4.4,38.2C562.9,394,563.3,394.1,563.6,393.9z")
                arrow2.setAttribute("d", "M563.6,393.9c0.3-0.2,6.2-4.5,6.4-4.6c0.1-0.1,3-2.1,3-2.2c0.1,0,2.5-1.8,2.5-1.8c0,0,1.4-1,1.5-1c0,0,1.4-1,1.4-1 c0,0,1.3-0.9,1.3-0.9c0.7-0.5,1.4-1,2.1-1.5c0.5-0.4,1-0.7,1.5-1.1c0.6-0.5,1.3-0.9,1.9-1.4c0,0,2.7-2,2.8-2c0,0,7.6-5.4,7.6-5.4 c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.3-0.4l-36.5-15.2c-0.3-0.1-0.7,0.1-0.6,0.5l4.4,38.2C562.9,394,563.3,394.1,563.6,393.9z")
            })

            
   
    }
    animationClose(btnNumber) {
       const curBtn = document.querySelector(`.portfolio_introduction-btn--${btnNumber}`)
        const imgContainer = document.querySelector(`.container-img--${btnNumber}`)
        const casesContainer = document.querySelector(`.cases-container--${btnNumber}`)
        const caseContainer = document.querySelector(`.case-container--${btnNumber}`)
        const wave = document.querySelector(`#wave--${btnNumber}`)
        const wave2 = document.querySelector(`#wave2--${btnNumber}`)
        const arrow = document.querySelector(`#arrow--${btnNumber}`)
        const arrow2 = document.querySelector(`#arrow2--${btnNumber}`)
        const svgContainer = document.querySelectorAll('.svgcontainer')
       const list = document.querySelector(`.list--${btnNumber}`)
       const mobileArrow = document.querySelector(`#cases-container-close--mobile-${btnNumber}`)
       const mobileCheck = window.innerWidth;

     
            // Adjusting the height of the container
            svgContainer.forEach(svg => svg.style.setProperty('--svgContainerZ', '90'))
            

            if(mobileCheck <= 750) {
                mobileArrow.classList.add('hide')
            }
            // Hiding arrow
            arrow.classList.add('hide')
            arrow2.classList.add('hide')
            
            
            // starting point of the svg
            wave.setAttribute("d", "M13.1,479.7c33.7-22.9,89-52.9,155.7-49.9c172.9,7.7,295.7,230.9,339.5,204.1c24.6-15.1-12-87,22.3-115 c43.5-35.6,144.6,45.8,170.7,18.6c30.9-32.3-85.8-173.1-55.7-204.1c23.1-23.7,108.9,40.2,126.1,20.4c21.4-24.7-107-129-148.4-298.7 c-16.5-67.5-14.7-126.7-10.4-167C486.3-196.5,359.8-281,233.2-365.5C67-267.1,31.1-193.9,35-142.3c3,39.7,31.1,84.7,15.9,97.7 C33-29.3-23.1-77.1-33.6-65C-44.5-52.4,8.6,5.7-4.5,22.5c-11.1,14.4-59.6-15.2-71,0.1c-10.1,13.5,21,46,11.6,59.2 c-10.1,14.1-51.6-14.4-89.3-12c-33.3,2.1-80.4,29.1-133.6,150.5C-186.9,306.7-86.9,393.2,13.1,479.7z")
            wave2.setAttribute("d", "M13.1,479.7c33.7-22.9,89-52.9,155.7-49.9c172.9,7.7,295.7,230.9,339.5,204.1c24.6-15.1-12-87,22.3-115 c43.5-35.6,144.6,45.8,170.7,18.6c30.9-32.3-85.8-173.1-55.7-204.1c23.1-23.7,108.9,40.2,126.1,20.4c21.4-24.7-107-129-148.4-298.7 c-16.5-67.5-14.7-126.7-10.4-167C486.3-196.5,359.8-281,233.2-365.5C67-267.1,31.1-193.9,35-142.3c3,39.7,31.1,84.7,15.9,97.7 C33-29.3-23.1-77.1-33.6-65C-44.5-52.4,8.6,5.7-4.5,22.5c-11.1,14.4-59.6-15.2-71,0.1c-10.1,13.5,21,46,11.6,59.2 c-10.1,14.1-51.6-14.4-89.3-12c-33.3,2.1-80.4,29.1-133.6,150.5C-186.9,306.7-86.9,393.2,13.1,479.7z")
            
            // End point of the SVG animation
            setTimeout(() => {
                curBtn.classList.remove('hide')
                
                // Hiding the applicable content
                imgContainer.classList.remove('hide')
                list.classList.remove('hide')
                
                casesContainer.classList.add('hide')
                
                caseContainer.classList.remove('grow-length')
                caseContainer.classList.add('reduce-length')
                caseContainer.style.backgroundColor = 'var(--case-bg)' 


                  wave.setAttribute("d", "M-48,210c32.7-15.3,44.4-32.6,48.7-46.4c5-15.9,1.6-31.8,11.9-38.2c10.8-6.7,24.7,4.4,29.7-1.1 c7.8-8.6-21.9-39.8-14.9-49.5c9.6-13.1,75.3,27.8,87.5,13.2c9.8-11.8-27.2-45.3-16-67.7c9-17.9,40.6-10.8,74.2-21 c28.3-8.6,63-31.1,94.8-90.3c-66.7-43-133.3-86-200-129c-87.6,50.1-106.5,87.3-104.4,113.6c1.6,20.2,16.4,43.1,8.4,49.7 c-9.4,7.8-39-16.6-44.5-10.4c-5.7,6.4,22.2,35.9,15.4,44.5c-5.9,7.3-31.4-7.7-37.4,0.1c-5.3,6.9,11.1,23.4,6.1,30.1 c-5.3,7.2-27.2-7.3-47.1-6.1C-153.2,2.5-178,16.3-206,78C-153.3,122-100.7,166-48,210z")
                  wave2.setAttribute("d", "M-48,210c32.7-15.3,44.4-32.6,48.7-46.4c5-15.9,1.6-31.8,11.9-38.2c10.8-6.7,24.7,4.4,29.7-1.1 c7.8-8.6-21.9-39.8-14.9-49.5c9.6-13.1,75.3,27.8,87.5,13.2c9.8-11.8-27.2-45.3-16-67.7c9-17.9,40.6-10.8,74.2-21 c28.3-8.6,63-31.1,94.8-90.3c-66.7-43-133.3-86-200-129c-87.6,50.1-106.5,87.3-104.4,113.6c1.6,20.2,16.4,43.1,8.4,49.7 c-9.4,7.8-39-16.6-44.5-10.4c-5.7,6.4,22.2,35.9,15.4,44.5c-5.9,7.3-31.4-7.7-37.4,0.1c-5.3,6.9,11.1,23.4,6.1,30.1 c-5.3,7.2-27.2-7.3-47.1-6.1C-153.2,2.5-178,16.3-206,78C-153.3,122-100.7,166-48,210z")
              }, 1000)

            // Giving the right z-index
            curBtn.style.zIndex = '1'
            list.style.zIndex = '1'
            setTimeout(() => {
                curBtn.style.zIndex = '111'
                list.style.zIndex = '111'
            }, 1700)
            
    }
    



    generateMarkup() {
        let markup = `<div class="case-container case-container--${this._data.case_box}">`

        markup += `
                <div class="case-container-introduction">
                        <h4 class="case-title">${this._data.preview_title}</h4>

                        <div class="portfolio_introduction-list list--${this._data.case_box}">
                            <ul>${this._data.preview_list.map(this.generateMarkupList).join("")}
                            </ul>
                        </div>
                        <button href="#" class="btn portfolio_introduction-btn portfolio_introduction-btn--${this._data.preview_btn.data_btn}" data-btn="${this._data.preview_btn.data_btn}">
                        <p id="portfolio_introduction-btn--p">See more </p>
                        </button>
                   
                </div>
                <div class="case-container-img container-img--${this._data.case_box}">
                        ${this._data.preview_images.map(this.generateMarkupImages)}
                </div>
                
                <div class="cases-container cases-container--${this._data.preview_btn.data_btn} hide" data-case="${this._data.preview_btn.data_btn}">
                </div>
                
                <div class="svgcontainer">
                    
                    <svg id="waveSVG" viewBox="0 0 600 400" preserveAspectRatio="none" >

                    <path id="wave2--${this._data.case_box}" class="wave wave2"
                        d="M-48,210c32.7-15.3,44.4-32.6,48.7-46.4c5-15.9,1.6-31.8,11.9-38.2c10.8-6.7,24.7,4.4,29.7-1.1 c7.8-8.6-21.9-39.8-14.9-49.5c9.6-13.1,75.3,27.8,87.5,13.2c9.8-11.8-27.2-45.3-16-67.7c9-17.9,40.6-10.8,74.2-21 c28.3-8.6,63-31.1,94.8-90.3c-66.7-43-133.3-86-200-129c-87.6,50.1-106.5,87.3-104.4,113.6c1.6,20.2,16.4,43.1,8.4,49.7 c-9.4,7.8-39-16.6-44.5-10.4c-5.7,6.4,22.2,35.9,15.4,44.5c-5.9,7.3-31.4-7.7-37.4,0.1c-5.3,6.9,11.1,23.4,6.1,30.1 c-5.3,7.2-27.2-7.3-47.1-6.1C-153.2,2.5-178,16.3-206,78C-153.3,122-100.7,166-48,210z" />

                    <path id="wave--${this._data.case_box}" class="wave"
                        d="M-48,210c32.7-15.3,44.4-32.6,48.7-46.4c5-15.9,1.6-31.8,11.9-38.2c10.8-6.7,24.7,4.4,29.7-1.1 c7.8-8.6-21.9-39.8-14.9-49.5c9.6-13.1,75.3,27.8,87.5,13.2c9.8-11.8-27.2-45.3-16-67.7c9-17.9,40.6-10.8,74.2-21 c28.3-8.6,63-31.1,94.8-90.3c-66.7-43-133.3-86-200-129c-87.6,50.1-106.5,87.3-104.4,113.6c1.6,20.2,16.4,43.1,8.4,49.7 c-9.4,7.8-39-16.6-44.5-10.4c-5.7,6.4,22.2,35.9,15.4,44.5c-5.9,7.3-31.4-7.7-37.4,0.1c-5.3,6.9,11.1,23.4,6.1,30.1 c-5.3,7.2-27.2-7.3-47.1-6.1C-153.2,2.5-178,16.3-206,78C-153.3,122-100.7,166-48,210z" />


                    <path id="arrow2--${this._data.case_box}" class="arrow arrow2 hide" data-arrow="${this._data.preview_btn.data_btn}"
                        d="M563.6,393.9c0.3-0.2,6.2-4.5,6.4-4.6c0.1-0.1,3-2.1,3-2.2c0.1,0,2.5-1.8,2.5-1.8c0,0,1.4-1,1.5-1c0,0,1.4-1,1.4-1 c0,0,1.3-0.9,1.3-0.9c0.7-0.5,1.4-1,2.1-1.5c0.5-0.4,1-0.7,1.5-1.1c0.6-0.5,1.3-0.9,1.9-1.4c0,0,2.7-2,2.8-2c0,0,7.6-5.4,7.6-5.4 c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.3-0.4l-36.5-15.2c-0.3-0.1-0.7,0.1-0.6,0.5l4.4,38.2C562.9,394,563.3,394.1,563.6,393.9z" />

                    <path id="arrow--${this._data.case_box}" class="arrow hide" data-arrow="${this._data.preview_btn.data_btn}"
                    d="M563.6,393.9c0.3-0.2,6.2-4.5,6.4-4.6c0.1-0.1,3-2.1,3-2.2c0.1,0,2.5-1.8,2.5-1.8c0,0,1.4-1,1.5-1c0,0,1.4-1,1.4-1 c0,0,1.3-0.9,1.3-0.9c0.7-0.5,1.4-1,2.1-1.5c0.5-0.4,1-0.7,1.5-1.1c0.6-0.5,1.3-0.9,1.9-1.4c0,0,2.7-2,2.8-2c0,0,7.6-5.4,7.6-5.4 c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.3-0.4l-36.5-15.2c-0.3-0.1-0.7,0.1-0.6,0.5l4.4,38.2C562.9,394,563.3,394.1,563.6,393.9z" />
                    </svg>
                    <div id="cases-container-close--mobile-${this._data.case_box}" class="mobile-arrow cases-container-close--mobile hide" data-mobile="${this._data.preview_btn.data_btn}"> 
                        <p>See less </p>
                    </div>
                </div>
               
        `
        markup += '</div>'

        return markup;
    }

    generateMarkupImages(img) {
        return `
            <img class="case-img
                ${img.img_class}" src="src/img/cases/${img.img_src}" alt="${img.img_alt}"
            >
        `
    }


    generateMarkupList(list) {
        return ` 
            <li>
                <i class="${list.list_iconClass}"></i>
                <h5>${list.list_item}</h5>
            </li>`;
    }


}

export default new CasePreview()

