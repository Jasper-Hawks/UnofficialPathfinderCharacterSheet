let onFirst = true;
function goToEquip(){

    let pg1 = document.getElementById('pg1');
    let pg2 = document.getElementById('pg2');

    if (onFirst){

        onFirst = false;
        pg1.style.display = "none";
        pg2.style.display = "inline-block";


    }else{

        onFirst = true;
        pg1.style.display = "inline-block";
        pg2.style.display = "none";
    }


}