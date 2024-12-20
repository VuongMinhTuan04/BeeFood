package com.vn.Backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "roles")
public class Roles {
    @Id
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "roles")
    private List<Authorities> authorities;
}
