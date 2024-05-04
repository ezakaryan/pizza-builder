function add(type, value, check){
    if(type != 'topping'){
       [...document.getElementsByClassName(type)].forEach(function(element){
        element.style.opacity = 0
       }) 
       document.getElementById(value).style.opacity = 1;
    }else{
        if(check == true){
            document.getElementById(value).style.opacity = 1;
        } else{
            document.getElementById(value).style.opacity = 0;
        }

    }
}
