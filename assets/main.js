// Fetch my json file
let response;

/* Récupérer des données à partir d'un fichier json, puis les afficher sur la page html. */
fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    response = data;
    return data;
  })
  .catch((err) => console.log(err));
/* Itération dans la réponse et journalisation de chaque élément dans la console. */
/* Array.from(data).forEach((item) => {
  console.log(item);
  item.forEach((item) => {
    console.log(item);
  }); */
  /* Tentative d'affichage des données dans le fichier HTML. */
    /* document.getElementById("data").innerHTML = data; */
    /* document.getElementById("data").innerHTML = data[0]; */
// Display my data in a loop
/* for ( let variable in Object)
    statement  */
