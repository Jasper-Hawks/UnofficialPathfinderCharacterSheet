
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
  var nodes = document.querySelectorAll('input[type=text],[id^=wform],input[type=checkbox],[id^=aform],[id^=gform],[id^=fform],[id^=sform],textarea');
  var nodeValues = []; // This array will collect the values of the nodes
  var w = 0; // This variable represents the number of weapon entries
  var ac = 0; // This entry represents the number of AC items entries
  var ge = 0; // This entry represents the number of Gear  entries
  var fe = 0; // This var represents the number of Feats entries
  var sp = 0; // This var represents the number of Special Abilities entries
  console.log(nodes);

  //Go through each entry in the nodes array
  for (var k = 0; k < nodes.length; ++k){
      try{

        for (let i = 0; i < nodes.length; ++i){

          let seg = nodes[k].value.split("");

          for (j = 0; j < seg.length; ++j){

             seg[j] = seg[j].replace(/,/g,'&#44')

          }
          seg[j] = seg.join("")
          nodes[k].value = seg[j]
        }

        if (nodes[k].type == "checkbox"){
      
          nodeValues.push(nodes[k].checked);
  
        }else if (nodes[k].id.match(/wform[0-9]/g)){
  
          w += 1;
  
        } else if (nodes[k].id.match(/aform[0-9]/g)){
  
          ac += 1;
        
        }else if (nodes[k].id.match(/gform[0-9]/g)){
  
          ge += 1;
  
        }else if (nodes[k].id.match(/fform[0-9]/g)){
  
          fe += 1;
  
        }else if (nodes[k].id.match(/sform[0-9]/g)){
  
          sp += 1;
  
        }else{
  
        nodeValues.push(nodes[k].value);
  
        }

      }catch(TypeError){

        continue

      }

  }
  // Append the amount of entries the user created
  // for all forms where entries can be created

  // We'll go top to bottom left to right
  nodeValues.push(w,ac,ge,fe,sp);




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