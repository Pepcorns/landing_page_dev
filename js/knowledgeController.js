app.controller("knowledgeController", ["$scope", function ($scope) {
    var self = $scope;
    self.selectedMenu = 1

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

    self.isSetTabIndex = function (index) {
        if (self.tabIndex == index) {
            return true;
        } else {
            return false;
        }
    }

    self.tabIndex = 1;
    self.setTabIndex = function (index) {
        self.selectedMenu = index
        if (self.tabIndex != index) {
            self.tabIndex = index;
        }
    }

}])