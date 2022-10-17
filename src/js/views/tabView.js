import View from './View.js'


class Tabs extends View {
    _parentElement = document.querySelector('.portfolio_introduction');
    _data;
    
 
    // add event listener to the tabs
    async addHandlerTabs(handler) {

      try {
            
            this._parentElement.addEventListener('click', function (e) {
              e.preventDefault();
              const caseTabBtns = document.querySelectorAll('.cases_btn')
              const caseContentContainer = document.querySelector('.cases');

              const clicked = e.target.closest('.cases_btn')
              if (!clicked) return ;
             
            
              caseContentContainer.remove();
              
              caseTabBtns.forEach(btn => btn.classList.remove('cases_btn--active'))
              clicked.classList.add('cases_btn--active')


              // It is needed to know to which case-container I have to use to insert the content
              const directParentContainerNumber = clicked.closest('.cases-container').dataset.case
              handler(clicked.dataset.tab, directParentContainerNumber);
              
            })
          }catch(err){
            console.log(err);
          }
        }
        
        
        generateMarkup() {

          let markup = '<div class="cases_tab-container">'
          this._data.forEach((tab, count) => {
             markup +=  `<button class="cases_btn cases_tab ${count + 1 == 1 ? 'cases_btn--active' : ''}"  data-tab="${tab.tab_data}">${count + 1}. ${tab.tab_content}</button>`;
          })
          markup += '</div'
          return markup;
         
        }

}

export default new Tabs();