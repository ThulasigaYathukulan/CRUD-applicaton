package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.Entity.Project;

@Repository
public interface ProjectRepostories extends JpaRepository<Project, Long>{

	Project findByid(Long id);
	
	
}