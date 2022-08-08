// Here we are changing the paragraph text by taking the input from the form

function changeText(e) {
  // e.preventDefault();
  const a = document.getElementById("username").value;
  console.log(a);
  document.querySelector(".abhi").innerHTML = a;

  const b = document.getElementById("tktnumber").value;
  console.log(b);
  document.querySelector(".tkt1").innerHTML = b;

  const c = document.getElementById("name1").value;
  console.log(c);
  document.querySelector(".signature_name").innerHTML = c;
}

// this is to detect any keypress on the entire document

document.addEventListener("keypress", function (event) {
  console.log(event);
  main(event.key);
})

function main(key){
  if (key == "Enter") {
    

  document.getElementById("paragraph").style.display = "block";
  document.querySelector(".forms").style.display="none"
}
}

function showDiv(){
  document.getElementById("paragraph").style.display = "block";
  document.querySelector(".forms").style.display="none"

}


// The Checkbox funtion Starts here

function checkBox() {
  let checkBox = document.getElementById("final");
  let finalText = document.getElementById("finalFollowup");

  if (checkBox.checked == true) {
    finalText.innerHTML = "Final Follow-up";
  } else {
    finalText.innerHTML = "Follow-up";
  }
}




// function copy(){
//   let copyText=document.getElementById("textcopy");

// copyText.select();
// copyText.setSelectionRange(0, 99999);
// navigator.clipboard.writeText(copyText.value);
// }



//  let name = document.getElementById("name1");
//  let username=document.getElementById("username");
//  let ticketnumber=document.getElementById("tktnumber");
//  let form =document.getElementById("form");
//  let error = document.getElementById("error");

//  form.addEventListener('submit' (e)=>{
// let messages=[];

// if (name.value=='')

//  })
