class PlaceFinder {   // main class
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    addressForm.addEventListener('click', findAddressHandler);
    locateUserBtn.addEventListener('click', locateUserHandler);
  }

  findAddressHandler() {};

  locateUserHandler() {};
}