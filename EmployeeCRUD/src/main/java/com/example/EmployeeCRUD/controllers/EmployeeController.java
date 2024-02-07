package com.example.EmployeeCRUD.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.EmployeeCRUD.entities.Employee;
import com.example.EmployeeCRUD.services.EmployeeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/add")
	public String addEmployee(@RequestBody Employee employee) {
		
		employeeService.addEmployee(employee);
		
		return "employee added to the database successfully";
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee(@PathVariable Integer id) {
		employeeService.deleteEmployee(id);
		return "Employee deleted successfully";
	}
	
	@GetMapping("/get")
	public List<Employee> getAllEmployee(){
		return employeeService.getEmployee();
		
	
	}

}
