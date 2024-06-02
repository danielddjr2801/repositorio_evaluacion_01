function closeDonate() {

    var button = document.getElementById("donate");
    button.style.display = "none";

    }

function sumapepper() {
    
    var buttonpepper = document.getElementById("buttonpepper");
    var sumapepper = document.getElementById("sumapepper");

    buttonpepper.addEventListener("click", function(){
    let currentNumber = parseInt(sumapepper.textContent);
    currentNumber ++;
    sumapepper.textContent = currentNumber;
    })

    }
    
    
    function sumabruce() {

        var buttonbruce = document.getElementById("buttonbruce");
        var sumabruce = document.getElementById("sumabruce");

        buttonbruce.addEventListener("click", function() {
        let currentNumber = parseInt(sumabruce.textContent);
        currentNumber ++;
        sumabruce.textContent = currentNumber;
        })
        }


        function sumaoscar() {

            var buttonoscar = document.getElementById("buttonoscar");
            var sumaoscar = document.getElementById("sumaoscar");
    
            buttonoscar.addEventListener("click", function() {
            let currentNumber = parseInt(sumaoscar.textContent);
            currentNumber ++ ;
            sumaoscar.textContent = currentNumber;
            })
            }
