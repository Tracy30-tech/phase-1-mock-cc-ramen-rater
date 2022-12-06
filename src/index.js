// write your code here
document.addEventListener("DOMContentLoaded", event =>{
    fetch ("http://localhost:3000/ramens")
      .then (response => response.json())
      .then (menuItems => {
        // loadMenuItems(menuItems)
        for(let image of menuItems){
         createMenu(image) 
        }  
      } )
})
let form = document.getElementById("new-ramen")
form.addEventListener("submit", (e)=>{
     e.preventDefault()
     let name = e.target.name.value
     let restaurant = e.target.restaurant.value
     let image = e.target.image.value
     let rating = e.target.rating.value
     let comment = e.target.new_comment.value
     let menuItems = {
        name:name,
        restaurant:restaurant,
        image:image,
        rating:rating,
        comment:comment,
     }
     createMenu(menuItems)
     showDetails(menuItems)
     e.target.reset()
})

function createMenu (image){
  let container = document.getElementById("ramen-menu")
            let img = document.createElement("img")
            img.addEventListener("click",(e) =>{
                 showDetails(image)
            })
            img.setAttribute("src", image.image)
            container.appendChild(img)
        }

function showDetails(image){
  let detail_image= document.querySelector(".detail-image")
                 detail_image.setAttribute("src", image.image)
                 let name= document.querySelector(".name")
                 name.textContent = image.name
                 let restaurant = document.querySelector(".restaurant")
                 restaurant.textContent = image.restaurant
                 document.getElementById("rating-display").textContent =image.rating
                 document.getElementById("comment-display").textContent =image.comment
}
// function loadMenuItems (items){
//   for (let item of items) {
//     loadSingleItem(item)
//   } 
    
// }

// function loadSingleItem (item){
//     let container = document.getElementById("ramen_menu")
//     let img = document.createElement("img")
        // img.addEventListener("click",(e) =>{
        //   let detail_image= document.querySelector(".detail-image")
        //          detail_image.setAttribute("src", image.image)
        //          let name= document.querySelector(".name")
        //          name.textContent = image.name
        //          let restaurant = document.querySelector(".restaurant")
        //          restaurant.textContent = image.restaurant
        //          document.getElementById("rating-display").textContent =image.rating
        //          document.getElementById("comment-display").textContent =image.comment
        // })
//     img.setAttribute("src", item.image)
//     container.appendChild(img)
// }

