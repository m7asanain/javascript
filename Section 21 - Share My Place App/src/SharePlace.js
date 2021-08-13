import { Modle } from './UI/Model';

class PlaceFinder {   // main class
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    addressForm.addEventListener('click', this.findAddressHandler);
    locateUserBtn.addEventListener('click', this.locateUserHandler);
  }

  findAddressHandler() {
    
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Your browser does\'nt support getting location - please try newer browser or enter your address manully!');
      return;
    }
    const modal = new Modle('loading-modal-content', 'Loding location - pleace be pation!');
    modal.show();
    navigator.geolocation.getCurrentPosition(
      seccessResult => {
        modal.hide();
        const coordinates = {
          lat: seccessResult.coords.latitude,
          lng: seccessResult.coords.longitude,
        }
        console.log(coordinates);
      }, error => {
        modal.hide();
        alert('We are not able to get your location - enter your address manully!');
      }
    );
  }
}

const placeFinder = new PlaceFinder();