// This file deals with the deletion of entries.

// These functions are all written the same
function delGear(){
    console.log("del")
    // Find all check boxes marked to be deleted
    let checks = document.querySelectorAll(".gearCheckbox");

    // Go through them all to see if they are checked. If they are
    checks.forEach(function(entry){

        if (entry.checked){

        //Delete their parent elements so that
        // entries don't display improperly
            entry.parentElement.remove();

      }
    });
    // Repeat this for every other script that needs to delete entries

}

function delFeat(){


    let checks = document.querySelectorAll(".featsCheckbox");

    checks.forEach(function(entry){

        if (entry.checked){

        entry.parentElement.remove()

    }

    });

}

function delACItem(){

    let checks = document.querySelectorAll(".acItemsCheck");

    checks.forEach(function(entry){

        if (entry.checked){

        entry.parentElement.parentElement.parentElement.remove();

        }

    });
}

function delWeap(){

    let checks = document.querySelectorAll(".weaponsCheckbox");

    checks.forEach(function(entry){

        if (entry.checked){

        entry.parentElement.parentElement.parentElement.remove()

        }

    });
}

function delAbil(){

    let checks = document.querySelectorAll(".specialAbilCheckbox");

    checks.forEach(function(entry){

        if (entry.checked){

        entry.parentElement.remove()

    }

    });

}

function delSkill(el){
    // Call the function and specify the element as the el parameter

    // Find the parent's parent of the el parameter
    let entry = el.parentElement.parentElement

    //Remove it.
    entry.remove()

}
