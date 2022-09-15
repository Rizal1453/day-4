function submitData(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if(name == ""){
      return alert("name harus diisi")
   } else if(email == ""){
      return alert("email harus diisi")
   } else if(phone == ""){
      return alert("phone harus diisi")
   } else if(subject == ""){
      return alert("subject harus diisi")
   } else if(message == ""){
      return alert("message harus diisi")
   }

console.log(name);
console.log(email);
console.log(phone);
console.log(subject);
console.log(message);

let emailReceiver= "mntpnijal@gmail.com"
let a = document.createElement("a");
  a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`;
  a.target = "_blank";
  a.click();
}
 let namaSiswa=["bagus","rizal"]
 console.log(namaSiswa[1]);

 let satu ={
  nama : "RIzal",
  alamat :"jln bangka",
 }
let dua = {
  nama :"bagus",
  alamat:"tanggerang"
  }
 
 console.log(dua);
 let datapersonal=[{nama:aziz}]

 let data =[]



 function addData(){
  let person={
    nama:"samsul",
    address: "jakarta"

  }
  data.push(person)
  console.log(data);

 }