const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Humburger.jpg",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Fish.jpg",
        category: 2
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Chicken.jpg",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Eat.jpg",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/noodle.jpg",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/fruit.jpg",
        category: 6
    }
]

const ListCategory = [
    {
        id: 1,
        name: "breakfast",
        image: "src/img/index/Breakfast.jpg"
    },
    {
        id: 2,
        name: "vegan",
        image: "src/img/index/Vegan.jpg"
    },
    {
        id: 3,
        name: "meat",
        image: "src/img/index/Meat.jpg"
    },
    {
        id: 4,
        name: "dessert",
        image: "src/img/index/Dessert.jpg"
    },
    {
        id: 5,
        name: "lunch",
        image: "src/img/index/Lunch.jpg"
    },
    {
        id: 6,
        name: "chocolate",
        image: "src/img/index/Chocolate.jpg"
    }
]
function showProducts(data) {
    const popularList = document.querySelector(".products")
    if(popularList){
        popularList.innerHTML = "";
        for (let item of data) {
            popularList.innerHTML += `
            <div class="products-list">
                <a href="detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                <a href="detail.html?id=${item.id}"><p>${item.name}</p></a>
                                
                <div class="intro">
                    <img src="src/img/index/Timer.png" alt=""> <span id="mins">30 Minutes</span>
                    <img src="src/img/index/ForkKnife.png" alt="">
                    <span>Snack</span>
                </div>                       
            </div>
            `
        }
    }
}
showProducts(ListProduct);
const filter = document.querySelector("#filter");
if(filter){
    filter.addEventListener("change", function () {
        const over30 = ListProduct.filter(function (item) {
            return item.price > 30;
        })
        const under30 = ListProduct.filter(function (item) {
            return item.price <= 30;
        })
        if (filter.value == "over30") {
            showProducts(over30);
        }
        if (filter.value == "under30") {
            showProducts(under30);
        }
        if (filter.value == "all") {
            showProducts(ListProduct)
        }
    })
}

function Showcategory() {
    const category = document.querySelector(".categoties-list");
    if(category){
        for (let item of ListCategory) {
            category.innerHTML += `
        <div class="category-list">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
        </div>
        `
        }
    }  
}
Showcategory();

function Products(){
    const prdId = new URLSearchParams(window.location.search).get("id");
    // console.log(window.location.search);
    if(prdId){
        const product = ListProduct.find(function(item){
            return item.id == prdId;
        })
        console.log(product);
        const banner = document.querySelector(".banner");
        banner.innerHTML =`
            <div class="banner-text">
                    <h1>${product.name}</h1>
                    <p>$${product.price}</p>
                    <span>${product.desc}</span> <br>
                    <input type="text" id="quanlity" placeholder="Quanlity">
                    <button id="cart">Add To Cart</button>
            </div>
            <div class="sub-banner">
                    <img src="${product.image}" alt="">
                </div>
    `
    }
}
Products();
const name123 = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const enquiry = document.querySelector('#enquiry');
const btnSubmit = document.querySelector('#btn-submit');
const showError = document.querySelector('.show-error');
btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    if(name123.value == ""){
        showError.innerHTML = "không được để trống Name";
        name123.style.border = "1px solid red"
        return false;
    } else{
        showError.innerHTML ="";
        name123.style.border = "1px solid rgba(0, 0, 0, 0.1)"
    }
    if(email.value ==""){
        showError.innerHTML = "Không được để trống"
        email.style.border = "1px solid red"
    }else{
        showError.innerHTML =""
        email.style.border = "1px solid rgba(0, 0, 0, 0.1)"
    }
    if(subject.value ==""){
        showError.innerHTML ="không được để trống"
        subject.style.border ="1px solid red"
    }else{
        showError.innerHTML ="";
        subject.style.border ="1px solid rgba(0, 0, 0, 0.1)"
    }
    if(enquiry.value ==""){
        showError.innerHTML ="không được để trống phải chọn"
        enquiry.style.border ="1px solid red"
    }else{
        showError.innerHTML ="";
        enquiry.style.border ="1px solid rgba(0, 0, 0, 0.1)"
    }
})
console.log(btnSubmit);
