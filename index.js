const input = document.querySelector('input[type="file"]')
      input.addEventListener('change', function(e){

        if(confirm("Would you like to import this data?")==true){
          console.log(input.file);
          const reader = new FileReader()
          reader.onload = function(){
  
              const a = reader.result.split(",")
              console.log(a)
              const inputFields = document.querySelectorAll('*[id]')
              console.log(inputFields)
              for (let i = 0; i < inputFields.length; ++i){
  
                  inputFields[i].value = a[i]
  
              }
  
          }
          reader.readAsText(input.files[0])
        }

      },false)