
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


    

    clear(btnNumber) {
        this._parentElement.querySelector(`.cases-container--${btnNumber}`).innerHTML = '';
    }

    loading() {
        const markup = `
            <div class="ht flex">
                    <span> HT</span>
            </div>
        `;
        this.clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

}