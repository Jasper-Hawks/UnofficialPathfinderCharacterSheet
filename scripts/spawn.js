function spawnWeap(){

    // Create a clone of an element with class weapons
    // set it's class attribute
    // then append it to the bottom of the weapons section 
    
    var weap = document.querySelector(".weaponsScroll");
    var attach = document.createElement('div');
    attach.innerHTML = `<form class="weapons" id="w0">
    <div class="weaponsBtnCont">
    <input type="button" class="weaponsDelBtn" value="-" onclick="delWeap(this);">
  </div>
  <br>
      <div class="weaponsTitle">
        <div class="weaponsBox">Weapon</div>
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
    attach.innerHTML = `<form class="acItemsForm" id="AC \+ \j ">
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

    let g = document.querySelector('.gear');
    var attach = document.createElement('div');
    attach.innerHTML = ` <form class="gearContent">
    <div class="gearSelection">
      <input type="checkbox" class="gearCheckbox">
    </div>
    <div class="gearEntry">
      <div class="gearEntryTitle">Item</div>
      <input type="text" class="gearInputFields">
    </div>
    <div class="gearWeight">
      <div class="gearWeightTitle">WT</div>
      <input type="text" class="gearInputFields">
    </div>
  </form>`;
  g.appendChild(attach);

}