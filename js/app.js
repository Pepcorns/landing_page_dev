var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./templates/home.html"
        })
        .when("/knowledgebase/investors", {
            templateUrl: "./templates/knowledge_base_inv.html",
            controller: "knowledgeController"
        })
        .when("/knowledgebase/company", {
            templateUrl: "./templates/knowledge_base_cmp.html",
            controller: "knowledgeController"
        })
        .when("/knowledgebase/faq", {
            templateUrl: "./templates/faq.html",
            controller: "knowledgeController"
        });
});
