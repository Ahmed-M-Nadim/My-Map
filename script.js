'use strict';
const style =
  'padding: 20px; color: white; background: linear-gradient(#007acc, #0952bf, #03a1d8, #0916bf);font-family: sans-serif; border-radius:10px; text-shadow: 0.6px 0.6px black;border:1px solid white';

console.log(
  '%c                                             ▪◽⚜🤍💙Ahmed Mahmoud Nadim💙🤍⚜◽▪                                                       ',
  style
);

let myNewDay = Date();

console.log(myNewDay);
////////////////////////////////////////

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

////////////////////////////////////////////////////////////////////////////////

//========= Use Geolocation =========//
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // console.log(map);

      map.on('click', function (mapEvent) {
        form.classList.remove('hidden');
      });
    },
    function () {
      alert(
        `My Name is Your-Assistance, but 🙄 I can't get your Location right now`
      );
    }
  );
}

form.addEventListener('submit', function () {
  // console.log(map);
  // console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  console.log(lat, lng);
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 300,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent(`Ahmed Mahmoud <br> Workout`)
    .openPopup();
});
