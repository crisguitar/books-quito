"use strict";
angular.module('library')
.controller('books', function($scope, booksFactory){
	$scope.allBooks = booksFactory.allBooks();
	$scope.newBook = {};

	$scope.addNewBook = function(){
		$scope.newBook.user = 'ThoughtWorks';
		booksFactory.addBook($scope.newBook);
		$scope.newBook = {};
	};

	$scope.borrowBook = function(bookName, user){
		$scope.allBooks.forEach(function(element){
			if (element.name === bookName) {
				element.user = user;
				return;
			};
		});
	};

});
