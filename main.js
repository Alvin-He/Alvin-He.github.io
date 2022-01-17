
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
        (async () => { 

            let contentObjectArray = content.find('p');

            for (let i = 0; i < contentObjectArray.length; i++) {
                const currentElement = contentObjectArray.eq(i);
                const stringToAnimate = currentElement.html();
                currentElement.html("");

                for (let i = 0; i < stringToAnimate.length; i++) {
                    const currentChar = stringToAnimate[i]; // convert into char stream

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
