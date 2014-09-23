"use strict";
angular.module('library_factory', ['firebase'])
.factory('booksFactory', ['$firebase', function($firebase){

	var firebaseBooks = new Firebase("https://books-quito.firebaseio.com");
	var allBooks = $firebase(firebaseBooks);

	return {
		allBooks: function(){
			return allBooks.$asArray();
		},
		addBook: function(newBook){
			allBooks.$push(newBook);
		}
	}
}]);