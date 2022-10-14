import View from './View.js'

class Case extends View {
    _parentElement = document.querySelector('.portfolio_introduction');
    _data;
    
    generateMarkup() {
        let markup = `
            <div class="cases ">
                <div class="cases_content cases_content--1">`
                this._data.texts.forEach(text => {
                        markup += 
                                `<h5>${text.subTitle}</h5>
                                <p>${text.body}</p>`
                    })
                markup += 
                    `</div>
                    <div class="cases_image-container">
                        <img src="./src/img/cases/${this._data.image.image_src}" alt="${this._data.image.image_alt}">
                    </div>
                    `
                      
                
           markup += `</div> `;   

           return markup;
    }

}

export default new Case()