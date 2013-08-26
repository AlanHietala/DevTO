var ListCtrl = function ($scope) {

    // 1. add attendeeList model to the scope
    //    array should contain models in the format:
    //    {name: 'foo', present: false}
    $scope.attendeeList = [
        {name: 'Alan Hietala', present: false},
        {name: 'Mary Smith', present: false}
    ];

    // 2. add addPerson function to the scope that will push
    //    a new person object onto the attendeeList array
    //    get the name value from the $scope.newPerson variable
    //    as declared in the HTML Template ng-model directive
    $scope.addPerson = function () {
        if ($scope.newPerson !== '') {
            $scope.attendeeList.push({name: $scope.newPerson, present: false});
            $scope.newPerson = '';
        }
    }

}