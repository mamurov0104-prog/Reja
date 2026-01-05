// const { default: axios } = require("axios");

console.log("FrontEnd ishga tushdi !");
// console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item){ // Backenddan kelgan object → HTML ga aylantiradi
    return `  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
              <span class="item-text">
                ${ item.reja }
              </span>

              <div>
                <button
                    data-id="${item._id }"
                  class="edit-me btn btn-secondary btn-sm me-1"
                >
                  수정
                </button>

                <button
                  data-id="${item._id }"
                  class="delete-me btn btn-danger btn-sm"
                >
                  삭제
                </button>
              </div>
            </li>
         
         `
}

/* ----------- RAQAMLASH FUNCTION (QO‘SHILDI) ----------- */
/*
function reNumberItems() {
  const items = document.querySelectorAll("#item-list li");

  items.forEach((item, index) => {
    let numberSpan = item.querySelector(".item-number");

    if (!numberSpan) {
      numberSpan = document.createElement("strong");
      numberSpan.classList.add("item-number");
      numberSpan.style.marginRight = "8px";
      item.querySelector(".item-text").prepend(numberSpan);
    }

    numberSpan.innerText = (index + 1) + ". ";
  });
}
*/
/* ----------------------------------------------------- */

let createField = document.getElementById("create-field");

document
  .getElementById("create-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();


    axios
      .post("/create-item", {
        reja: createField.value // Reja qo‘shish
      })
      .then((response) => {
        document
          .getElementById("item-list")
          .insertAdjacentHTML( //- ahifaga darhol qo‘shiladi
            "beforeend",
            itemTemplate(response.data)
          );

        createField.value = "";
        createField.focus();

        // reNumberItems(); // 
      })
      .catch((err) => {
        console.log(err+"Iltimos qaytadan urining!");
      });
  });

  /*
  e.preventDefault() → form sahifani refresh qilmasin

axios.post() → backendga ma’lumot yuboradi

response.data → backenddan qaytgan yangi item

insertAdjacentHTML() → sahifaga yangi element qo‘shadi

createField.value = "" → inputni tozalaydi
  */
document.addEventListener("click", function(e){ // Delete (Event Delegation)
    console.log(e);
    if(e.target.classList.contains("delete-me")){ // Delete tugmasi bosildimi?
        // alert("siz delete tugmasini bosdingiz !");
        // console.log("delete bosildi")
if(confirm("정말로 삭제하시겠습니까?")){
// console.log("yes ")
axios.post("/delete-item",{id: e.target.getAttribute("data-id")}). //Backendga ID yuboriladi
then((response)=>{
console.log(response.data);
e.target.parentElement.parentElement.remove(); // DOM’dan o‘chiriladi
// reNumberItems(); // 
})
.catch((err) =>{

});
}
// else{
//     console.log("Noo")
// }
    }
     if(e.target.classList.contains("edit-me")){
      let userInput = prompt("수정할 내용을 입력하세요:", 
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
      if(userInput){
        axios
        .post("/edit-item",{
          id:e.target.getAttribute("data-id"),
          new_input:userInput,
        })
        .then((response)=>{
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML=userInput;
          // reNumberItems(); // 
        })
        .catch((err)=>{
          console.log("Iltimos qayta urininib koring ! ");
        })
      }


      /*
        alert("siz edit tugmasini bosdingiz !");
        console.log("edit bosdingiz !")
       */
    }
});

// -----------------all deleted -----------------

document.getElementById("clean-all").addEventListener("click",function(){
  axios
  .post("/delete-all",{delete_all:true})
  .then((response)=>{
    alert(response.data.state);
    document.getElementById("item-list").innerHTML = "";
    // reNumberItems(); // 
  })
})

// reNumberItems(); 

/*
Foydalanuvchi reja yozadi

Reja MongoDB ga saqlanadi

Sahifada real-time qo‘shiladi

Reja o‘chiriladi

Backend + Frontend AJAX (axios) orqali gaplashadi
 */
