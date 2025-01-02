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
@Table(name = "users")
public class Users {
    @Id
    private String email;
    private String password;
    private String address;
    private String phone;
    private String fullname;
    private String photo;
    private Boolean status;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Authorities> authorities;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Reviews> reviews;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Carts> carts;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Orders> orders;
}
