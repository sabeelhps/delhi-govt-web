
let menu = [ 
    "Kadhai Chicken","Kadhai Paneer","Chhole Bhature",
    "Egg Curry","Dal Makhni","Pav Bhaji","Garlic Bread",
    "Onion Rings","Jalebi Rabri","Gulab Jamun","Onion Dosa",
    "Butter Paneer","Onion Kachori","Butter Chicken","Egg Roll"
]

function isVeg(food){

    if(food.toLowerCase().indexOf("chicken")!==-1 ||food.toLowerCase().indexOf("egg")!==-1){
        return false;
    }else{
        return true;
    }
}

function isOnionGarlicFree(food){

    if(food.toLowerCase().indexOf("onion")!==-1||food.toLowerCase().indexOf("garlic")!==-1){
        return false;
    }
    else{
        return true;
    }

}



let vegMenu = menu.filter(isVeg);
console.log(vegMenu);

let jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);
console.log(jainMenu);


