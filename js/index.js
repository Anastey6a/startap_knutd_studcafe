//--import { menuArray } from "./js/data.js"
//let main = document.getElementById("main")
//let footer = document.getElementById("footer")
//let checkoutDiv = document.querySelector(".checkout-div")
//let modalFull = document.querySelector(".modal-full")
//let modal = document.querySelector("#modal")
//let form = document.getElementById("form")
//let selectedItems = []
//let runningTotal = 0

//modal.style.display = "none"
//modalFull.style.display = "none"

//document.addEventListener("click", function(e) {
  //  if(e.target.id == "button") {
    //    handleBtnClick(e.target.dataset.id)
    //}
    //else if(e.target.id == "remove-btn") {
      //  removeItem(e.target.dataset.id)
    //}
    //else if(e.target.id == "checkoutBtn") {
      //  handleCheckoutBtnClick()
    //}
    //else if(e.target.id == "close-btn") {
      //  closeModal()
    //}
//})

//form.onsubmit = function() {
  //  modal.innerHTML = `
    //    <div class="modal-order-placed">
      //      <h2>Order Placed!</h2>
        //    <i class="fa-solid fa-check"></i>
        //</div>
  //  `
//setTimeout(function() {
  //  modal.style.display ="none"
  //  modalFull.style.display = "none"
//},2000)
//selectedItems = []
//render()
//checkoutDiv.innerHTML = `
  //  <div class="total-div">
    //    <p>Click the plus icon to add items<p>
    //</div>
//`
//}

//function closeModal() {
  //  modal.style.display = "none"
    //modalFull.style.display = "none"
//}

//function removeItem(removeId) {
  //  const removeMenuObj = selectedItems.filter(function(item) {
    //    return item.id == removeId
    //})[0]
    //selectedItems.pop(removeMenuObj)
    //render()
//}

//function handleCheckoutBtnClick() {
  //  modal.style.display = "block"
 //   modalFull.style.display = "block"
//}



//function handleBtnClick(menuId) {
  //  const menuObj = menuArray.filter(function(item) {
 //      return item.id == menuId
   // })[0]
    //selectedItems.unshift(menuObj)
    //render()
//}


//for(let index in menuArray) {
  //  main.innerHTML += 
    //`<div class="menu-container">
//        <div class="emoji-div">
  //          <p class="emoji">
    //        ${menuArray[index].emoji}</p>
     //   </div>
     //   <div class="menu-div">
     //       <h2>${menuArray[index].name}</h2>
     //       <p>Ingredients: ${menuArray[index].ingredients}</p>
     //       <p>$${menuArray[index].price}</p>
     //   </div>
     //   <div class="button-div">
     //       <i class="fa-solid fa-circle-plus button" id="button" data-id="${menuArray[index].id}"></i>
     //   </div>
    //</div>`
    //}

//function render() {
  //  footer.innerHTML = " "
  //  runningTotal = 0
  //  for(let item in selectedItems) {
   //     runningTotal += selectedItems[item].price
     //   console.log(runningTotal)
     //   footer.innerHTML += 
     //   `<div class="footer-container">
     //       <div class="footer-div">
       //         <div class="footer-div1">
         //           <h2>${selectedItems[item].name}</h2>
         //           <button class="remove-btn" id="remove-btn" data-id="${selectedItems[item].id}">Remove</button>
         //       </div>
         //       <p>$${selectedItems[item].price}</p>
         //   </div>
      //  </div>`
    //}
    //checkout()
    //if(selectedItems.length>8) {
      //  alert("Whoa there, too many items")
    //}
//}

//checkoutDiv.innerHTML = `
 //   <div class="total-div">
   //     <p>Click the plus icon to add items<p>
    //</div>
//`
//function checkout() {
//checkoutDiv.innerHTML = `
  //  <div class="total-div">
    //    <p>Your Total is $${runningTotal}<p>
    //    ${runningTotal>0 ? `<button class="checkout-btn" id="checkoutBtn">Checkout</button>` : " "}
    //</div>
//`
//}--//