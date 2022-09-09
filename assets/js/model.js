
import caseCollection from './casesData.js';


export const cases = caseCollection;
let status = true;
let caseIndex;

// get all the cases 


// Update btn status
export const updateBtnStatus = async function() {
    try {

        if(status == false)
            {   
                status = true
            }
        else if(status == true)
            { 
                status = false
            }

    } catch(err) {
        console.log(err);
    }
 }



// Read more btn false or true
export const btnTrueOrFalse =  function() {

    return status;
}



// Getting the right overoll content by the BTN
export const findContent = async function(btn) {
    try{
        for (let i = 0; cases.length > i; i++) {
            if (btn === cases[i].preview.text_box) {
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