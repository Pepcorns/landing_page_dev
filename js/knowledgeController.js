app.controller("knowledgeController", ["$scope", function ($scope) {
    var self = $scope;
    self.selectedMenu = 1
    self.selectedNav = 1
    self.selectedNavTab = 1


    self.arrlist = [{
        "id": 1,
        "name": "For Investors"
    }, {
        "id": 2,
        "name": "How it works?"
    }, {
        "id": 3,
        "name": "Instruments"
    }, {
        "id": 4,
        "name": "Earning a return"
    }, {
        "id": 5,
        "name": "Pepcorns Fee"
    }, {
        "id": 6,
        "name": "Risks"
    }];

    self.arrlist2 = [{
        "id": 1,
        "name": "For Companies"
    }, {
        "id": 2,
        "name": "Why Pepcorns?"
    }, {
        "id": 3,
        "name": "How it works?"
    }, {
        "id": 4,
        "name": "Who can fundraise?"
    }, {
        "id": 5,
        "name": "How do we charge?"
    }, {
        "id": 6,
        "name": "Campaign"
    }]

    self.getdetails = function () {
        if (self.userselected.id == "1")
            self.setSubMenuIndex(1)
        else if (self.userselected.id == "2") {
            self.setSubMenuIndex(2);
        } else if (self.userselected.id == "3") {
            self.setSubMenuIndex(3);
        } else if (self.userselected.id == "4") {
            self.setSubMenuIndex(4);
        } else if (self.userselected.id == "5") {
            self.setSubMenuIndex(5);
        } else {
            self.setSubMenuIndex(6);
        }

    }

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