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
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String phone;
    private String email;
    private String method;
    private String address;
    private BigDecimal total;
    private String status;

    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp date;

    @JsonIgnore
    @OneToMany(mappedBy = "orders")
    private List<OrderDetails> orderDetails;

    @ManyToOne
    @JoinColumn(name = "users")
    private Users users;
}
