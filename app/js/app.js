"use strict";
angular.module('library', ['books_controller'])
	.factory('booksFactory', function(){
		return {
			allBooks: [{
				name:'Of love and Shadows',
				description: 'Something weird',
				user: ''
			}]
		}
	});