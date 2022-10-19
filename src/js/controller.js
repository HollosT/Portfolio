
import caseView from './views/caseBodyView.js';
import casePreview from './views/casePreviewView.js';
import tabView from './views/tabView.js';
import linkView from './views/linkView.js';
import * as model from './model.js'
import caseBodyView from './views/caseBodyView.js';



// when the portfolio page is loaded
const controlCasesPreview = async function () {
    try {
        const caseArr = model.cases


        caseArr.forEach(caseItem => {
            casePreview.render(caseItem.preview)

        })



    } catch (err) {
        console.log(err);
    }
}


// When the btn has been clicked --> open the box
const controlCasesbyBtn = async function (btnNumber) {
    try {
        // Get the desired content based on the btn that has been pressed
        const btn = +btnNumber;

        // Add animation
        casePreview.animationOpen(btn)

        // close the rest of the containers
        const allCaseContainer = document.querySelectorAll('.cases-container');
            allCaseContainer.forEach((caseCon, count) => {
                caseCon.innerHTML = ''
           if(!caseCon.classList.contains(`cases-container--${btnNumber}`) && !caseCon.classList.contains('hide')) {
                casePreview.animationClose(count + 1) 
           } else {
            return
           }
            
        })

      

        const contentData = await model.findContent(btn);
        // render links

        linkView.render(contentData.preview.preview_links, btn)
       
        // Render Tabs
        tabView.render(contentData.tabs, btn);

        // Render content
        const tabData = await model.findTabContent(1)
        caseView.render(tabData, btn);



    } catch (err) {
        console.log(err);
    }

}

// Control cases by arrow --> close the article
const controlCasesbyArrow = async function (arrowNumber) {
    try {

         casePreview.animationClose(arrowNumber)
      

    } catch (err) {
        console.log(err);
    }

}
// Control cases by btn --> close the article on mobile view
const controlCasesbyMobile = async function (mobileNumber) {
    try {

         casePreview.animationClose(mobileNumber)
      

    } catch (err) {
        console.log(err);
    }

}




// When the tabs have been clicked
const controlCaseBodyByTabs = async function (tabNumber, containerNumber) {
    // getting the tab data from the dataset
    try {

        const tab = +tabNumber
        // await model.updateTabnumber(tab)


        const tabData = await model.findTabContent(tab)


        caseView.render(tabData, containerNumber)

    } catch (err) {
        console.error(err);
    }

}


const init = async function () {
    try {
        await casePreview.addHandlerPreview(controlCasesPreview)

        await casePreview.addHandlerToBtn(controlCasesbyBtn)

        await casePreview.addHandlerToArrow(controlCasesbyArrow)
        
        await casePreview.addHandlerToMobileArrow(controlCasesbyMobile)

        await tabView.addHandlerTabs(controlCaseBodyByTabs)
    } catch (err) {
        console.log(err);
    }
}
init()


