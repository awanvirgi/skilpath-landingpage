// Hamburger button
function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

// Nomor 6
function handleGetFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    let person = {
        name,
        email,
        city,
        zipCode,
        status
    }
    return person
}


// Nomor 7
function isNumber(string){
    if(!isNaN(Number(string))){
        return true
    }
    return false
}
let zipCode = document.getElementById("zip-code").value;


// Nomor 8
function checkboxIsChecked(){
    if(document.getElementById("status").checked){
        return true
    }else{
        return false
    }
}


// Nomor 9
function validateFormData(object){
    if(object!=null && isNumber(object.zipCode) && checkboxIsChecked()){
        return true
    }else{
        return false
    }
}
let objek = handleGetFormData()
validateFormData(objek)



// Nomor 10
let btn = document.getElementById("submit-form")
btn.addEventListener('click', submit)
function submit(event) {
    event.preventDefault()
    let warning = document.getElementById("warning")
    let objek = handleGetFormData()
    if(!validateFormData(objek)){
        warning.innerHTML="Periksa form anda sekali lagi"
        console.log("gagal")
    }else{
        warning.innerHTML=""
        console.log("berhasil")
    }
}