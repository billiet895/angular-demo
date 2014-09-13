var chatServices = angular.module('chatServices', ['ngResource']);

chatServices.factory('Chat',['$resource',
  function($resource){
    return $resource('sample-chat-data.json', {}, {
      query: {method:'GET', params:{}, isArray:true, cache: true}
    });
  }
]);