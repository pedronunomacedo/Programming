window.onload = function() {
    var category = getUrlParameters();
    addMainImage(category);
    addCategoryTitle(category);
    addCategoryRestaurants(category);
}


function getUrlParameters() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var cat = url.searchParams.get("category");
    return cat;
}


function addCategoryTitle(category) {
    var categoryTitle = document.getElementById("category-title");

    categoryTitle.innerHTML = category.charAt(0).toUpperCase() + category.slice(1);
}


function addMainImage(category) {
    var mainImage = document.getElementById("main-image");
    mainImage.src = "img/" + category + "/main_image.png";
}


function addCategoryRestaurants(category) {
    var restaurantsList = document.getElementById('list-restaurants');
    for (let i = 1; i < 8; i++) {
        var restaurantPicture = document.createElement("picture");
        restaurantPicture.className = "restaurant";
        restaurantPicture.id = "restaurant" + i;
        restaurantsList.appendChild(restaurantPicture);
        restaurantPicture = document.getElementById("restaurant" + i);
        var image = new Image();
        image.src = "img/" + category + "/restaurants/restaurant" + i + ".png";
        var tag = document.createElement("figcaption");
        tag.innerHTML = "Restaurant" + i;

        restaurantPicture.appendChild(image);
        restaurantPicture.appendChild(tag);
        restaurantsList.appendChild(restaurantPicture);
    }
}