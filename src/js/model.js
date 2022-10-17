
import caseCollection from './casesData.js';


export const cases = caseCollection;

let caseIndex;

// get all the cases 





// Getting the right overall content by the BTN
export const findContent = async function(btn) {
    try{
        for (let i = 0; cases.length > i; i++) {
            if (btn === cases[i].preview.case_box) {
                caseIndex = i;
                return cases[i];
            } 
            
        }
        
    }catch(err) {
        console.log(err);
    }
}


// Getting the right tab content by the tab
export const findTabContent = async function(tab) {

    try {
        for (let i = 0; cases[caseIndex].content.length > i; i++) {
            if (tab === cases[caseIndex].content[i].content_data) return cases[caseIndex].content[i];
        }
    } catch(err) {
        console.err(err);
    }

}