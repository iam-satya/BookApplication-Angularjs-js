var app = angular.module('bookApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'home.html',
    controller  : 'HomeController'
  })

  .when('/books', {
    templateUrl : 'books.html',
    controller  : 'BooksController'
  })

  .when('/authors', {
    templateUrl : 'authors.html',
    controller  : 'AuthorsController'
  })

  .when('/popularBooks', {
    templateUrl : 'popularBooks.html',
    controller  : 'PopularBooksController'
  })

  .when('/contact', {
    templateUrl : 'contact.html',
    controller  : 'ContactController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Welcome to Books Application';
});

app.controller('BooksController', function($scope) {
 
  $scope.book1="1.C# Programming Yellow Book";
  $scope.book2="2.Dissecting a C# Application:";
  $scope.book3="3.Fundamentals of Computer Programming with C#";
  $scope.book4="4..NET Book Zero";
  $scope.book5="5.C# Programming";
  $scope.book6="6.C# 7.0 in a Nutshell";
  
  $scope.book7="7.C# in Depth";



});

app.controller('AuthorsController', function($scope) {
  $scope.message = 'Authors Information';
  $scope.book1="1.C# Programming Yellow Book";
  $scope.book2="2.Dissecting a C# Application:";
  $scope.book3="3.Fundamentals of Computer Programming with C#";
  $scope.book4="4..NET Book Zero";
  $scope.book5="5.C# Programming";
  $scope.book6="6.C# 7.0 in a Nutshell";
 
  $scope.book7="7.C# in Depth";

  $scope.Author1="Rob Miles";
  $scope.Author2="Christian Holm";
  $scope.Author3="Svetlin Nakov";
  $scope.Author4="Charles Petzold";
  $scope.Author5="Wikibooks.org";
  $scope.Author6="Ben Albahari";
  $scope.Author7="Manning";

});
app.controller('PopularBooksController', function($scope) {
 
    $scope.book1="1.C# in Depth";
    $scope.book2="2.C# 7.0 in a Nutshell";
    $scope.book3="3.Entity Framework Core in Action";


  });
  
  app.controller('ContactController', function($scope) {
    $scope.ContactDetails = "Contact Details"
    $scope.Name = "Siva Prasad";
    $scope.Email = "satyassp10@gmail.com";

  });
  

