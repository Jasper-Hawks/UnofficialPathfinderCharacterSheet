// This file deals with displaying and removing modals

function showModal(prompt,type){

    m = document.getElementById("modal");
    m.style.display = "flex";

    txt = document.getElementById("modalText");
    txt.innerHTML = prompt;

    let yesBtn = document.getElementById("modalYes");
    let noBtn = document.getElementById("modalNo");
    console.log(type)
    if (type == "weap"){

        document.getElementById("modalYes").addEventListener("click", function(){

        m.style.display = "none";
        delWeap();


        },true);

        document.getElementById("modalNo").addEventListener("click",function(){

        m.style.display = "none";

    });

    }else if (type == "abil"){

        document.getElementById("modalYes").addEventListener("click", function(){

        m.style.display = "none";
        delAbil();

        })

        document.getElementById("modalNo").addEventListener("click",function(){

        m.style.display = "none";

    });

    }else if (type == "feat"){

        document.getElementById("modalYes").addEventListener("click", function(){

        m.style.display = "none";
        delFeat();

        })

        document.getElementById("modalNo").addEventListener("click",function(){

        m.style.display = "none";

    });
    }else if (type == "ac"){

        document.getElementById("modalYes").addEventListener("click", function (){

        m.style.display = "none";
        delACItem();

        })

        document.getElementById("modalNo").addEventListener("click",function (){

        m.style.display = "none";

    });

    }else if (type == "gear"){

    document.getElementById("modalYes").addEventListener("click", function (){

        m.style.display = "none";
        delGear();

        });

        document.getElementById("modalNo").addEventListener("click",function (){

        m.style.display = "none";

        });

    }else if (type == "import"){

    document.getElementById("modalYes").addEventListener("click", function (){

        m.style.display = "none";
        importData();

    })

    document.getElementById("modalNo").addEventListener("click",function (){

        m.style.display = "none";

    });

    }else if (type=="error"){ // This acts as the error handling modal
    noBtn.style.display = "none";
    yesBtn.style.backgroundColor = "grey";
    yesBtn.value = "Ok";
    document.getElementById("modalYes").addEventListener("click", function (){

        m.style.display = "none";
        noBtn.style.display = "inline";
        yesBtn.style.backgroundColor = "red";
        yesBtn.value = "Yes";
    })

    }
}
