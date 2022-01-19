
// section-util
let print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// main
$(document).ready(function () {

    let content = $('#content');

    //let inputString = "High School Freshmen"

    // checking for elements
    if (content.length) {
        let contentObjectArray = content.find('p');

        let stringArray = new Array; 

        // hide elements
        for (let i = 0; i < contentObjectArray.length; i++) {
            let currentElement = contentObjectArray.eq(i);

            stringArray[i] = currentElement.html();
            currentElement.html("");
        }

        // animation 
        (async () => { 
            for (let i = 0; i < contentObjectArray.length; i++) {
                let currentElement = contentObjectArray.eq(i);

                let stringToAnimate = stringArray[i]; 

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
