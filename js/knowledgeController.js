app.controller("knowledgeController", ["$scope", "$rootScope", "$timeout", function ($scope, $rootScope, $timeout) {
    var self = $scope;
    var root = $rootScope;


    self.selectedMenu = 1 //instrument
    self.selectedNav = sessionStorage.getItem("menu_id") //submenu
    self.selectedNav1 = sessionStorage.getItem("menu_id1") //submenu
    self.selectedNavTab = 1

    root.$on("CallParent", function (e, v) {
        self.setSubMenuIndex(v)
        self.setSubMenuIndex1(v)
    })

    self.init = function () {
        sessionStorage.setItem("menu_id", 1)
        sessionStorage.setItem("menu_id1", 11)
    }

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

    //pehla--------------------------
    self.isSetSubMenuIndex = function (index) {
        if (self.subMenuIndex == index) {
            return true;
        } else {
            return false;
        }
    }

    self.subMenuIndex = sessionStorage.getItem("menu_id");
    self.setSubMenuIndex = function (index) {
        self.selectedNav = index
        if (self.subMenuIndex != index) {
            self.subMenuIndex = index;
        }
        sessionStorage.setItem("menu_id", index);

    }

    //dusra----------------------------
    self.isSetSubMenuIndex1 = function (index) {
        if (self.subMenuIndex1 == index) {
            return true;
        } else {
            return false;
        }
    }

    self.subMenuIndex1 = sessionStorage.getItem("menu_id1");
    self.setSubMenuIndex1 = function (index) {
        self.selectedNav1 = index
        if (self.subMenuIndex1 != index) {
            self.subMenuIndex1 = index;
        }
        sessionStorage.setItem("menu_id1", index);

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

    self.how = function () {
        alert('worki')
        self.setSubMenuIndex(2)
    }

    self.init();
}])