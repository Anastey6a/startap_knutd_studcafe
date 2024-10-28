const menu = [
    { id: 1, title: "Хот дог", category: "основне", price: "50 грн", description: "Цей свіжий хрумкий хліб з опченою сосискою  та хрустким салатом. ",img: "./images/cafe (4).jpg" },
    { id: 2, title: "Тост", category: "закуски", price: "25 грн", description: "Підсмажений хліб, натертий часником і покритий нарізаними помідорами, свіжим базиліком салатом та моцарелою.",img: "./images/tost.jpg" },
    { id: 3, title: "Салат Цезар", category: "салат", price: "55 грн", description: "Хрумкий салат з грінками, курячим філе та томатами чері ",img: "https://i.pinimg.com/736x/5e/9f/2f/5e9f2f591854a18b0168936760b3f0d3.jpg" },
    { id: 4, title: "Плов", category: "основне", price: "45 грн", description: "Рис з тушкованим м'ясом та овочима" , img: "https://static-cdn5-2.vigbo.tech/u3575/26940/blog/5361050/4723775/61238414/1000-gophotoweb-a7bb0412ef72cf34df3b16c512c3d9db.jpg"},
    { id: 5, title: "Шоколадний рулет", category: "десерт", price: "25 грн", description: "Теплий шоколадний рулет з рідкою шоколадною серцевиною." , img: "./images/cafe (5).jpg"},
    { id: 6, title: "Вафельний торт", category: "десерт", price: "20 грн", description: "Торт зі згущеним молоком та вафельними хрусткими коржами.", img: "./images/stud (6).jpg"},
    { id: 7, title: "Бургер Супер Чіз", category: "основна страва", price: "55 грн", description: "Соковита яловича котлета, подвійний шар розплавленого сиру чеддер, карамелізована цибуля, мариновані огірки та соус у пухкій булочці бріош.","img": "./images/stud (2).jpg" },
    { id: 8, title: "Пиріжечки", category: "основне", price: "15 грн", description: "Традиційні пиріжки з ніжною начинкою з картоплі та смаженої цибулі", img: "./images/stud (4).jpg" },
    { id: 9, title: "Торт Спартак", category: "десерт", price: "50 грн", description: "Торт з трьома видами коржів. Хрусткий та вміру солодкий", img: "./images/cafe (3).jpg" },
    { id: 10, title: "Мохіто", category: "напої", price: "45 грн", description: "Освіжаючий напій.", img: "./images/stud (8).jpg" },
   
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    
    function renderMenuItem(item) {
      return `<div class="menu-item col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>
    `;
  }

  
  function filterMenu(category) {
      const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
      const menuContainer = document.getElementById('menu-items');
      menuContainer.innerHTML = filteredMenu.map(renderMenuItem).join('');
  }


  filterMenu('all');

  const filterButtons = document.querySelectorAll('.nav-link');
  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-filter');
          filterMenu(category);
      });
  });


  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const filteredMenu = menu.filter(item => item.title.toLowerCase().includes(searchTerm));
      filterMenu('all'); // Reset to display all items
      const menuContainer = document.getElementById('menu-items');
      menuContainer.innerHTML = filteredMenu.map(renderMenuItem).join('');
  });
});
  
  
  
  