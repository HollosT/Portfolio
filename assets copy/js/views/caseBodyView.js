// import CasePreview from "./casePreviewView.js";
import View from './View.js';



class Case extends View {
    _parentElement = document.querySelector('.cases-container');
    _data;
    
    generateMarkup(tab) {

        console.log(this._data, tab);
        
        const curTabData = this.findContent(tab)
        console.log(curTabData);

        return `
            <div class="cases">
                ${this.renderContentSectionBody(curTabData)}
            </div>
        `;   
    }

    renderContentSectionBody(curTab) {

        let markup = '<div class="cases_content cases_content--1"> '
            curTab.texts.forEach(text => {
                markup += 
                        `<h5>${text.subTitle}</h5>
                         <p>${text.body}</p>`
            })

        markup += 
                `</div>
                <div class="cases_image-container">
                    <img src="./assets/img/${curTab.image.image_src}" alt="${curTab.image.image_alt}">
                </div>`
            return markup;
    }
    
    
    findContent(tab) {
        console.log(this._data);
        for (let i = 0; this._data.content.length > i; i++) {
            if (tab === this._data.content[i].content_data) 
            return this._data.content[i];
        }
    }
}

export default new Case()