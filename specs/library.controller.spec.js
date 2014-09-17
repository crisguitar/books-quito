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

	afterEach(function(){
		$scope.allBooks = [];
		$scope.newBook = {};
	});

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
		addNewBook('Example book', 'Example description', 'Example user');
		expect($scope.newBook.name).toBeUndefined();
		expect($scope.newBook.description).toBeUndefined();
		expect($scope.newBook.user).toBeUndefined();
	});

	it("should change user when borrowing book", function() {
		addNewBook('Example book', 'Example description', 'Example user');
		$scope.borrowBook('Example book', 'Cris');
		expect($scope.allBooks[0].user).toBe('Cris');
	});

	it("should only change the user of the book that is being borrowed", function() {
		addNewBook('Example book 1', 'Example description 1', '');
		addNewBook('Example book 2', 'Example description 2', 'Example user');
		$scope.borrowBook('Example book 2', 'Cris');
		expect($scope.allBooks[0].user).toBe('');
		expect($scope.allBooks[1].user).toBe('Cris');
	});

	function addNewBook (bookName, bookDescription, user) {
		$scope.newBook.name = bookName;
		$scope.newBook.description = bookDescription;
		$scope.newBook.user = user;
		$scope.addNewBook();
	};
});