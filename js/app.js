
var app = angular.module("app", ["ngRoute", 'ngResource']);
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
        })
        .when("/about", {
            templateUrl: "./templates/about.html"
        }).when("/terms", {
            templateUrl: "./templates/terms.html"
        }).when("/risks", {
            templateUrl: "./templates/risks.html"
        }).when("/privacy", {
            templateUrl: "./templates/privacy.html"
        }).when("/refund", {
            templateUrl: "./templates/refund_policy.html"
        });
});

