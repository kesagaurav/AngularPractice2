package com.gaurav.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gaurav.model.Book;
import com.gaurav.service.BookService;
@RestController
@CrossOrigin("*")
public class BookController {
	@Autowired(required = false)
	private BookService bs;
	@PostMapping("/book")
	public Book createBook(@RequestBody Book b) {
		// TODO Auto-generated method stub
		System.out.println(b);
		return bs.createBook(b);
		
	}

	@DeleteMapping("book/{id}")
	public void deleteBook(@PathVariable int id) {
		// TODO Auto-generated method stub
		bs.deleteBook(id);
		
	}

	@GetMapping("/books")
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return bs.getAllBooks();
	}

	@PutMapping("/book")
	public Book updateBook(@RequestBody Book b) {
		// TODO Auto-generated method stub
		return bs.updateBook(b);
		
	}
	
	@GetMapping("/book/{id}")
	public Book getById(@PathVariable int id) {
		// TODO Auto-generated method stub
		return bs.getById(id);
	}

}
