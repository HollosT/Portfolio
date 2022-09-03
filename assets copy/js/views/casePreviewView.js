import caseView from './caseBodyView.js';

class CasePreview {
    _parentElement = document.querySelector('.text_box--1');
    _readMoreBtnP = document.querySelector('#portfolio_introduction-btn--p');
    _btnTriangle = document.querySelector('.portfolio_introduction-readBtn--triangle');
    addHandler(handler) {
       let clicked = false;
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.portfolio_introduction-btn');

            if(!btn) return
            if (clicked == false) {
                handler()
                clicked = true;
            } else {
                caseView.clearCaseContainer();
                clicked = false;
            }
        //    clicked == false ? this._readMoreBtnP.innerHTML = `Read more` : this._readMoreBtnP.innerHTML = `Read less`;
        //    clicked == false ? this._btnTriangle.style.transform = "rotate(0deg)" : this._btnTriangle.style.transform = "rotate(180deg)";
            
        })
    }


}

export default new CasePreview()

