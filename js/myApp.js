var rootGalery = document.getElementById('root-galery-id');
const serverURL = 'https://fedorvlad.github.io/FWD_09_K2/';
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
    '<div class="col-12 col-sm-4 col-lg-2">' +
    '<div class="card animated fadeIn m-3">' +
    '<img class="card-img-top" src="' + item['img'] + '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h3 class="card-title text-capitalize text-center"><a>' + item['title'] + '</a></h3>' +
    '<p class="card-text">' + item['text'] + '</p>' +
    '</div>' +
  '</div>' +
  '</div>';
});

rootGalery.innerHTML = galeryHtml;

// Start using JQuery
$(document).ready(function(){

    $.get(serverURL + 'data/galery.json',
     function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        if ( ! $.isEmptyObject(data) && Array.isArray(data) ) {
            console.log('array full');
        }
    });

    const cards = $('#root-galery-id .card');

    var maxHeight = 0;
    cards.each(function(){
        if ( maxHeight < $(this).height() ) {
            maxHeight = $(this).height();
        }
    });
    cards.height(maxHeight);
});