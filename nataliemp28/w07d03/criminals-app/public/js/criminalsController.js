angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {

  const criminals = this;

  criminals.all = [];
  criminals.addCriminal = addCriminal;
  criminals.deleteCriminal = deleteCriminal;
  criminals.newCriminal = {};

function addCriminal() {
  $http.post('/criminals', criminals.newCriminal)
  .then((res) => {
    criminals.all.push(res.data);
    criminals.newCriminal = {};

    criminals.form.$setPristine();
    criminals.form.$setUntouched();

    console.log(criminals);
  })
  .catch(() => {
    console.log("something went horribly wrong!!");
  });
}
function getCriminals() {
  $http.get('/criminals')
  .then((res) => {
    criminals.all = res.data;
  });
}

function deleteCriminal(id) {
  $http.delete(`/criminals/${id}`)
    .then(() => {
      //this checks that the president has been deleted.
      criminals.all = criminals.all.filter((crim) => {
        return crim._id !== id;
      });
    });

  function editCriminal(id) {
    $http.put(`/criminals/${id}`)
      .then(() => {

      })
  }
}
  getCriminals();
}
