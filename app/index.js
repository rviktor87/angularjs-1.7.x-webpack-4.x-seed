import angular from 'angular';

// let app = angular.module('App',['ngRoute']);
let app = angular.module('App',[]);

app.controller('AppController', function() {
    this.message = 'Hello AngularJS 1.7.x!';
});