const download = function (data){

    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden','');
    a.setAttribute('href',url);
    a.setAttribute('download','download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
  }
//TODO Rename this
//This function now only get the text data fields
function getData() {
// We need to also find out how many entries were created for weapons/spells/equipment
// so that we can populate the site with those fields before we write to a csv. That
// way importing isnt a disaster.

//TEXT FIELD VALUES
var nodes = document.querySelectorAll('input[type=text],[id^=w],input[type=checkbox],[id^=AC]');
var nodeValues = [];
var id;
var w = 0; // This variable represents weapon entries
var ac = 0; // This entry represents AC items
console.log(nodes);

//Then push all of the values of those nodes to the 
for (var k = 0; k < nodes.length; ++k){
    if (nodes[k].id.match(/w[0-9]/g)){

    w += 1;

    }else if (nodes[k].type == "checkbox"){
    
    nodeValues.push(nodes[k].checked);

    } else if (nodes[k].id.match(/AC[0-9]/g)){

      ac += 1;
    
    }else{

    nodeValues.push(nodes[k].value);

    }

}
// Let's try to see if we can push the amount of weapon
// entries to the csv
nodeValues.push(w)

console.log(nodeValues);
console.log(w);

// Come back to this

download(nodeValues);

}