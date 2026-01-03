// const { default: axios } = require("axios");

console.log("FrontEnd ishga tushdi !");
// console.log("FrontEnd JS ishga tushdi");
function itemTemplate(item){
    return `  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
              <span class="item-text">
                ${ item.reja }
              </span>

              <div>
                <button
                    data-id="${item._id }"
                  class="edit-me btn btn-secondary btn-sm me-1"
                >
                  o‘zgartirish
                </button>

                <button
                  data-id="${item._id }"
                  class="delete-me btn btn-danger btn-sm"
                >
                  o‘chirish
                </button>
              </div>
            </li>
         
         `
}
let createField = document.getElementById("create-field");

document
  .getElementById("create-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();


    axios
      .post("/create-item", {
        reja: createField.value
      })
      .then((response) => {
        document
          .getElementById("item-list")
          .insertAdjacentHTML(
            "beforeend",
            itemTemplate(response.data)
          );

        createField.value = "";
        createField.focus();
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
document.addEventListener("click", function(e){
    console.log(e);
    if(e.target.classList.contains("delete-me")){
        // alert("siz delete tugmasini bosdingiz !");
        // console.log("delete bosildi")
if(confirm("Aniq ochirmoqchimisiz")){
// console.log("yes ")
axios.post("/delete-item",{id: e.target.getAttribute("data-id")}).
then((response)=>{
console.log(response.data);
e.target.parentElement.parentElement.remove();
})
.catch((err) =>{

});
}
// else{
//     console.log("Noo")
// }
    }
     if(e.target.classList.contains("edit-me")){
        alert("siz edit tugmasini bosdingiz !");
        console.log("edit bosildi")

    }
})