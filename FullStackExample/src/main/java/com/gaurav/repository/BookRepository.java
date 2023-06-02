package com.gaurav.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.gaurav.model.Book;
@Repository

public interface BookRepository extends JpaRepository<Book, Integer> {

}
