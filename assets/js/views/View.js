

export default class View {
    _data;

    async render(data, caseContainerNumber) {
        this._data = data;

        const markup = this.generateMarkup();
        try{
            if(!caseContainerNumber) {

               
    
                this._parentElement.insertAdjacentHTML('beforeend', markup)
            }
            else {
                document.querySelector(`.cases-container--${caseContainerNumber}`).insertAdjacentHTML('beforeend', markup)
            }
        }catch(err) {
            console.log(err);
        }
    }


    

    clear() {
        this._parentElement.querySelector('.cases-container').innerHTML = '';
    }

    loading() {
        const markup = `
            <div class="load flex">
                    <div class="load_loading-dots"></div>
                    <div class="load_loading-dots"></div>
                    <div class="load_loading-dots"></div>
            </div>
        `;
        this.clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

}