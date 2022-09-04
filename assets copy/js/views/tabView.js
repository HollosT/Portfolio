import View from './View.js';
import caseBodyView from './caseBodyView.js';

class Tabs extends View {
    _parentElement = document.querySelector('.cases-container');
    _data;
    // _clicked;


     generateMarkup() {
         let markup = '<div class="cases_tab-container">'
         this._data.tabs.forEach((tab, count) => {
            markup +=  `<button class="cases_btn cases_tab ${count + 1 == 1 ? 'cases_btn--active' : ''}"  data-tab="${tab.tab_data}">${count + 1}. ${tab.tab_content}</button>`;
         })
         markup += '</div'
         return markup;
        
     }
 
     // add event listener to the tabs
      addHandlerTabs(handler) {
        this._parentElement.addEventListener('click', function (e) {
        //     e.preventDefault();
        //   this.getActiveTab()
          handler();
        })
        }
        
      async getActiveTab() {
        try{let clicked;
            this._parentElement.addEventListener('click', function (e) {
                e.preventDefault();
                const caseTabBtns = document.querySelectorAll('.cases_btn')
                const caseContentContainer = document.querySelector('.cases');
                clicked = e.target.closest('.cases_btn')
                if (!clicked) return ;
                
                // caseContentContainer.remove();
                
                caseTabBtns.forEach(btn => btn.classList.remove('cases_btn--active'))
                clicked.classList.add('cases_btn--active')

                console.log(clicked.dataset.tab);
                return clicked.dataset.tab;
            })} catch(err) {
                console.log(err);
            }
    }

}

export default new Tabs();