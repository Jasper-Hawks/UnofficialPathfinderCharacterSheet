// This file deals with spawning in new entries when the user clicks
// certain buttons

// Each function finds the entries parent element, and attaches
// raw HTML to the parent, creating a new entry.
function spawnWeap(){

    // Create a clone of an element with class weapons
    // set it's class attribute
    // then append it to the bottom of the weapons section

    var weap = document.querySelector(".weaponsScroll");
    var attach = document.createElement('div');
    attach.innerHTML = `<form class="weapons" id="wform0">
    <div class="weaponsBtnCont">
  </div>
  <br>
      <div class="weaponsTitle">
        <div class="weaponsBoxTitle"><input type="checkbox" class="weaponsCheckbox">Weapon</div>
        <input type="text" id="weaponsTitle" class="weaponsInputFields">
      </div><div class="weaponsAtkBon">
        <div class="weaponsBox">Attack Bonus</div>
        <input type="text" id="weaponsAtkBonus" class="weaponsInputFields">
      </div><div class="weaponsCrit">
        <div class="weaponsBox">Critical</div>
        <input type="text" id="weaponsCrit" class="weaponsInputFields">
      </div><div class="weaponsType">
        <div class="weaponsBox">Type</div>
        <input type="text" id="weaponsType" class="weaponsInputFields">
      </div><div class="weaponsRange">
        <div class="weaponsBox">Range</div>
        <input type="text" id="weaponsRange" class="weaponsInputFields">
      </div><div class="weaponsAmmo">
        <div class="weaponsBox">Ammunition</div>
        <input type="text" id="weaponsAmmo" class="weaponsInputFields">
      </div><div class="weaponsDamage">
        <div class="weaponsBox">Damage</div>
        <input type="text" id="weaponsDamage" class="weaponsInputFields">
      </div>
    </form>`;
    weap.appendChild(attach);

}
function spawnACItem(){

    //Select the form for ACs
    let acItem = document.querySelector(".acItemsScroll");
    var attach = document.createElement('div');
    attach.innerHTML = `<form class="acItemsForm" id="aform0">
    <div class="acItemsTitleCont">
      <div class="acItemsTitle"><input type="checkbox" class="acItemsCheck">AC Item</div>
      <input type="text" class="acItemsInput" id="acItemsTitle">
    </div>
    <div class="acItemsBonusCont">
      <div class="acItemsBonus">Bonus</div>
      <input type="text" class="acItemsInput" id="acItemsBonus">
    </div>
    <div class="acItemsTypeCont">
      <div class="acItemsType">Type</div>
      <input type="text" class="acItemsInput" id="acItemsType">
    </div>
    <div class="acItemsCheckPenCont">
      <div class="acItemsCheckPen">Check Pen</div>
      <input type="text" class="acItemsInput" id="acItemsCheckPen">
    </div>
    <div class="acItemsSpellFailCont">
      <div class="acItemsSpellFail">Spell Failure</div>
      <input type="text" class="acItemsInput" id="acItemsSpellFail">
    </div>
    <div class="acItemsWeightCont">
      <div class="acItemsWeight">Weight</div>
      <input type="text" class="acItemsInput" id="acItemsWeight">
    </div>
    <div class="acItemsPropCont">
      <div class="acItemsProp">Property</div>
      <input type="text" class="acItemsInput" id="acItemsProp">
    </div>
  </form>`
  acItem.appendChild(attach);

}
function spawnGear(){
    console.log("Spawn")
    let g = document.querySelector('.gearContent');
    var attach = document.createElement('div');
    attach.innerHTML = `
    <div class="gearEntry" id="gform0">
        <input type="checkbox" class="gearCheckbox">
        <input type="text" class="gearInputFields" id="ge">
        <input type="text" class="gearInputFieldsWeight" id="gw0">
      </div>`;
  g.appendChild(attach);

}
function spawnFeat(){

  let f = document.querySelector('.feats');
  let attach = document.createElement('div');
  f.appendChild(attach);

  // Use this method instead because we don't want the
  // div to conflict with the .feats flex container
  attach.outerHTML = attach.innerHTML = `<form class="featsCont" id="fform0">
  <input type="checkbox" class="featsCheckbox">
  <textarea class="featsInputFields"></textarea>
  </form>`;

}
function spawnAbil(){

  let a = document.querySelector('.specialAbil');
  let attach = document.createElement('div');
  a.appendChild(attach);

  attach.outerHTML = attach.innerHTML = `<form class="specialAbilCont" id="sform0">
  <input type="checkbox" class="specialAbilCheckbox">
  <textarea type="text" class="specialAbilInputFields"></textarea>
  </form>`;

}
// Create one function that deals with the spawning of all skill entries
function spawnSkill(skill){

  let atr =  "" // This varariable represents the atribute that skill uses WIS INT or CHA
  let s = document.querySelector('#' + skill + "SkillsRow");
  let attach = document.createElement('div');
  s.appendChild(attach);

  // This will be used in order to change the name of the skill
  // in the HTML and to format it properly
  skill = skill.split("")
  skill[0] = skill[0].toUpperCase();
  skill = skill.join("");

  // Each skill has different attributes that they use and they will be set with the
  // following if/else if statements
  if (skill == "Profession"){

    atr = "Wis"

  }else if (skill == "Perform"){

    atr = "Cha"

  }else{
    // The only way this function will be called is within the context of spawning skills.
    // We do not need to define craft because skills can only be one of three options. If it is
    // neither Profession or Perform is must be Craft

    atr = "Int"

  }

  attach.outHTML = attach.innerHTML = `
  <div class="skillsRow" id="` + skill + `form0">
  <input type="checkbox" class="skillsRadio">
  <h5 class="skillsDetailedT">` + skill + `
    <input type="text"
    <input type="text" class="skillsCustomFields">
    <input type="button" class="skillsBtn" value="&#10134;" onclick="delSkill(this)" style="background-color:red;">
  </h5>
  <input type="text" class="skillsInputFields">
  <h5 class="skillsEqualsT">= ` + atr + `</h5>
  <input type="text" class="skillsInputFields">
  <h5> + </h5>
  <input type="text" class="skillsInputFields">
  <h5> + </h5>
  <input type="text" class="skillsInputFieldsMisc">
  </div>
  `

}
