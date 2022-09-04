

export default class View {
    _data;

    render(data, tabNumber = 1) {
        this._data = data;
        console.log(`Hi iam ${tabNumber}`);
        const markup = this.generateMarkup(tabNumber);

        // this.clear()
        this._parentElement.insertAdjacentHTML('beforeend', markup)
    }

    // Hide the content container
    clear() {
        this._parentElement.innerHTML = '';
    }


}