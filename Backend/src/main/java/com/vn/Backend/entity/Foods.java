package com.vn.Backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "foods")
public class Foods {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private BigDecimal price;
    private Integer quantity;
    private String photo;

    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp date;
    private String description;
    private Boolean status;

    @JsonIgnore
    @OneToMany(mappedBy = "foods")
    private List<Reviews> reviews;

    @JsonIgnore
    @OneToMany(mappedBy = "foods")
    private List<Carts> carts;

    @ManyToOne
    @JoinColumn(name = "categories")
    private Categories categories;
}
