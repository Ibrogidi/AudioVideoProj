



window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader')
)

// create special cars

const CreateCars = (() => {
  const cars = [];
  // car class
  class Car {
    constructor(make, img, special, model, price, type, trans, fuel) {
      this.make = make;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.fuel = fuel;
    }
  }
  // create a function to make cars
  function makeCar(make, img = 'img/car-default.jpeg', special = true, model = 'new model', price = 10000, type = 'sedan', trans = 'automatic', fuel = '50') {
    const car = new Car(make, img, special, model, price, type, trans, fuel);
    cars.push(car);
  }
  // call a function
  function produceCars() {

    makeCar('chevy');
    makeCar('mercedes', 'img/car-german-1.jpeg', true)
    makeCar('bmw', 'img/car-german-2.jpeg', false)
    makeCar('bmw', 'img/car-german-3.jpeg', true, 'some model')
    makeCar('bmw', 'img/car-german-4.jpeg', undefined, 'other model')
    makeCar('bmw', 'img/car-german-5.jpeg', false)
    makeCar('chevy', 'img/car-american-1.jpeg', false)
    makeCar('chevy', 'img/car-american-2.jpeg', false)
    makeCar('chevy', 'img/car-american-3.jpeg', false)
    makeCar('chevy', 'img/car-american-4.jpeg', false)
    makeCar('chevy', 'img/car-american-5.jpeg', false)
  }
  produceCars();
  // cars
  console.log(cars);

  // special cars
  const specialCars = cars.filter(car => car.special === true);
  console.log(specialCars);



  return {
    cars,
    specialCars
  }
})();

// display featured cars
const displayFeaturedCars = ((CreateCars) => {
  // info
  const info = document.querySelector('.featured-info');

  const specialCars = CreateCars.specialCars;

  // document loaded event
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';
    // create data
    let data = ''
    specialCars.forEach(item => {
      data += `<!-- single item -->
          <div class="featured-item my-3 d-flex  p-2 text-capitalize align-items-baseline flex-wrap">
            <span data-img ='${item.img}' class="featured-icon mr-3">
              <i class="fas fa-car"></i>
            </span>
            <h5 class="font-weight-bold mx-1">${item.make}</h5>
            <h5 class="mx-1">${item.model}</h5>
          </div>
          <!-- end of single item -->`
    })
    info.innerHTML = data;

  })
  // change img
  info.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('featured-icon')) {
      const img = event.target.parentElement.dataset.img;
      console.log(img);

      document.querySelector('.featured-photo').src = img;

    }
  })
  // display all cars


})(CreateCars);

