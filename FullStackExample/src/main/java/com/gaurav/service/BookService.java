package com.gaurav.service;

import com.gaurav.model.Book;
import java.util.*;
public interface BookService {
Book createBook(Book b);
void deleteBook(int id);
List<Book> getAllBooks();
Book updateBook(Book b);
Book getById(int id);

}
