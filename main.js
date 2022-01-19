
// section-util
let print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// main
$(document).ready(function () {

    let content = $('#content');

    let contentObjectArray = content.find('p');
    let stringObjectArray = new Array; 
    
    
    for (let i = 0; i < contentObjectArray.length; i++) {
         let currentElement = contentObjectArray.eq(i);
         stringObjectArray[i] = currentElement.html();
         currentElement.html("");
        
    }; 
    

    // checking for elements
    if (content.length) {
        (async () => { 
            for (let i = 0; i < stringObjectArray.length; i++) {
                let stringToAnimate = stringObjectArray[i]; 

                for (let i = 0; i < stringToAnimate.length; i++) {
                    let currentChar = stringToAnimate[i]; // convert into char stream

                    currentElement.html(currentElement.html() + currentChar);
                    // print('updated ' + currentChar);
                    await sleep(10);
                }
            }
        })();
        // _call(); 
    }

    

    // print(content.children())

});
