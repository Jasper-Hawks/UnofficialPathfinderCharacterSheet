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
function getData() {
  // We need to also find out how many entries were created for weapons/spells/equipment
  // so that we can populate the site with those fields before we write to a csv. That
  // way importing isnt a disaster.

  //TEXT FIELD VALUES

  //Find all of the fields that can be modified and find all of the fields that have unique
  // ID's so that we know how many the user generated.
  var nodes = document.querySelectorAll('input[type=text],[id^=wform],input[type=checkbox],[id^=aform],[id^=gform],[id^=fform],[id^=sform],textarea');
  var nodeValues = [];
  var w = 0; // This variable represents weapon entries
  var ac = 0; // This entry represents AC items
  var ge = 0; // This entry represents Gear 
  var fe = 0; // This var represents Feats
  var sp = 0; // This var represents Special Abilities
  console.log(nodes);

  //Then push all of the values of those nodes to the 
  for (var k = 0; k < nodes.length; ++k){
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

  }
  // Append the amount of entries the user created
  // for all forms where entries can be created

  // We'll go top to bottom left to right
  nodeValues.push(w,ac,ge,fe,sp);


  console.log(nodeValues);

  // Come back to this

  download(nodeValues);

}