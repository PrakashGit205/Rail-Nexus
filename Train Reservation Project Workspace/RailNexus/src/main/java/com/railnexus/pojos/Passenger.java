package com.railnexus.pojos;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.railnexus.pojos.enums.SeatStatus;
import com.railnexus.pojos.enums.TrainType;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "passengers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Passenger extends SuperId {

    
    @Column(name = "PNR", length = 10,unique = true)
    private String PNR;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "gender", length = 6, nullable = false)
    private String gender;

    @ManyToOne
    @JoinColumn(name = "user_id",  nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "destination_station",  nullable = false)
    private Station destinationStation;

    @ManyToOne
    @JoinColumn(name = "origin_station",  nullable = false)
    private Station sourceStation;

    @ManyToOne
    @JoinColumn(name = "train_no",  nullable = false)
    private Train train;

    @Column(name = "seat_no")
    private Integer seatNo;

    @Column(name = "Boogie_no")
    private String boogieNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "seat_status", length = 10)
    private SeatStatus seatStatus;

    // this is train booking date the day when customer booked the train
    @Column(name = "booking_date", nullable = false, updatable = false)
    private LocalDate bookingDate;
    
    // this is train departure date when customer will travel
    @Column(name = "train_departure_date", nullable = false)
    private LocalDate trainDepartureDate;
    
    @OneToMany(mappedBy = "passenger", cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    private List<Payment> payments = new ArrayList<>();


    public void addPayment(Payment payment) {
        payments.add(payment);
        payment.setPassenger(this);
    }

    public void removePayment(Payment payment) {
        payments.remove(payment);
        payment.setPassenger(null);
    }
}

