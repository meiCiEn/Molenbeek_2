// Création de la map numéro 1:

const centroid = [50.859619, 4.316703];
const map = L.map('mapid1').setView(centroid, 16.5);

//Définition des couleurs des marqeurs
let current_red = 0;

const mk1 = new L.Icon({
    iconUrl: 'assets/img/icons/markers/1.svg',
    // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

// Add OSM tiles:
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Ajout de POI: cfr:json1.js


//Récupération des id pour créer une fonction qui permet de cliquer sur les liens:

const linkTemplate = `<span class="clickable"><li>__lieu__</li></span>`;

$(document).ready(function(){


    for(let index in DATA_ITIN1) {
        const link = $(linkTemplate.replace('__lieu__', DATA_ITIN1[index].lieu)).click(function (){
            update_markers(index);
            // alert("Hello! This works."); NOT WORKING!
        });
        $('.links').append(link);

    }
    });
    
//Fonction:
    
    function update_markers(new_red) {
        if (new_red !== current_red){
            markers[new_red][0].removeFrom(map);
            markers[new_red][1].addTo(map).openPopup();
    
            markers[current_red][1].removeFrom(map);
            markers[current_red][0].addTo(map);
    
            current_red = new_red;
        }
    }
    

//Trace itinéraire:
var latLng = [
    [50.859619, 4.316703],
    [50.859936, 4.310880],
    [50.857926, 4.308880],
    [50.855942, 4.311382],
    [50.854320, 4.316353],
    [50.851194, 4.313364],
    [50.851597, 4.300140]
   
];

var polyline = L.polyline(latLng, {color: '#003366'}).addTo(map);

// légende

const legende = document.querySelector(".legend-page-wrapper");
const minimiseText = document.querySelector(".minimise-text");
// function callback(mutationList, observer) {
//     mutationList.forEach(function(mutation) {
//       if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//         // handle class change
//       }
//     })
//   }

  
  // La div où une classe sera ajouté lorsque l'utilisateur clique sur un marqueur
  const divClassChange = document.querySelector(".leaflet-popup");

  
console.log( `minimiseText : `, minimiseText, `legende : `, legende);

minimiseText.addEventListener("click", function() {
    legende.classList.toggle("minimise");
    legende.style.transition = "all 0.5s";
    if (minimiseText.innerHTML === "Minimiser légende") {
        minimiseText.innerHTML = "Afficher légende";
    }

else {
    minimiseText.innerHTML = "Minimiser légende";
}
});


const DATA_ITIN2 = {
    routeInfo: [{
        distance: 8, // distance du trajet
        time: 2, // temps du trajet
        target: `` // personnes ciblées
    }],
    items: [{ 
        lat : 50.859619,
        lng: 4.316703,
        lieu: `Parc du Karreveld`,
        alt: `Parc du Karreveld`,
        image: `assets/img/itin3/karreveld.jpg`,
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://www.scheutbos.be/pages/les-sites-voisins/parc-du-karreveld.html`,
        website: `Parc du Karreveld`,
        description: `Ce parc de 3 hectares entoure la ferme du château de Karreveld et abrite de nombreux arbres remarquables, autochtones et exotiques.`
    },
    { 
        lat: 50.859936,
        lng: 4.310880,
        lieu: `Cimetière de Molenbeek`,
        alt: `Cimetière de Molenbeek`,
        image: `assets/img/itin1/cimetiere.JPG`,
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://www.lafonderie.be/2020/05/13/le-cimetiere-de-molenbeek/`,
        website: `Le cimetière de Molenbeek-Saint-Jean : visite guidée`,
        description: `Le cimetière de Molenbeek-Saint-Jean est un des plus anciens de Bruxelles. Il s'agit du premier cimetière laïque ouvert après la "guerre des cimetières" qui a fait rage au milieu du XIXe siècle entre catholiques et libéraux.`
    },
    {
        lat: 50.857926,
        lng: 4.308880,
        lieu: `Quartier Diongre`,
        image: `assets/img/itin1/quartierDiongre.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.visit.brussels/fr/visiteurs/venue-details.Cite-jardin-Diongre.277790`,
        website: `Cité-jardin Diongre`,
        description: `Le cité-jardin Diongre, construit entre 1922 et 1925, porte le nom de son architecte, Joseph Diongre, qui a aussi dessiné l'édifice Flagey et l'imposante église Saint-Jean-Baptiste à Molenbeek-Saint-Jean.`
    },
    {
        lat: 50.855942,
        lng: 4.311382,
        lieu: `Stade Edmond Machtens`,
        image: `assets/img/itin1/stade.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.visit.https://www.rwdm.be/fr/stade-mobilite/`,
        website: `Stade Edmond Machtens : stade et mobilité`,
        description: `Le stade Edmond Machtens est actuellement le terrain de l'équipe de football RWD Molenbeek. Le club évolue en D1B depuis la saison 2021-2022.`

    },
    {
        lat: 50.854320,
        lng: 4.316353,
        lieu: `Parc des Muses`,
        image: `assets/img/itin1/parcDesMuses.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.scheutbos.be/pages/les-sites-voisins/parc-des-muses.html`,
        website: `Parc des Muses`,
        description: `Cette zone de verdure est dédiée aux Muses, les 9 filles de Zeus.`        
    },
    {
        lat: 50.851194,
        lng: 4.313364,
        lieu: `Parc Albert & Marie-José`,
        image: `assets/img/itin1/parcAlbert&MJ.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.scheutbos.be/pages/les-sites-voisins/parc-marie-jose.html`,
        website: `Parc Albert & Marie-José`,
        description: `Ce parc de 4 hectares, situé à côté de la gare de l'ouest, comprend 3 étangs, de vastes pelouses, une hêtraie acidophile et beaucoup d'arbres remarquables. La municipalité de Molenbeek acquiert le terrain en 1920. L'architecte paysagiste Louis Van der Swaelmen en fit un parc public`
    },
    {
        lat: 50.851597,
        lng: 4.300140,
        lieu: `Parc Scheutbos`,
        image: `assets/img/itin1/parcScheutbos.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.scheutbos.be/`,
        website: `Parc Scheutbos`,
        description: `Le parc contient un certain nombre de potagers gérés par Bruxelles Environnement, ainsi qu'une grande aire de jeux d'aventure pour les enfants de 3 à 12 ans.`  
    }]
};

console.log(DATA_ITIN2.items);

// get information for a particular item
const item_lat = DATA_ITIN2.items[1].lat;
console.log(item_lat);



//loop through array and get info on all items
DATA_ITIN2.items.forEach(item => {
for (let key in item) {
      console.log(`${key}: ${item[key]}`)
    }
});
//TODO Generate popup container; 
//TODO set to height 0;
//TODO click event on marker : add class (popped-up or something) to popup container
//TODO click event on marker : use variables you made below for creating the popup to change the inner HTML of the title, website, description text to a template string ${} which includes the values of items in DATA_ITIN2 (title, place, website etc.); e.g. ${DATA_ITIN2.items[i].image}
//TODO in SCSS set class .popped-up to full height
//TODO close pop up when X clicked
// TODO link legend list items with markers on map
// TODO Choose right marker for each marker (put marker files in an array and associate no 1 with first marker etc.)
// Generate the popup container
// function createPopup() {}

const popupContainer = document.querySelector(".popup-container");
const popupContainerThumb = document.createElement("div");
popupContainerThumb.className = "popup-container__thumb";
popupContainer.appendChild(popupContainerThumb);
const popupContainerXWrap = document.createElement("div");
popupContainerXWrap.className = "x-wrap";
popupContainerThumb.appendChild(popupContainerXWrap);
const popupContainerX = document.createElement("i");
popupContainerX.className = "popup-container__x fa-solid fa-xmark";
popupContainerXWrap.appendChild(popupContainerX);
const popupContainerImg = document.createElement("img");
popupContainerImg.className = "popup-container__img";
popupContainerImg.setAttribute("src", `https://picsum.photos/200/300`);
popupContainerImg.setAttribute("alt", ``);
popupContainerThumb.appendChild(popupContainerImg);
const popupContainerInfo = document.createElement("div");
popupContainerInfo.className = "popup-container__info";
popupContainer.appendChild(popupContainerInfo);
const popupContainerTitle = document.createElement("h3");
popupContainerTitle.className = "popup-container__title";
popupContainerTitle.innerHTML = `le titre va ici`;
popupContainerInfo.appendChild(popupContainerTitle);
const popupContainerDescription = document.createElement("div");
popupContainerDescription.className = "popup-container__description";
popupContainerInfo.appendChild(popupContainerDescription);
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
p2.innerText = ``;
//! for click event below : if p2 innerText = ``, then display none
popupContainerDescription.appendChild(p1, p2);
const popupContainerWebsite = document.createElement("div");
popupContainerWebsite.className = "popup-container__website";
popupContainerInfo.appendChild(popupContainerWebsite);
const popupContainerGlobe = document.createElement("i");
popupContainerGlobe.className = "popup-container__globe fa-solid fa-globe";
const url = document.createElement("a");
url.setAttribute("href", "#");
url.setAttribute("target", "_blank");
url.innerText = `l'URL va ici`;
popupContainerWebsite.appendChild(popupContainerGlobe);
popupContainerWebsite.appendChild(url);

console.log(popupContainer);
popupContainer.style.display  = 'none';
popupContainer.style.opacity = '0';
// popupContainer.style.display = 'none';

// Create an array to store each marker's reference. Call this array markers.
let markers = [];
let imgSrc = 
// create an index for each marker
// create markers
DATA_ITIN2.items.forEach((item, i) => 
markers[i] = L.marker([item.lat,item.lng], { icon: mk1},).addTo(map)
// when card is clicked, alert latitud
.on('click', function () {

        // create the template of the popup box
        popupContainerImg.setAttribute("src", `${DATA_ITIN2.items[i].image}`);
        popupContainerImg.setAttribute("alt", `${DATA_ITIN2.items[i].alt}`);
        popupContainerTitle.innerText = `${DATA_ITIN2.items[i].lieu}`;
        popupContainerDescription.innerHTML = `<p>${DATA_ITIN2.items[i].description}</p>`;
        url.href = `${DATA_ITIN2.items[i].url}`;
        url.innerText = `${DATA_ITIN2.items[i].website}`;
        // add or remove class 'show-popup' to popupContainer when marker is clicked
        popupContainer.classList.toggle('show-popup')
        // if popupContainer contains the class 'show-popup', make it display:flex, opacity: 1;
        if (popupContainer.classList.contains("show-popup")) {
        popupContainer.style.display = 'flex'   
            setTimeout(function () {
            popupContainer.style.opacity = 1;
          }, 100);
          popupContainer.style.transitionDuration = "1s";}

          // but if popupContainer doesn't contain the class 'show-popup', don't display it and set opacity to zero
          else {
            popupContainer.style.opacity = 0;
            popupContainer.style.display = 'none';
            popupContainer.style.transitionDuration = "1s";
      }
    }
))

// remove class 'show-popup', display: none, set opacity to zero
popupContainerXWrap.addEventListener('click', function () {
    popupContainer.classList.remove('show-popup');
        popupContainer.style.opacity = 0;
        popupContainer.style.display = 'none';
        popupContainer.style.transitionDuration = "1s";
    }
   //! why won't it fade out?
) 

  // La div popup où je veux afficher les données pour chaque point sur la carte, tirées de DATA_ITIN1 (dans json1.js)
  const popupX = document.querySelector(".popup-container__x");

console.log(markers);
console.log(DATA_ITIN2.items)

//create dynamic variable
function dynamicVar(){
    var ele = [];
    for (var i = 0; i < DATA_ITIN2.length; ++i) {
    ele[i] = DATA_ITIN2[i];
console.log(ele)}};


dynamicVar();


// businesses.forEach((element, i) => 
//    markers[i] = L.marker([element.coords[0],element.coords[1]]).addTo(mymap)
//    .bindPopup("<strong>"+element.name+"</strong>"));
// create a marker without a popup 


// DATA_ITIN2.forEach((element, i) => 
//    markers2[i] = L.marker([element.lat,element.lng]).addTo(map)
//    .bindPopup("<strong>"+element.lieu+"</strong>"));