package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.Entity.Defect;


public interface DefectRepostories extends JpaRepository<Defect, Long>{

}
