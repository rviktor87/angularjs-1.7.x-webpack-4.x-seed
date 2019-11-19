import angular from 'angular';

// let app = angular.module('App',['ngRoute']);
let app = angular.module('App',[]);

app.controller('AppController', function() {
    this.message = 'Hello. My First AngularJS App';
});