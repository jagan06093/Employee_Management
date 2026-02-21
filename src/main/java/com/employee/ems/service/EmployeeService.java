package com.employee.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.ems.model.Employee;
import com.employee.ems.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repo;

	public Employee add(Employee emp) { // 🔴 Duplicate email check
		if (repo.existsByEmail(emp.getEmail())) {
			throw new RuntimeException("EMAIL_ALREADY_EXISTS");
		}

		return repo.save(emp);
	}

	public List<Employee> getAll() {
		return repo.findAll();
	}

	public Employee getById(int id) {
		return repo.findById(id).orElseThrow();
	}

	public Employee update(int id, Employee emp) {
		Employee e = getById(id);
		e.setName(emp.getName());
		e.setEmail(emp.getEmail());
		e.setDepartment(emp.getDepartment());
		e.setSalary(emp.getSalary());
		return repo.save(e);
	}

	public void delete(int id) {
		repo.deleteById(id);
	}
}
