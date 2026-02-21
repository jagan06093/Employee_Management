package com.employee.ems.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.employee.ems.model.Employee;
import com.employee.ems.service.EmployeeService;


@RestController
@RequestMapping("/employees")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

	
	  @PostMapping public Employee add(@RequestBody Employee emp) { return
	 service.add(emp); }
	 
   

    @GetMapping
    public List<Employee> all() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Employee byId(@PathVariable int id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable int id, @RequestBody Employee emp) {
        return service.update(id, emp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }
}



