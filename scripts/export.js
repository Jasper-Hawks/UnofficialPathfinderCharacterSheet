
const download = function (data){

    //Create a blob (Binary Large Object) that will
    //act as the file that we need to export. The
    // data parameter will be the array from the 
    // getData function
    const blob = new Blob([data], {type: 'text/csv'});

    //Create a url so that the user may download the
    // blob and its contents
    const url = window.URL.createObjectURL(blob);

    //Create a hyperlink and give it attributes
    // that won't interfere with the site. Set
    // its url to the link pointing to the blob.
    const a = document.createElement('a');
    a.setAttribute('hidden','');
    a.setAttribute('href',url);
    a.setAttribute('download','download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Then click the link for the user
    // and delete it from the webpage
    
  }
//TODO Rename this
function getData() {
  //TEXT FIELD VALUES

  //Find all of the fields that can be modified and can be created
  var nodes = document.querySelectorAll('input[type=text],[id^=wform],input[type=checkbox],[id^=aform],[id^=gform],[id^=fform],[id^=sform],textarea,[id^=craftSkills],[id^=performSkills],[id^=professionSkills]');
  var nodeValues = []; // This array will collect the values of the nodes
  var w = 0; // This variable represents the number of weapon entries
  var ac = 0; // This entry represents the number of AC items entries
  var cr = 0; // This entry represents the number of Craft skill entries
  var pe = 0; // This entry represents the number of Perform skill entries
  var pr = 0; // This entry represents the number of Profession skill entries
  var ge = 0; // This entry represents the number of Gear  entries
  var fe = 0; // This var represents the number of Feats entries
  var sp = 0; // This var represents the number of Special Abilities entries

  //Go through each entry in the nodes array
  for (var k = 0; k < nodes.length; ++k){
      // Wrap going through the array in a try catch finally block
      // because you cant assign UNDEFINED values to nodes. And since
      // checkbox input fields don't have any value and return undefined
      // the for loop wouldn't work.
      try{
          // Split each entry in the nodes array into an array 
          // of letters that make up the entry
          let seg = nodes[k].value.split("");

          // Go through those letters and try to find a comma
          // to replace
          for (j = 0; j < seg.length; ++j){

              seg[j] = seg[j].replace(/,/g,'&#44')

          }
          // Join the letters back together
          seg[j] = seg.join("")
          console.log(seg[j])
          // Assign the new comma escaped value to 
          // the array for exporting
          nodes[k].value = seg[j]

      }catch(TypeError){

        // When the try block comes across a checkbox
        // we don't want it to do anything but execute
        // the finally block.
        continue

      }finally{
        // Every value has to go through this if statement
        // so that we can count the amount of entries a user
        // created, along with any checkboxes the user may have
        // activated.
        if (nodes[k].type == "checkbox"){
      
          nodeValues.push(nodes[k].checked);
  
        }else if (nodes[k].id.match(/wform[0-9]/g)){
          w += 1;
  
        }else if (nodes[k].id.match(/craftSkills/g)){

          cr += 1;

        }else if (nodes[k].id.match(/performSkills/g)){

          pe += 1;

        }else if (nodes[k].id.match(/professionSkills/g)){

          pr += 1;

        } else if (nodes[k].id.match(/aform[0-9]/g)){
  
          ac += 1;
        
        }else if (nodes[k].id.match(/gform[0-9]/g)){
  
          ge += 1;
  
        }else if (nodes[k].id.match(/fform[0-9]/g)){
  
          fe += 1;
  
        }else if (nodes[k].id.match(/sform[0-9]/g)){
  
          sp += 1;
  
        }else{
        // If the value goes through all of those ifs
        // then it is a value that belongs in one of the
        // text entries. We push it to the values array.
  
        nodeValues.push(nodes[k].value);
  
        }

      }
  }
  // Append the amount of entries the user created
  // for all forms where entries can be created

  // We'll go top to bottom left to right
  nodeValues.push(w,cr,pe,pr,ac,ge,fe,sp);


  console.log(nodeValues)
  download(nodeValues);


  // Once the user presses export all of the commas
  // in all of the input fields get changed to the HTML
  // code &#44. This for loop replaces those codes with 
  // commas for a better user experience
  for (let i = 0; i < nodeValues.length; i++){
    try{

      if (nodeValues[i].includes('&#44')){
        
        nodes[i].value = nodeValues[i].replace(/&#44/g,',')

      }

    }catch(TypeError){

      continue

    }

  }

}