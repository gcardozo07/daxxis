angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.catalogo', {
      url: "/catalogo",
      views: {
        'home-tab': {
          templateUrl: "templates/catalogo.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.catalogotab', {
      url: "/catalogotab",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/catalogotab.html"
        }
      }
    })
    .state('tabs.mujer', {
      url: "/mujer",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mujer.html"
        }
      }
    })
    .state('tabs.jeansmujer', {
      url: "/jeansmujer",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/jeansmujer.html"
        }
      }
    })
    .state('tabs.jeanbig', {
      url: "/jeanbig",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/jeanbig.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})

.controller('catalogoController', function(){
  this.genero = [
  {
    id: '001',
    imagen: 'img/mujer.jpg',
    titulo: 'Mujer',
    clase:  'mujer',
    tab:    'mujer'
  },
  {
    id: '002',
    imagen: 'img/hombre.jpg',
    titulo: 'Hombre',
    clase:  'hombre',
    tab:    'hombre'
  },
  {
    id: '003',
    imagen: 'img/bolsos.jpg',
    titulo: 'Bolsos',
    clase: 'bolsos',
    tab:    'bolsos'
  }
  ];
})


.controller('mujerlineacontroller',function(){
  this.lineamujer = [

  {
    id: '001',
    imagenlineamujer: 'img/mujer/jeans/jeans.jpg',
    titulolinea: 'Jeans',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    imagenlineamujer: 'img/mujer/blusas/blusas.jpg',
    titulolinea: 'Blusas',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    imagenlineamujer: 'img/mujer/busos/busos.jpg',
    titulolinea: 'Busos',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    imagenlineamujer: 'img/mujer/pantalones/pantalones.jpg',
    titulolinea: 'Pantalones',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    imagenlineamujer: 'img/mujer/chaquetas/chaquetas.jpg',
    titulolinea: 'Chaquetas',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    imagenlineamujer: 'img/mujer/deportivos/deportivos.jpg',
    titulolinea: 'Deportivos',
    tab: 'jeansmujer'
  }
  ];
})


.controller('jeansmujercontroller',function(){
    this.jmujer = [
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/adele.jpg',
    titulojmujer: 'Adele',
    tab: 'jeanbig'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/ambar.jpg',
    titulojmujer: 'Ambar',
    tab: 'jeanbig'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/anabelle.jpg',
    titulojmujer: 'Anabelle',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/azaneth.jpg',
    titulojmujer: 'Azaneth',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/belinda.jpg',
    titulojmujer: 'Belinda',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/celeste.jpg',
    titulojmujer: 'Celeste',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/coral.jpg',
    titulojmujer: 'Coral',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/denise.jpg',
    titulojmujer: 'Denise',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/donna.jpg',
    titulojmujer: 'Donna',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/dulce.jpg',
    titulojmujer: 'Dulce',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/fanny.jpg',
    titulojmujer: 'Fanny',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/gema.jpg',
    titulojmujer: 'Gema',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/ginebra.jpg',
    titulojmujer: 'Ginebra',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/konny.jpg',
    titulojmujer: 'Konny',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/liz.jpg',
    titulojmujer: 'Liz',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/lupita.jpg',
    titulojmujer: 'Lupita',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/maggi.jpg',
    titulojmujer: 'Maggi',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/mahia.jpg',
    titulojmujer: 'Mahia',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/nayarit.jpg',
    titulojmujer: 'Nayarit',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/ninfa.jpg',
    titulojmujer: 'Ninfa',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/sandy.jpg',
    titulojmujer: 'Sandy',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/teresina.jpg',
    titulojmujer: 'Teresina',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/thumb/zaida.jpg',
    titulojmujer: 'Zaida',
    tab: 'jeansmujer'
  }
  ];
})

.controller('bigController',function(){
    this.big = 
  {
    id: '001',
    imagebig: 'img/mujer/jeans/adele.jpg',
    estilo: 'Trabajo Bajo - Bota Tubo',
    talla: '6-8-10-12-14',
    material: 'Indigo Algodon Elastomero'
  }
  
});


