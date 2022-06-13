// This file deals with the JS required to change pages on the site.

// This boolean represents whether the user is on the first page or not
let onFirst = true;

// Create a function to call on when the switch page button is clicked.
function goToEquip(){

    // Find both pages in the document and represent them
    // with a variable. 
    let pg1 = document.getElementById('pg1');
    let pg2 = document.getElementById('pg2');
    let btn = document.getElementById('pgBtn');

    // document.getElementById('pgInput').onclick = function(){

    //     this.value = "&#9876;"

    // }

    function decodeEntity(inputStr) {
        var textarea = document.createElement("textarea");
        textarea.innerHTML = inputStr;
        return textarea.value;
    }

    // If the user clicks the button and we are on the first page.
    if (onFirst){

        // Set the boolean to false and display the alternate page.
        onFirst = false;
        pg1.style.display = "none";
        pg2.style.display = "flex";
        btn.value = decodeEntity("&#9876;")


    // Otherwise do the opposite
    }else{ 

        onFirst = true;
        pg1.style.display = "inline-block";
        pg2.style.display = "none";
        btn.value = decodeEntity("&#128737;")

    }


}