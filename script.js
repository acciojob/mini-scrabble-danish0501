let count;

document.getElementById("evaluatedText").value = "";

document.addEventListener("keyup", function () {
    count = document.getElementById("evaluatedText").value;
    document.getElementById("letterCount").textContent = count.length;
    console.log(count);
});
