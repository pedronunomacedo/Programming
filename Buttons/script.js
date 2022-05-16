function addRestaurants(category) {
    console.log(category + '-anchor');
    var categoryAnchor = document.getElementById(category + '-anchor');
    categoryAnchor


    var restaurantsList = document.getElementById('list-restaurants');
    restaurantsList.innerHTML = "";
    for (let i = 1; i < 8; i++) {
        var img = new Image();
        if (category == 'sushi') img.src = 'img/sushi/image' + i + '.png';
        else if (category == 'pizza') img.src = 'img/restaurants/restaurant' + i + '.png';
        restaurantsList.onclick("changeColor('green')");
        restaurantsList.appendChild(img);
    }
}
