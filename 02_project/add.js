const restaurants = [
    {
        name: "Suite Food Lounge",
        cuisine: "Vegan",
        image: "images/food1.jpg"
    },

    {
        name: "Spicy Dragon",
        cuisine: "Asian",
        image: "images/food2.jpg"
    },

    {
        name: "Luscious Blue Caffino",
        cuisine: "French",
        image: "images/food3.jpg"
    }

];

const main = document.querySelector(".main-content");

function showRestaurants(data){

    main.innerHTML="";

    data.forEach((item,index)=>{

        main.innerHTML += `

        <div class="card">

            <div class="rank">
                <h1>${index+1}</h1>
            </div>

            <div class="details">

                <h2>${item.name}</h2>

                <div class="tags">
                    <span class="${item.cuisine.toLowerCase()}">${item.cuisine}</span>
                </div>

            </div>

            <div class="image">
                <img src="${item.image}">
            </div>

        </div>

        `;

    });

    localStorage.setItem("restaurants",JSON.stringify(restaurants));

}

showRestaurants(restaurants);

const addBtn=document.querySelector("#addBtn");

addBtn.addEventListener("click",()=>{

    const name=document.querySelector("#restaurantName").value;

    const cuisine=document.querySelector("#restaurantCuisine").value;

    if(name===""){

        alert("Enter Restaurant Name");

        return;

    }

    restaurants.push({

        name:name,

        cuisine:cuisine,

        image:"images/food1.jpg"

    });

    showRestaurants(restaurants);

});

const cuisineFilter=document.querySelectorAll("select")[1];

cuisineFilter.addEventListener("change",()=>{

    let value=cuisineFilter.value;

    if(value==="Select cuisine"){

        showRestaurants(restaurants);

        return;

    }

    const result=restaurants.filter((item)=>{

        return item.cuisine===value;

    });

    showRestaurants(result);

});