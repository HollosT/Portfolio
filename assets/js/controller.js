
import caseView from './views/caseBodyView.js';
import casePreview from './views/casePreviewView.js';
import tabView from './views/tabView.js';
import * as model from './model.js'
import caseBodyView from './views/caseBodyView.js';



// when the portfolio page is loaded
const controlCasesPreview = async function() {
      try {
        const caseArr = model.cases
       
        
        caseArr.forEach(caseItem => {
            casePreview.render(caseItem.preview)
        })

        

    } catch(err) {
        console.log(err);
    }
}


// When the btn has been clicked
const controlCasesbyBtn = async function(btnNumber,caseContainerNumber) {
    try {

        // update BTN status
        await model.updateBtnStatus()
        
        
        // Get the status
        const status = model.btnTrueOrFalse();
        console.log(status);
        
        // update the btn
        casePreview.updateBtn(status)

        // Get the desired content based on the btn that has been pressed
        const btn = +btnNumber;
        console.log(btn);
        const contentData = await model.findContent(btn);
        console.log(contentData);

        // Update the interface --> add content / hide content
        if(status == false) {
            // Render Tabs
            tabView.render(contentData.tabs, btn);
            
            // // Render content
            const tabData = await model.findTabContent(1)
            caseView.render(tabData, btn);

        } else if(status == true) {
            tabView.clear();
        }

    } catch(err) {
        console.log(err);
    }

}

// When the tabs have been clicked
const controlCaseBodyByTabs = async  function(tabNumber) {
    // getting the tab data from the dataset
  try {

    const tab = +tabNumber
    // await model.updateTabnumber(tab)

    const tabData = await model.findTabContent(tab)
    console.log(tabData);

     caseView.render(tabData)

  } catch(err) {
    console.error(err);
  }
   
}


const init = async function() {
    try {
        await casePreview.addHandlerPreview(controlCasesPreview)

        await casePreview.addHandlerToBtn(controlCasesbyBtn)

        await tabView.addHandlerTabs(controlCaseBodyByTabs)
    } catch(err) {
        console.log(err);
    }
}
init()


