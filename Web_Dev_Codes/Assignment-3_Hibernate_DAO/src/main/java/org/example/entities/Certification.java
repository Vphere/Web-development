package org.example.entities;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Certification {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "CERTIFICATION_ID")
    private int certificateId;

    @Column(name = "CERTIFICATION_NAME")
    private String certificationName;

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Student> student;

    public int getCertificateId() {
        return certificateId;
    }

    public void setCertificateId(int certificateId) {
        this.certificateId = certificateId;
    }

    public Set<Student> getStudent() {
        return student;
    }

    public void setStudent(Set<Student> student) {
        this.student = student;
    }

    public String getCertificationName() {
        return certificationName;
    }

    public void setCertificationName(String certificationName) {
        this.certificationName = certificationName;
    }
}
