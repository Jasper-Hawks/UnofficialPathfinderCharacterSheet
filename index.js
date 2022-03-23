//TODO Escape commas
//TODO Stop getting elements with ids
const input = document.querySelector('input[type="file"]')
      input.addEventListener('change', function(e){

        if(confirm("Would you like to import this data?") == true){
          console.log(input.file); //Testing stuff, remove later
          const reader = new FileReader()
          reader.onload = function(){
  
              //TODO Rename this variable
              const a = reader.result.split(",")
              console.log(a)
              const weaponsBtn = document.querySelector('#AddBtn');
              // Create the same number of weapon entries that the user had when
              // they exported. So that data wont be placed in wrong positions
              for (let j = 0; j < Number(a[a.length - 1]) - 1; ++j){

                weaponsBtn.click();

              }
              //TODO Rename this variable
              const inputFields = document.querySelectorAll('input[type=text],input[type=checkbox]')
              console.log(inputFields)
              // Populate text fields with values
              for (let i = 0; i < inputFields.length; ++i){
                if (inputFields[i].type != "checkbox"){
                  
                  inputFields[i].value = a[i]
        
                }else{
                  
                  inputFields[i].checked = a[i];
        
                }
  
              }
  
          }
          reader.readAsText(input.files[0])
        }

      },false)