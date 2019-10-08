package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Entity.Defect;
import com.springboot.repository.DefectRepostories;

@RestController
@RequestMapping("/api/v1")
public class DefectController {
	@Autowired
	DefectRepostories defectRepostories;

	@PostMapping(value = "/defect")
	public ResponseEntity<?> createNote(@RequestBody Defect defect) {
		defectRepostories.save(defect);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}
	
	@GetMapping("/defect")
	  public List<Defect> getDefect() {
		return defectRepostories.findAll();

	}

}
