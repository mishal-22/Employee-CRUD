package com.example.EmployeeCRUD.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EmployeeCRUD.entities.Employee;
import com.example.EmployeeCRUD.repository.EmployeeRepository;

@Service
public class EmployeeServiceImplementation implements EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void addEmployee(Employee employee) {
		
		  employeeRepository.save(employee);
	}

	@Override
	public void deleteEmployee(int id) {
		employeeRepository.deleteById(id);
		
	}

	@Override
	public List<Employee> getEmployee() {
		
		return employeeRepository.findAll();
	}

}
