//
<?php
// trouve le chemin du serveur et du répertoire racine
$path = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
$path .= $_SERVER["SERVER_NAME"] . dirname($_SERVER["PHP_SELF"]);
echo $path;

// Utiliser <?php echo $path . "... "; pour des liens 
?>

<section class="section">

	<div class="map-container">
		<!--<div id="map" class="map"></div>-->
		<div id="mapid1" class="container-fluid"></div>
	</div>
	<div id="popup-card" class="popup-card"></div>
	<div class="legend-page-wrapper minimise-legende">

		<div class="title-box">
			<div class="tab-wrapper">
				<div class="tab tab--desktop minimise-text">Minimiser légende</div>
			</div>
			<h3>
				Parcours vélo (6,5km)
			</h3>
		</div>
		<div class="points-list">
			<ol class="links">
				<span class="clickable" id="parcDuKarreveld">
					<li>Parc du Karreveld</li>
				</span>
				<span class="clickable" id="cimetiereDeMolenbeek">
					<li>Cimetière de Molenbeek</li>
				</span>
				<span class="clickable" id="quartierDiongre">
					<li>Quartier Diongre</li>
				</span>
				<span class="clickable" id="parcDuScheutbos">
					<li>Stade Edmond Machtens</li>
				</span>
				<span class="clickable" id="parcAlbertEtMarieJose">
					<li>Parcs des Muses</li>
				</span>
				<span class="clickable" id="parcDesMuses">
					<li>Parcs Albert & Marie-José</li>
				</span>
				<span class="clickable" id="stadeDeMolenbeek">
					<li>Parc du Scheutbos</li>
				</span>
			</ol>
		</div>
		<!-- <div class="btn-wrapper-1"><button class="btn btn-dark"></button></div> -->
	</div>


	<div class="popup-container">

	</div>

	<!-- popupCard.innerHTML = `
    <div class="popup-container">
    <div class="popup-container__thumb">
    <i class="popup-container__x fa-solid fa-xmark"></i>
    <img class="popup-container__img" src="${DATA_ITIN2.items[i].image}" alt="${DATA_ITIN2.items[i].alt}">
    </div>
    <div class="popup-container__info">
        <h3 class="popup-container__title">${DATA_ITIN2.items[i].lieu}</h3>
        <div class="popup-container__description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    
            <p>Distance : <span>${DATA_ITIN2.items[i].distance}km</span></p>
            </div>
        <div class="popup-container__website">
            <i class="popup-container__globe fa-solid fa-globe"></i><a href="${DATA_ITIN2.items[i].distance}" target="_blank">Parc du Karreveld</a>
        </div>
    </div>
    </div>`; -->

</section>

<script src="./assets/script/json1.js" defer></script>
<script src="./assets/script/itin1.js" defer></script>