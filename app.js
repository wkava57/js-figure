let balls = document.getElementsByClassName('ball');
// déclarer la variable balls et  récupère tous les éléments ball

document.onmousemove = function() {
// récupère  les coordonnées de la souris
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
// C'est une boucle 
    for(let i = 0; i < 2; i++){

        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translater(-" + x +",-" + y + ")";
    }

    console.log("x =" + x);
    console.log("y =" + y)
}
// getElementByTagName: rappeler les noms des balises 
// getElementByClassName: rappeler un élément
// getElementsByClassName: plus précis sur la recherche
// querySelector: moins préccis 
// querySelectorAll: récupère tous les éléments

// let div3 = document.getElementsByName("test")[2]
// test.addEventListener:"click", (opacityOne(test));





// function opacityOne()