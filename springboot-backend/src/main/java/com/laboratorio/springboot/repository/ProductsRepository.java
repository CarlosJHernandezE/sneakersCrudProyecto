package com.laboratorio.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laboratorio.springboot.model.Employee;
import com.laboratorio.springboot.model.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long>{

}
