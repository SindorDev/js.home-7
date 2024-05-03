function numbers() {
    let num1 = prompt("Toq harflar sonini kiriting");
    let num2 = prompt("Juft harflar sonini kiriting");
    for (let i = 0; i <= numbers.length; i++) {
        if (i % 2 == 0) {
            num1 += i;
        } else {
            num2 += i;
        }
    }
    return num1 + num2;
}
document.write(numbers());