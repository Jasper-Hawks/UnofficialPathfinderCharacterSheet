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
  <input type="text" class="featsInputFields">
</form>`;

}
function spawnAbil(){

  let a = document.querySelector('.specialAbil');
  let attach = document.createElement('div');  
  a.appendChild(attach);

  attach.outerHTML = attach.innerHTML = `<form class="specialAbilCont" id="sform0">
  <input type="checkbox" class="specialAbilCheckbox">
  <input type="text" class="specialAbilInputFields">
</form>`

}