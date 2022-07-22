// themes
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    let theme =document.querySelector(".theme")
    if(theme.innerText.toUpperCase() == PROFILE_DATA.theme.toUpperCase()){
       theme.innerText = "Dark theme"
    }
    else {
        theme.innerText = PROFILE_DATA.theme
    }
  
});

// back ground color 
let colors_object = {
    blue: "#44b1f6",
    green: "#488546",
    red: "#963321",

}
// <li><a class="dropdown-item" href="#">blue</a></li>
console.log(Object.keys(colors_object))
Object.keys(colors_object).forEach(function (color) {
    console.log(color)
    let itemList = document.createElement("li")
    let item = document.createElement("a")
    item.classList.add("dropdown-item")
    item.innerText = `${color}`
    itemList.appendChild(item)
    //add menu items
    document.querySelector(".dropdown-menu").appendChild(itemList)

})

let bgColors = document.querySelectorAll(".dropdown-item")
bgColors.forEach(function (item) {
    // onclick change back ground color
    item.addEventListener("click", function () {
        let color = this.innerHTML
        console.log(color, colors_object[`${color}`])
        document.body.style.backgroundColor = colors_object[color]
    })
})



//active nav menu item
let nav_items = document.getElementsByClassName("nav-item")
var deactivate = function () {
    Array.from(nav_items).forEach((e => {
        e.classList.remove("active_nav_menu")
    }))
}

Array.from(nav_items).forEach(element => {
    element.addEventListener("click", () => {
        deactivate()
        element.classList.add("active_nav_menu")
//     $(".profile-content-bottom").html(`<div class="row p-2 ">
//     <div id="" class="col-l-3 col-md-3">
//         <div class="tweet-profile-pic">
//             <img src="" alt="" data-profile="profile-pic">
//         </div>


//     </div>
//     <div class="col-l-9 col-md-9 tweet-content">
//         <div class="profile-name-container secondary-font-color ">
//             <h5 data-profile="name">profile name</h5>
//             <i class="fas fa-certificate ms-3"></i>
//         </div>
//         <i class="fas fa-ellipsis-h  "></i>


//         <p class="tweet-content">Lorem Ipsum is simply dummy text of the printing and
//             typesetting industry.</p>
//         <div class="tweet-reactions ">
//             <h6><i class="far fa-comment mx-2"></i> 568k</h6>
//             <h6><i class="fas fa-retweet mx-2"></i> 568k</h6>
//             <h6><i class="far fa-heart mx-2"></i> 568k</h6>
//             <h6><i class="fas fa-upload mx-2"></i></h6>
//         </div>

//     </div>
// </div>`)

    })

});

var PROFILE_DATA ={
    name:"John Doe",
    profile_pic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    profile_cover_img:"https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg",
    theme:"light theme",

}
// load data
window.onload = function() {
    let profile_name = document.querySelectorAll('[data-profile="name"]' )
    console.log(profile_name )
    profile_name.forEach(function(name){
        name.innerText=PROFILE_DATA.name
    })

    let profile_pic = document.querySelectorAll('[data-profile="profile-pic"]')
       profile_pic.forEach(function(img){
        img.src =PROFILE_DATA.profile_pic

       })

    // document.querySelector('[data-profile="profile-cover-img"]').src=PROFILE_DATA.profile_cover_img

    let theme = document.createElement("div")
    theme.classList.add("mx-3")
    theme.classList.add("theme")
    theme.innerText=PROFILE_DATA.theme
    document.querySelector(".card-theme").insertBefore(theme, document.querySelector(".card-theme").firstElementChild)
  };

//   function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }


{/* <div class="row p-2 ">
                            <div id="" class="col-l-3 col-md-3">
                                <div class="tweet-profile-pic">
                                    <img src="" alt="" data-profile="profile-pic">
                                </div>


                            </div>
                            <div class="col-l-9 col-md-9 tweet-content">
                                <div class="profile-name-container secondary-font-color ">
                                    <h5 data-profile="name">profile name</h5>
                                    <i class="fas fa-certificate ms-3"></i>
                                </div>
                                <i class="fas fa-ellipsis-h  "></i>


                                <p class="tweet-content">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.</p>
                                <div class="tweet-reactions ">
                                    <h6><i class="far fa-comment mx-2"></i> 568k</h6>
                                    <h6><i class="fas fa-retweet mx-2"></i> 568k</h6>
                                    <h6><i class="far fa-heart mx-2"></i> 568k</h6>
                                    <h6><i class="fas fa-upload mx-2"></i></h6>
                                </div>

                            </div>
                        </div> */}
