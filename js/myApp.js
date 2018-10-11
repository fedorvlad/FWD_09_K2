var rootGalery = document.getElementById('root-galery-id');
var galeryData = [
    {
        img: 'img/galery/tovar/1.png',
        title: 'взуття',
        text: 'Несортоване взуття',
        link: 'shoes.html'
    },

    {
        img: 'img/galery/tovar/2.png',
        title: 'сумки',
        text: 'Несортоване взуття',
        link: 'shoes.html'
    },

    {
        img: 'img/galery/tovar/3.png',
        title: 'дитяче взуття',
        text: 'Сортоване взуття',
        link: 'shoes.html'
    },

    {
        img: 'img/galery/tovar/4.png',
        title: 'жіноче взуття',
        text: 'Сортоване взуття',
        link: 'shoes.html'
    },

    {
        img: 'img/galery/tovar/5.png',
        title: 'одяг',
        text: 'Чоловічий одяг',
        link: 'shoes.html'
    },

    {
        img: 'img/galery/tovar/6.png',
        title: 'одяг',
        text: 'Дитячий одяг',
        link: 'shoes.html'
    }
];

var galeryHtml = '';

galeryData.forEach(function(item) {
    galeryHtml = galeryHtml + 
    '<div class="col-12 col-md-4">' +
    '<div class="card animated fadeIn m-3">' +
    '<img class="card-img-top" src="' + item['img'] + '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h4 class="card-title text-capitalize"><a>' + item['title'] + '</a></h4>' +
    '<p class="card-text">' + item['text'] + '</p>' +
      '<a href="#" class="btn btn-primary">Button</a>' +
    '</div>' +
  '</div>' +
  '</div>';
});

rootGalery.innerHTML = galeryHtml;