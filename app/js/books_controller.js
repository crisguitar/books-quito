"use strict";
angular.module('books_controller', [])
	.controller('books', function($scope, booksFactory){
		$scope.title = "Book App";
		$scope.allBooks = booksFactory.allBooks;
		$scope.newBook = {};
		$scope.addNewBook = function(){
			console.log($scope.allBooks);
			$scope.allBooks.push($scope.newBook);
			$scope.newBook = {};
		}
	});
