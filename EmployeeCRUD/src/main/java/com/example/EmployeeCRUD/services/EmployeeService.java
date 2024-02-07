package com.example.EmployeeCRUD.services;

import java.util.List;

import com.example.EmployeeCRUD.entities.Employee;

public interface EmployeeService {

	void addEmployee(Employee employee);

	void deleteEmployee(int id);

	List<Employee> getEmployee();

}
