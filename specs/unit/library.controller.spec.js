"use strict";
describe("Controller: Books", function() {
	beforeEach(module('library'));

	var $scope;
	var _booksFactory = {
			books: [],
    		addBook: function(newBook) {
    			this.books.push(newBook);
    		},
    		allBooks: function() {
    			return this.books;
    		}
    	};

	beforeEach(inject(function($rootScope, $controller, booksFactory) {
		$scope = $rootScope.$new();
		$controller('books', {
			$scope: $scope,
			booksFactory: _booksFactory
		});
	}));

	afterEach(function(){
		_booksFactory.books = [];
	})

	it("should have an array of books", function() {
		expect($scope.allBooks).toBeDefined();
	});

	it("should have a new book property", function() {
		expect($scope.newBook).toBeDefined();
	});

	it("should call addBook function from factory when adding a new book", function() {
		spyOn(_booksFactory, 'addBook');
		$scope.addNewBook();
		expect(_booksFactory.addBook).toHaveBeenCalled();
	});

	it("should add a new book to the array", function() {
		var bookName = 'Harry Potter';
		var bookDescription = 'The boy who lived';
		addNewBook(bookName, bookDescription);
		var allBooks = $scope.allBooks;
		expect(allBooks[0].name).toBe(bookName);
		expect(allBooks[0].description).toBe(bookDescription);
	});

	it("should add ThoughtWorks user by default", function() {
		$scope.addNewBook();
		var allBooks = $scope.allBooks;
		expect(allBooks[0].user).toBe('ThoughtWorks');
	});

	it("should clear data after adding new book", function() {
		addNewBook('Example book', 'Example description', 'Example user');
		expect($scope.newBook.name).toBeUndefined();
		expect($scope.newBook.description).toBeUndefined();
		expect($scope.newBook.user).toBeUndefined();
	});

	it("should change user when borrowing book", function() {
		addNewBook('Example book', 'Example description');
		$scope.borrowBook('Example book', 'Cris');
		var allBooks = $scope.allBooks;
		expect($scope.allBooks[0].user).toBe('Cris');
	});

	it("should only change the user of the book that is being borrowed", function() {
		addNewBook('Example book 1', 'Example description 1');
		addNewBook('Example book 2', 'Example description 2');
		$scope.borrowBook('Example book 2', 'Cris');
		expect($scope.allBooks[0].user).toBe('ThoughtWorks');
		expect($scope.allBooks[1].user).toBe('Cris');
	});

	function addNewBook(bookName, bookDescription) {
		$scope.newBook.name = bookName;
		$scope.newBook.description = bookDescription;
		$scope.addNewBook();
	};

});