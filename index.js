//*******Apparition de la barre de navigation au scroll */

const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 250) {
    navigation.style.top = 0;
  }else{
      navigation.style.top = "-65px"
  }
});


