"use strict";
describe("Controller: Books", function() {
	beforeEach(module('library'));

	var $scope;

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		$controller('books', {
			$scope: $scope
		});
	}));

	it("should have a title", function() {
		expect($scope.title).toBe('Book App');
	});

	it("should have an array of books", function() {
		expect($scope.allBooks).toBeDefined();
	});

	it("should have a new book property", function() {
		expect($scope.newBook).toBeDefined();
	});

	it("should add a new book to the array", function() {
		var bookName = 'Harry Potter';
		var bookDescription = 'The boy who lived';
		var user = 'Cris'
		addNewBook(bookName, bookDescription, user);
		var allBooks = $scope.allBooks;
		var lastIndex = allBooks.length - 1;
		expect(allBooks[lastIndex].name).toBe(bookName);
		expect(allBooks[lastIndex].description).toBe(bookDescription);
		expect(allBooks[lastIndex].user).toBe(user);
	});

	it("should clear data after adding new book", function() {
		addNewBook('Example', 'Example description', 'Example user');
		expect($scope.newBook.name).toBeUndefined();
		expect($scope.newBook.description).toBeUndefined();
		expect($scope.newBook.user).toBeUndefined();
	});

	function addNewBook (bookName, bookDescription, user) {
		$scope.newBook.name = bookName;
		$scope.newBook.description = bookDescription;
		$scope.newBook.user = user;
		$scope.addNewBook();
	};
});