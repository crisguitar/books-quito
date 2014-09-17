"use strict";
angular.module('books_controller', [])
	.controller('books', function($scope, booksFactory){
		$scope.title = "Book App";
		$scope.allBooks = booksFactory.allBooks;
		$scope.newBook = {};
		$scope.addNewBook = function(){
			$scope.allBooks.push($scope.newBook);
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
