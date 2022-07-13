// This file deals with the importing of csv files previously created
// in the character sheet.

// Find the area where the user inputs their file.
const fileField = document.querySelector('input[type="file"]')
// Wait for any change on the input area. Then show a modal prompting
// the user to confirm whether they would like to import their file
// or not.
fileField.addEventListener('change', function(){
  showModal("Would you like to import a character via a CSV file? (Your current character will be deleted)","import")
},false)

function importData(){
  // Create a FileReader so that we can read the contents
  // of the file
  const reader = new FileReader()

  // Read the file uploaded as plain text
  reader.readAsText(fileField.files[0])

  //Check to see if a file ends with the .csv file extension
  if (fileField.value.match(/\.csv/g)){
    // Once a file can be read successfully
    // run this function
    reader.onload = function(){

      // Make a pattern that we will user to seperate the
      // values in the file.
      const regex = /,/mg;

      var w = document.querySelectorAll('#wform0').length;
      // These entires are unique because they're spawn entires don't
      // have the coresponding ID so we have to increment them by one
      var cr = document.querySelectorAll('#Craftform0').length;
      var pe = document.querySelectorAll('#Performform0').length;
      var pr = document.querySelectorAll('#Professionform0').length;
      var ac = document.querySelectorAll('#aform0').length;
      var ge = document.querySelectorAll('#gform0').length;
      var fe = document.querySelectorAll('#fform0').length;
      var sp = document.querySelectorAll('#sform0').length;
      console.log(cr);
      console.log(pr);
      console.log(pe);

      let entryVals = [w,cr,pe,pr,ac,ge,fe,sp];
      let entryIds = ['#wform0','#Craftform0','#Performform0','#Professionform0','#aform0','#gform0','#fform0','#sform0']
      // When those files are parsed out and we have an array
      // of comma seperated values assign those to a variable.
      const values = reader.result.split(regex)

      // Find all of the buttons that can be used to make entries.
      let entryBtns = ['#AddBtn','#craftAddBtn','#perfAddBtn','#profAddBtn','#acItemsAddBtn','#gearAddBtn','#featsAddBtn','#specialAbilAddBtn']

      // Create the same number of weapon entries that the user had when
      // they exported. So that data wont be placed in wrong positions

      for (let i = 0; i < entryVals.length; i++){

        // This equation finds the 8 values appened to the end of the array
        // that represent the amount of entries the user had when they exported
        // the file
        let importEntries = values[(values.length - 8) + i];

        // If the current amount of entries is more than the amount that the user
        // had at the time of export
        if (entryVals[i] > importEntries){
          
          for (let j = entryVals[i]; j > importEntries; j--){

            // Remove the entries at the current index of entryIds
            document.querySelector(entryIds[i]).remove();

          }

          // If there are more entries than those at the time of export
        }else if (entryVals[i] < importEntries){

          for (let j = entryVals[i]; j < importEntries; j++){

            let btn = document.querySelector(entryBtns[i]);
            btn.click()

          }

        }

      }
     
      //Scrub the imported data for any comma HTML codes and convert
      // those codes to commas now that the data has been segmented
      //properly

      for (let i = 0; i < values.length;i++){

        //If a string in the array contains the following HTML
        // code for commas
        if (values[i].includes('&#44')){

          //Turn that code back into a comma. This will
          // not disrupt the csv and people can have
          // characters with commas in their names
          values[i] = values[i].replace(/&#44/g,',')

        }

      }

      //Find all of the input fields and make an array named inputFields out of them
      const inputFields = document.querySelectorAll('input[type=text],input[type=checkbox],textarea')

      // Populate text fields with values
      for (let i = 0; i < inputFields.length; ++i){
        if (inputFields[i].type != "checkbox"){

            inputFields[i].value = values[i];


        }else{

          // If we find a checkbox populate checkbox fields
          // not input fields

          let bool = values[i] == "true" ? true : false;
          inputFields[i].checked = bool;

        }

      }

  }

  }else{
    // Otherwise tell the user that the file is invalid and do not import the
    // data.
    showModal("Error: The file you tried to import is invalid. Please try importing a CSV that has been made on Jasper's Unofficial Pathfinder character sheet.","error")

  }
}
