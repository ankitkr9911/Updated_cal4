let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

function square(n) {
    return n * n;
}


arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {

            if (string.charAt(string.length - 1) == "!") {
                let numStr = string.substring(0, string.length - 1);
                let num = Number.parseFloat(numStr)
                string = factorial(num);
                input.value = string;
            }

            else {
                string = eval(string);
                input.value = string;
            }
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == "sin" || e.target.innerHTML == "cos" || e.target.innerHTML == "tan" || e.target.innerHTML == "ln" || e.target.innerHTML == "CBRT" || e.target.innerHTML == "SQRT" || e.target.innerHTML == "ceil" || e.target.innerHTML == "floor") {

            let func = e.target.innerHTML;

            switch (func) {
                case "sin":
                    string += "Math.sin";
                    break;
                case "cos":
                    string += "Math.cos";
                    break;
                case "tan":
                    string += "Math.tan";
                    break;
                case "ln":
                    string += "Math.log";
                    break;
                case "CBRT":
                    string += "Math.cbrt";
                    break;
                case "SQRT":
                    string += "Math.sqrt";
                    break;
                case "ceil":
                    string += "Math.ceil";
                    break;
                case "floor":
                    string += "Math.floor";
                    break;
            }
            input.value = string.replace(/Math\./g, "");
        }

        else if (e.target.innerHTML == "^") {
            string += "**";
            input.value = string.replace("**", "^");
        }
        else if (e.target.innerHTML == "x<sup>2</sup>") {
            let num2_Str = string;
            let num2 = Number.parseFloat(num2_Str)
            string = square(num2);
            input.value = string;
        }
        else {
            if (e.target.innerHTML == "e") {
                string += "2.7182818";
                input.value = string;
                input.value = string.replace(/Math\./g, "");
            }
            else if (e.target.innerHTML == "π") {
                string += "3.141592";
                input.value = string;
                input.value = string.replace(/Math\./g, "");

            }
            else {
                string += e.target.innerHTML;
                // input.value = string.replace(/Math\./g, "");
                input.value = string.replace("**", "^");
                input.value = string.replace(/Math\./g, "");
            }
        }
    });
});