import View from './View.js'

class Case extends View {
    _parentElement = document.querySelector('.portfolio_introduction');
    _data;
    
    generateMarkup(id) {
        let markup = `
                <div class="cases-link-container"><h3> See it:</h3>`
                    
                this._data.forEach((link) => {
                        markup += 
                        `<a class="cases-link" href="${link.link}" onclick="window.open('${link.link}')"> ${link.link_name} </a>`
                    
                    })  
           markup += `</div> `;   

           return markup;
    }

}

export default new Case()