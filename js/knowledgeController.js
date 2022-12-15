app.controller("knowledgeController", ["$scope", function ($scope) {
    var self = $scope;
    self.selectedMenu = 1
    self.selectedNav = 1
    self.selectedNavTab = 1

    self.isSetSubMenuIndex = function (index) {
        if (self.subMenuIndex == index) {
            return true;
        } else {
            return false;
        }
    }

    self.subMenuIndex = 1;
    self.setSubMenuIndex = function (index) {
        self.selectedNav = index
        if (self.subMenuIndex != index) {
            self.subMenuIndex = index;
        }
    }

    // Instruments Tabs
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

    //Nav Tabs
    self.isNavTabIndex = function (index) {
        if (self.navTabIndex == index) {
            return true;
        } else {
            return false;
        }
    }

    self.navTabIndex = 1;
    self.setNavTabIndex = function (index) {
        self.selectedNavTab = index
        if (self.navTabIndex != index) {
            self.navTabIndex = index;
        }
    }

}])