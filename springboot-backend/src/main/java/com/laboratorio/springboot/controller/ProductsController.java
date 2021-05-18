package com.laboratorio.springboot.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.laboratorio.springboot.exception.ResourceNotFoundException;
import com.laboratorio.springboot.model.Employee;
import com.laboratorio.springboot.model.Products;
import com.laboratorio.springboot.repository.ProductsRepository;
import com.laboratorio.springboot.services.FilesStorageService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductsController {
	 @Autowired
	 FilesStorageService storageService;
	@Autowired
	private ProductsRepository repository;
	
	// get all employees
	@GetMapping("/products")
	public List<Products> getAllEmployees(){
		return repository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/products")
	public Products createProducts(@RequestBody Products products) {
		try {
		
			repository.save(products);
	   	
		}
				catch(Exception ex) {
					ex.printStackTrace();
				}
				return products;
	}
	
	// get employee by id rest api
	@GetMapping("/products/{id}")
	public ResponseEntity<Products> getEmployeeById(@PathVariable Long id) {
		Products products = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(products);
	}
	
	// update employee rest api
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Products> updateEmployee(@PathVariable Long id, @RequestBody Products productDetails){
		Products products  = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		products.setProductName(productDetails.getProductName());
		products.setBrand(productDetails.getBrand());
		products.setListPrice(productDetails.getListPrice());
		
		Products updatedProducts= repository.save(products);
		return ResponseEntity.ok(updatedProducts);
	}
	
	// delete employee rest api
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Products products = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		repository.delete(products);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
