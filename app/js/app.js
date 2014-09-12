(function () {
  'use strict';

  var chatListApp = angular.module('chatList', [
    'ngRoute',
    'chatServices'
    ]);

  chatListApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: 'main.html',
        controller: 'ChatItemsController'
      }).
      when('/:chatID', {
        templateUrl: 'partials/chat-detail.html',
        controller: 'ChatDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
    }]);
  
  chatListApp.controller('ChatItemsController', ['$scope', 'Chat', "$location",
    function ($scope, Chat, $location) {
      $scope.chatitems = Chat.query();
      $scope.detailPage = function (hash) { 
        $location.path(hash);
      }
    }]);

  chatListApp.controller('ChatDetailController', ['$scope', "$routeParams", "Chat",
    function ($scope, $routeParams, Chat) {
      $scope.chatID = $routeParams.chatID; 
      $scope.chatitems = Chat.query(function() { 
        for (var i = 0; i < $scope.chatitems.length; i++) { 
          if ($scope.chatitems[i].id === $scope.chatID) { 
            $scope.chat = $scope.chatitems[i]; 
            break; 
          } 
        };
      });
    }]);

})();
