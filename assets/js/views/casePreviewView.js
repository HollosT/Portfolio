// import caseView from './caseBodyView.js';
import View from './View.js';


class CasePreview extends View {
    _parentElement = document.querySelector('.portfolio_introduction');
    _readMoreBtnP = document.querySelectorAll('#portfolio_introduction-btn--p');
    _btnTriangle = document.querySelectorAll('.portfolio_introduction-readBtn--triangle');

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

            // checking if there is already a container open
            const caseContainer = btn.closest('.case-container');
            if(caseContainer) caseContainer.remove()
            
           handler(btn.dataset.btn)
        
            })
        } catch(err) {
            console.log(err);
        }
    }

    updateBtn(status) {
        if(status) {
            this._parentElement.querySelector('#portfolio_introduction-btn--p').innerHTML = `Read more`;
            this._parentElement.querySelector('.portfolio_introduction-readBtn--triangle').classList.remove('portfolio_introduction-readBtn--triangleRotate');
        } else {
            this._parentElement.querySelector('#portfolio_introduction-btn--p').innerHTML = `Read less`;
            this._parentElement.querySelector('.portfolio_introduction-readBtn--triangle').classList.add('portfolio_introduction-readBtn--triangleRotate');
        }


    }



    generateMarkup() {
        let markup = `<div class="text_box text_box--${this._data.text_box} center_text flex">`

        markup += `
            <div class="text_box-introduction">
                <div class="introduction-titletriangle">
                    <h4>${this._data.preview_title}</h4>
                    <svg id="introduction-triangle--1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 201.64 98.36">
                        <path class="cls-1" d="M0,98.36L98.36,0l103.28,39.34L0,98.36Z" />
                    </svg>
                </div>
                <div class="introduction_imgcontainer">
                    ${this._data.preview_images.map(this.generateMarkupImages)}
                </div>
                <div class="portfolio_introduction-list">
                    <ul>${this._data.preview_list.map(this.generateMarkupList).join("")}
                    </ul>
                </div>
                <btn href="#" class="btn portfolio_introduction-btn flex" data-btn="${this._data.preview_btn.data_btn}">
                    <p id="portfolio_introduction-btn--p">Read more</p>  
                    <svg class="portfolio_introduction-readBtn--triangle" xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 14">
                        <path id="Polygon_12" data-name="Polygon 12" class="cls-1" d="M13.5,0,27,14H0Z" transform="translate(27 14) rotate(180)"/>
                    </svg>
                </btn>
            
                <div class="cases-container cases-container--${this._data.preview_btn.data_btn}" data-case="${this._data.preview_btn.data_btn}">
                </div>

            <svg class="business_value-figure--desktop-1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="177" height="206" viewBox="0 0 177 206">
            <defs>
                <filter id="Path_28">
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood flood-opacity="0.161" result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-type="innerShadowGroup">
                <path id="Path_28-2" data-name="Path 28" class="cls-1" d="M0,0H177L45.539,12.688,0,206Z" />
                <g class="cls-3" transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path id="Path_28-3" data-name="Path 28" class="cls-2" d="M0,0H177L45.539,12.688,0,206Z" />
                </g>
            </g>
        </svg>
         <svg class="business_value-figure--desktop-2" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="325" height="165" viewBox="0 0 325 165">
            <defs>
                <filter id="Path_25">
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood flood-opacity="0.161" result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-type="innerShadowGroup">
                <path id="Path_25-2" data-name="Path 25" class="cls-1" d="M290.468,145.294,325,0V165H0Z" />
                <g class="cls-3" transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path id="Path_25-3" data-name="Path 25" class="cls-2"
                        d="M290.468,145.294,325,0V165H0Z" />
                </g>
            </g>
        </svg>
        <svg class="introduction-figure introduction-figure--1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 447 118.22">
                <defs>
                    <filter id="Path_26">
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood flood-opacity="0.161" result="color" />
                        <feComposite operator="out" in="SourceGraphic" in2="blur" />
                        <feComposite operator="in" in="color" />
                        <feComposite operator="in" in2="SourceGraphic" />
                    </filter>
                </defs>
                <g data-type="innerShadowGroup">
                    <path id="Path_26-2" data-name="Path 26" class="cls-1"
                        d="M0,0,22.438,97.366l207.921,15.593L437.1,97.366,447,0V118.22H0Z" />
                    <g class="cls-3" transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path id="Path_26-3" data-name="Path 26" class="cls-2"
                            d="M0,0,22.438,97.366l207.921,15.593L437.1,97.366,447,0V118.22H0Z" />
                    </g>
                </g>
        </svg>
        `
        markup += '</div>'

        return markup;
    }

    generateMarkupImages(img) {
        return `
            <img class="introduction_gjoelkro-img--desktop
                ${img.img_class}" src="assets/img/${img.img_src}" alt="${img.img_alt}"
            >
        `
    }

    generateMarkupList(list) {
        return ` 
            <li>
                <i class="${list.list_iconClass}"></i>
                <p>${list.list_item}</p>
            </li>`;
    }


}

export default new CasePreview()

