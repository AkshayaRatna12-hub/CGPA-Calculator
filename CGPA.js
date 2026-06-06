function createFields() {

    let count = document.getElementById("semesterCount").value;
    let container = document.getElementById("sgpaFields");

    if (count < 1 || count > 8) {
        alert("Please enter a number between 1 and 8");
        return;
    }

    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {

        let input = document.createElement("input");

        input.type = "number";
        input.step = "0.01";
        input.min = "0";
        input.max = "10";
        input.placeholder = `Enter SGPA of Semester ${i}`;

        container.appendChild(input);
    }

    document.getElementById("calculateBtn").style.display = "block";
}

function calculateCGPA() {

    let inputs = document.querySelectorAll("#sgpaFields input");

    if (inputs.length === 0) {
        alert("Please create semester fields first");
        return;
    }

    let total = 0;

    for (let input of inputs) {

        if (input.value === "") {
            alert("Please fill all SGPA fields");
            return;
        }

        total += parseFloat(input.value);
    }

    let cgpa = total / inputs.length;

    document.getElementById("result").innerHTML =
        "Your CGPA is: <br><br>" + cgpa.toFixed(2);
}