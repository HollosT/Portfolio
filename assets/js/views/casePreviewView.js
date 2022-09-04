// import caseView from './caseBodyView.js';
import View from './View.js';


class CasePreview extends View {
    _parentElement = document.querySelector('.text_box--1');
    _readMoreBtnP = document.querySelector('#portfolio_introduction-btn--p');
    _btnTriangle = document.querySelector('.portfolio_introduction-readBtn--triangle');

    addHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            let clicked = false;
            const caseContainer = document.querySelector('.cases-container');

            const btn = e.target.closest('.portfolio_introduction-btn');
            console.log(clicked);
            if(!btn) return
            if (clicked == false) {
                handler()
                clicked = true;
                console.log(clicked);
            } else {
                caseContainer.remove();
                clicked = false;
            }
        //    clicked == false ? this._readMoreBtnP.innerHTML = `Read more` : this._readMoreBtnP.innerHTML = `Read less`;
        //    clicked == false ? this._btnTriangle.style.transform = "rotate(0deg)" : this._btnTriangle.style.transform = "rotate(180deg)";
            
        })
    }


}

export default new CasePreview()

