let firstname1 = prompt("First name1; ")
let firstname2 = prompt("First name2; ")
let firstname3 = prompt("First name3; ")

let arr = []

arr.push(firstname1)
arr.push(firstname2)
arr.push(firstname3)

function friendlyNames(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length ; i++){
        arr1.push(arr[i].charAt(0).toUpperCase() )
    }
    return arr1
}

let result = friendlyNames(arr)
document.write(result)