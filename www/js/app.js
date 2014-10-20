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
    jeanmujerimage: 'img/mujer/jeans/adele.jpg',
    titulojmujer: 'Adele',
    tab: 'jeanbig'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/ambar.jpg',
    titulojmujer: 'Ambar',
    tab: 'jeanbig'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/anabelle.jpg',
    titulojmujer: 'Anabelle',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/azaneth.jpg',
    titulojmujer: 'Azaneth',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/belinda.jpg',
    titulojmujer: 'Belinda',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/celeste.jpg',
    titulojmujer: 'Celeste',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/coral.jpg',
    titulojmujer: 'Coral',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/denise.jpg',
    titulojmujer: 'Denise',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/dona.jpg',
    titulojmujer: 'Dona',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/dulce.jpg',
    titulojmujer: 'Dulce',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/fanny.jpg',
    titulojmujer: 'Fanny',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/gema.jpg',
    titulojmujer: 'Gema',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/ginebra.jpg',
    titulojmujer: 'Ginebra',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/konny.jpg',
    titulojmujer: 'Konny',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/liz.jpg',
    titulojmujer: 'Liz',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/lupita.jpg',
    titulojmujer: 'Lupita',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/maggi.jpg',
    titulojmujer: 'Maggi',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/mahia.jpg',
    titulojmujer: 'Mahia',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/nayarit.jpg',
    titulojmujer: 'Nayarit',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/ninfa.jpg',
    titulojmujer: 'Ninfa',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/sandy.jpg',
    titulojmujer: 'Sandy',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/teresina.jpg',
    titulojmujer: 'Teresina',
    tab: 'jeansmujer'
  },
  {
    id: '001',
    jeanmujerimage: 'img/mujer/jeans/zaida.jpg',
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


