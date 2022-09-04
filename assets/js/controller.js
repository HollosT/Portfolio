
import caseCollection from './casesData.js';
import caseView from './views/caseBodyView.js';
import casePreview from './views/casePreviewView.js';
import tabView from './views/tabView.js';
import * as model from './model.js'

// const caseContainer = document.querySelector('.cases-container');
// const readMoreBtn = document.querySelectorAll('.portfolio_introduction-btn');
// const readMoreBtnP = document.querySelector('#portfolio_introduction-btn--p');
// const btnTriangle = document.querySelector('.portfolio_introduction-readBtn--triangle');
// const caseTabContainer = document.querySelector('.cases_tab-container')
const [cases] = caseCollection;
// const textBox = document.querySelector('.text_box')
// const contentGK = cases.content;


const controlCases = function() {
    // Render Tabs
    tabView.render(cases);
    
    // 
    caseView.render(cases, 1)

    // // Render Content
    // caseView.generateMarkup(1, cases);

    // Add handlers for the tabs
    tabView.getActiveTab();

}

// When the tabs has been clicked
const controlCaseBodyByTabs = async function() {
    // getting the tab data from the dataset
   try {
       const tab = await tabView.getActiveTab()
       console.log(tab);
    } catch(err) {
        console.log(err);
    }
}


const init =  function() {
    casePreview.addHandler(controlCases)
    tabView.addHandlerTabs(controlCaseBodyByTabs)
}
init()






















// readMoreBtn.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         console.log(clicked);
//         if (clicked == false) {
//             renderMarkup()
//             clicked = true;
//             updateBtn(clicked)
//         } else {
//             caseContainer.innerHTML = '';
//             clicked = false;
//             updateBtn(clicked)
//         }
//     });

// })


// const updateBtn = function (status) {
//     status == false ? readMoreBtnP.innerHTML = `Read more` : readMoreBtnP.innerHTML = `Read less`;
//     status == false ? btnTriangle.style.transform = "rotate(0deg)" : btnTriangle.style.transform = "rotate(180deg)";
// }


// const renderMarkup = function () {
//     renderBtn(cases)
//     renderContentSection(1)
//     addHandlerToCaseBtns()
// };


// const renderBtn = function () {
//     const btns = cases.tabs
//     console.log(btns)
//     let markup = '<div class="cases_tab-container">';
//     for (let i = 0; btns.length > i; i++) {
//         markup += `<button class="cases_btn cases_tab ${i + 1 == 1 ? 'cases_btn--active' : ''}"  data-tab="${btns[i].tab_data}">${i + 1}. ${btns[i].tab_content}</button>`;
//         // if (btns[i + 1] == 1) {
//         //     markup.classList.add('.cases_btn--active')
//         // }
//     }
//     markup += '</div'
//     caseContainer.insertAdjacentHTML('afterbegin', markup)
// }

// const addHandlerToCaseBtns = function () {

//     caseContainer.addEventListener('click', function (e) {
//         const caseTabBtns = document.querySelectorAll('.cases_btn')
//         const caseContentContainer = document.querySelector('.cases');

//         e.preventDefault();

//         const activeClicked = e.target.closest('.cases_btn')
//         if (!activeClicked) return ;

//         caseContentContainer.remove();

//         caseTabBtns.forEach(btn => btn.classList.remove('cases_btn--active'))
//         activeClicked.classList.add('cases_btn--active')

//         renderContentSection(activeClicked.dataset.tab)

//     })
// }



// const renderContentSection = function (tabNumber) {
//     let markup = '';
//     markup += `
//         <div class="cases">
//             <div class="cases_content cases_content--">
//             ${renderContentSectionBody(tabNumber)}
//             </div>
//             <div class="cases_image-container">
//                 ${renderImage(tabNumber)}
//             </div>
//         </div>
//         `;
//         caseContainer.insertAdjacentHTML('beforeend', markup)
        
// }



// const renderContentSectionBody = function (tabNumber) {
//     const data = findContent(tabNumber);
//     let markup = '';
//     for (let i = 0; data.texts.length > i; i++) {
//         markup += `
//                 <h5>${data.texts[i].subTitle}</h5>
//                 <p>
//                 ${data.texts[i].body}
//                 </p>
//                 `;
//     }
//     return markup
// }

// const renderImage = function (tabNumber) {
//     const data = findContent(tabNumber);
//     let markup = '';
//     markup += `
//             <img src="./assets/img/${data.image.image_src}" alt="${data.image_alt}">
//         `
//     return markup;
// }

// const findContent = function (tabNumber) {
//     for (let i = 0; contentGK.length > i; i++) {
//         if (tabNumber == contentGK[i].content_data) return contentGK[i];

//     }
// }

