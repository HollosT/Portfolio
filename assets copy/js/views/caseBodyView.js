import CasePreview from "./casePreviewView.js";


class Case {
    _parentElement = document.querySelector('.cases-container');

    _data;
    

    // Hide the content container
    clearCaseContainer() {
        this._parentElement.innerHTML = '';
    }

    // Render tab btns
    async renderBtn (data) {
       try {
            this.data = data

            const btns = this.data.tabs
            let markup = '<div class="cases_tab-container">';
            for (let i = 0; btns.length > i; i++) {
                markup += `<button class="cases_btn cases_tab ${i + 1 == 1 ? 'cases_btn--active' : ''}"  data-tab="${btns[i].tab_data}">${i + 1}. ${btns[i].tab_content}</button>`;
            }
            markup += '</div'
            this._parentElement.insertAdjacentHTML('afterbegin', markup)

            this.addHandlerToCaseBtns()
        } catch(err) {
            console.error(err);
        }

    }

    // add event listener to the tabs
     addHandlerToCaseBtns() {

        this._parentElement.addEventListener('click', function (e) {
            const caseTabBtns = document.querySelectorAll('.cases_btn')
            const caseContentContainer = document.querySelector('.cases');
            e.preventDefault();
    
            const activeClicked = e.target.closest('.cases_btn')
            if (!activeClicked) return ;
    
            // caseContentContainer.remove();
    
            caseTabBtns.forEach(btn => btn.classList.remove('cases_btn--active'))
            activeClicked.classList.add('cases_btn--active')
            console.log(activeClicked.dataset.tab);
            this.renderContentSection(activeClicked.dataset.tab)
        })
    }

    renderContentSection(tabNumber, data) {
        this._data = data
        console.log(this._data);
        let markup = `
            <div class="cases">
                <div class="cases_content cases_content--">
                ${this.renderContentSectionBody(tabNumber, this._data)}
                </div>
                <div class="cases_image-container">
                    ${this.renderImage(tabNumber, this._data)}
                </div>
            </div>
            `;
        this._parentElement.insertAdjacentHTML('beforeend', markup);     
    }


    renderContentSectionBody(tabNumber, data) {
        const content = this.findContent(tabNumber, data);
        console.log(content);
        let markup = '';
        for (let i = 0; content.texts.length > i; i++) {
            markup += `
                    <h5>${content.texts[i].subTitle}</h5>
                    <p>
                    ${content.texts[i].body}
                    </p>
                    `;
        }
        return markup
    }
    
    renderImage(tabNumber, data) {
        const imgContent = this.findContent(tabNumber, data);
       
        let markup = `
                <img src="./assets/img/${imgContent.image.image_src}" alt="${imgContent.image_alt}">
            `
        return markup;
    }
    
    findContent(tabNumber, data) {
        this.data = data.content
        for (let i = 0; this.data.length > i; i++) {
            if (tabNumber == this.data[i].content_data) 
            return this.data[i];
        }
    }
}

export default new Case()