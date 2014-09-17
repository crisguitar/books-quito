"use strict";
angular.module('library', ['books_controller'])
	.factory('booksFactory', function(){
		return {
			allBooks: []
		}
	});