let num = [2, 8, 5, 4, 9, 6];
let all = 0;
function res() {
for (let i = 0; i < num.length; i++) {
    all += num[i];
}
return all
}
let result = res()
document.write(result);