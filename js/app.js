var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./templates/home.html"
        })
        .when("/knowledgebase/investors", {
            templateUrl: "./templates/knowledge_base.html",
            controller: "knowledgeController"
        })
        .when("/knowledgebase/company", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        });
});
