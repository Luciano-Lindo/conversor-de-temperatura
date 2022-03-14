document.querySelector("#botao").onclick = function () {
    let temp = Number(document.querySelector("#temp").value);
    let medida1 = document.querySelector("#medida1").value;
    let calcular;
    let medida2 = document.querySelector("#medida2").value;
    let resultado = document.querySelector("#resultado");

    if (medida1 == 'C') {
        if (medida2 == 'C') {
            resultado.setAttribute("value", +temp);
        } else if (medida2 == 'F') {
            resultado.setAttribute("value", +((temp * 1.8) + 32).toFixed(2));
        } else if (medida2 == 'K') {
            resultado.setAttribute("value", +(temp + 273.15).toFixed(2));
        } else if (medida2 == 'R') {
            resultado.setAttribute("value", (temp * (9 / 5) + 491.67).toFixed(2));
        }

    }
    else if (medida1 == 'F') {
        if (medida2 == 'F') {
            resultado.setAttribute("value", +temp.toFixed(2));
        } else if (medida2 == 'C') {
            resultado.setAttribute("value", +(temp - 32) * (5 / 9).toFixed(2));
        } else if (medida2 == 'K') {
            resultado.setAttribute("value", +(temp - 32) * (5 / 9) + 273.15.toFixed(2));
        } else if (medida2 == 'R') {
            resultado.setAttribute("value", +(temp + 459.67).toFixed(2));
        }
    }
    else if (medida1 == 'K') {
        if (medida2 == 'K') {
            resultado.setAttribute("value", +temp.toFixed(2));
        } else if (medida2 == 'F') {
            resultado.setAttribute("value", +(temp - 273.15) * (9 / 5) + 32 .toFixed(2));
        } else if (medida2 == 'C') {
            resultado.setAttribute("value", +(temp - 273.15.toFixed(2)));
        } else if (medida2 == 'R') {
            resultado.setAttribute("value", +(temp * (9 / 5).toFixed(2)));
        }
    }
    else if(medida1 == 'R'){
        if (medida2 == 'R') {
            resultado.setAttribute("value", +temp.toFixed(2));
        }else if (medida2 == 'F'){
            resultado.setAttribute("value", +(temp)-459.67);
        }else if (medida2 == 'K'){
            resultado.setAttribute("value", +(temp)* (5/9));
        }else if (medida2 == 'C'){
            resultado.setAttribute("value",(temp)-491.67*(5/9));
        }
    }

            return false;
    }