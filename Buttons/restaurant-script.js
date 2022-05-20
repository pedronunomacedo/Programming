window.onload = function() {
    var restaurant = getUrlParameters();
    // addBackgroundColor(category);
    changePageTitle(restaurant);
    addMainImage(restaurant);
    addRestaurantTitle(restaurant);
    addRestaurantDescription(restaurant);
    addRestaurantPlates(restaurant);
}


function getUrlParameters() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var rest = url.searchParams.get("restaurant");
    return rest;
}


function changePageTitle(restaurant) {
    var restaurantCapitalized = restaurant.charAt(0).toUpperCase() + restaurant.slice(1);
    document.title = restaurantCapitalized;
}


function addRestaurantTitle(restaurant) {
    var restaurantTitle = document.getElementById("restaurant-title");

    restaurantTitle.innerHTML = restaurant.charAt(0).toUpperCase() + restaurant.slice(1);
}


function addMainImage(restaurant) {
    var mainImage = document.getElementById("main-image");
    mainImage.src = "img/main_restaurant.png";
}


function addRestaurantDescription(restaurant) {
    var moreInfo = document.getElementById("more-info");
    moreInfo.href = "restaurant-description.html?restaurant=" + restaurant;
}


function addRestaurantPlates(restaurant) {
    var menuList = document.getElementById("vertical-menu");
    var platesList = document.getElementById("plates");

    for (let i = 0; i < 4; i++) {
        var platePicture = document.createElement("picture");
        var plateImg = document.createElement("img");
        var tag = document.createElement("figcaption");

        platePicture.href = "img/pizza/main_image.png";
        tag.innerHTML = "Plate" + i;
        platesList.appendChild(platePicture);
    }
    
}