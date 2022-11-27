app.controller("homeController", ["$scope", function ($scope) {
    var self = $scope;

    self.setPageNum = function (page) {
        if (self.pagenum !== page) {
            self.pagenum = page;
        }
    };

    self.isSetPageNum = function (page) {
        if (self.pagenum == page) {
            return true;
        } else {
            return false;
        }
    };

}])