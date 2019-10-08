package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.Entity.Employee;

public interface EmployeeRepostories extends JpaRepository<Employee, Long>{

}
