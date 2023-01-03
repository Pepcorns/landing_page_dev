var app = angular.module("app", ["ngRoute", "ngResource"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./templates/home.html",
    })
    .when("/knowledgebase/investors", {
      templateUrl: "./templates/knowledge_base_inv.html",
      controller: "knowledgeController",
    })
    .when("/knowledgebase/company", {
      templateUrl: "./templates/knowledge_base_cmp.html",
      controller: "knowledgeController",
    })
    .when("/knowledgebase/sheeo", {
      templateUrl: "./templates/sheeo.html",
      controller: "knowledgeController",
    })
    .when("/knowledgebase/faq", {
      templateUrl: "./templates/faq.html",
      controller: "knowledgeController",
    })
    .when("/about", {
      templateUrl: "./templates/about.html",
    })
    .when("/terms", {
      templateUrl: "./templates/terms.html",
    })
    .when("/risks", {
      templateUrl: "./templates/risks.html",
    })
    .when("/privacy", {
      templateUrl: "./templates/privacy.html",
    })
    .when("/refund", {
      templateUrl: "./templates/refund_policy.html",
    })
    .when("/contact", {
      templateUrl: "./templates/contact.html",
    })
    .when("/flashcards", {
      templateUrl: "./templates/flashcards.html",
      controller: "flashController",
    });
});

app.controller("indexController", [
  "$scope",
  "$rootScope",
  "$timeout",
  indexController,
]);

function indexController($scope, $rootScope, $timeoout) {
  var self = $scope;

  self.init = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        $("#return-to-top").fadeIn(200);
      } else {
        $("#return-to-top").fadeOut(200);
      }
    });

    if (
      sessionStorage.getItem("menu_id") &&
      sessionStorage.getItem("menu_id")
    ) {
      return;
    } else {
      sessionStorage.setItem("menu_id", 1);
      sessionStorage.setItem("menu_id1", 11);
    }
  };

  self.how = function () {
    $rootScope.$emit("CallParent", 2);
  };
  self.inst = function () {
    $rootScope.$emit("CallParent", 3);
  };

  self.howc = function () {
    $rootScope.$emit("CallParent", 13);
  };

  self.scrollTop = function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  };

  self.init();
}
