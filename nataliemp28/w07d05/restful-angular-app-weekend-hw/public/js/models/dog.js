angular.module('dogApp')
    .factory('Dog', Dog);

function Dog($resource) {
  return new $resource('/dogs/:id', { id: '@_id' }, {
      update: { method: 'PUT' }
  });

}
