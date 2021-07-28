const mymap = L.map('issMap')//.setView([0, 0], 6);
var issIcon = L.icon({
    iconUrl: 'issIcon.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
   
});
const marker = L.marker([0, 0], {icon : issIcon }).addTo(mymap);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles =  L.tileLayer(tileUrl, { attribution }); 
tiles.addTo(mymap)


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
        async function getISS (){
            const response = await fetch(api_url);
            const data = await response.json();
            console.log(data);
            const {longitude, latitude} = data;
            mymap.setView([latitude, longitude], 4)
            marker.setLatLng([latitude, longitude]);
            console.log(longitude);
            console.log(latitude);

            document.getElementById("lat").textContent = latitude;
            document.getElementById("long").textContent = longitude;
            
        }

        getISS();

        setInterval(getISS, 3000);
