package com.vn.Backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "foodDiscounts")
public class FoodDiscounts {
    @Id
    @ManyToOne
    @JoinColumn(name = "foods")
    private Foods foods;

    @Id
    @ManyToOne
    @JoinColumn(name = "discounts")
    private Discounts discounts;
}
