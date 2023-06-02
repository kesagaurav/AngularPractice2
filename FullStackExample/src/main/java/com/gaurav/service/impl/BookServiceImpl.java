package com.gaurav.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gaurav.model.Book;
import com.gaurav.repository.BookRepository;
import com.gaurav.service.BookService;

@Service
public class BookServiceImpl implements BookService {
	@Autowired(required = false)
	private BookRepository bookRepository;

	@Override
	public Book createBook(Book b) {
		// TODO Auto-generated method stub
		return bookRepository.save(b);
	}

	@Override
	public void deleteBook(int id) {
		// TODO Auto-generated method stub
		bookRepository.deleteById(id);

	}

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();
	}

	@Override
	public Book updateBook(Book b) {
		// TODO Auto-generated method stub
		/*
		 * ArrayList<Book> list=new ArrayList<>(); list.stream().map(c->{
		 * if(c.getId()==a) { c.setName(c.getName()); c.setAuthor(c.getAuthor()); }
		 * return c; }).collect(Collectors.toList());
		 */

		int id = b.getId();
		Book b1 = bookRepository.findById(id).get();
		b1.setName(b.getName());
		b1.setAuthor(b.getAuthor());
		return bookRepository.save(b1);

	}

	@Override
	public Book getById(int id) {
		// TODO Auto-generated method stub
		return bookRepository.getOne(id);
	}

}
