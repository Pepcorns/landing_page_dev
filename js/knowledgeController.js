app.controller("knowledgeController", ["$scope", function ($scope) {
    var self = $scope;

    self.isSetSubMenuIndex = function (index) {
        if (self.subMenuIndex == index) {
            return true;
        } else {
            return false;
        }
    }

    self.subMenuIndex = 1;
    self.setSubMenuIndex = function (index) {
        if (self.subMenuIndex != index) {
            self.subMenuIndex = index;
        }
    }

}])