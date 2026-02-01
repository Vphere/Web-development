package org.example.entities;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class StudentCollege {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "COLLEGE_ID")
    private int collegeId;

    @Column(name = "COLLEGE_NAME")
    private String collegeName;

    @OneToMany(mappedBy = "studentCollege")
    private Set<Student> student;

    public int getCollegeId() {
        return collegeId;
    }

    public void setCollegeId(int collegeId) {
        this.collegeId = collegeId;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public Set<Student> getStudent() {
        return student;
    }

    public void setStudent(Set<Student> student) {
        this.student = student;
    }
}
