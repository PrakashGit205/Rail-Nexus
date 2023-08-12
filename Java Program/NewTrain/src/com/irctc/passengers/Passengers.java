package com.irctc.passengers;

//import java.sql.LocalDateTime;
import java.time.LocalDateTime;

public class Passengers implements Comparable<String>{
	private String name;
	private String gender;
	private String pnrNo;
	private int custId;
	private int destStnNum;
	private int sourceStnNum;
	private int trnNum;
	private LocalDateTime bookingDate;
	private int seatNo;
	private int boogieNo;
	private String status;
	private double fair;
	private LocalDateTime journeyDate;
	

	public Passengers(String name, String gender, String pnrNo, int custId, int destStnNum, int sourceStnNum,
			int trnNum, LocalDateTime bookingDate, int seatNo, int boogieNo, String status, double fair,
			LocalDateTime journeyDate) {
		super();
		this.name = name;
		this.gender = gender;
		this.pnrNo = pnrNo;
		this.custId = custId;
		this.destStnNum = destStnNum;
		this.sourceStnNum = sourceStnNum;
		this.trnNum = trnNum;
		this.bookingDate = bookingDate;
		this.seatNo = seatNo;
		this.boogieNo = boogieNo;
		this.status = status;
		this.fair = fair;
		this.journeyDate = journeyDate;
	}

	public double getFair() {
		return fair;
	}

	public void setFair(double fair) {
		this.fair = fair;
	}

	public LocalDateTime getJourneyDate() {
		return journeyDate;
	}

	public void setJourneyDate(LocalDateTime journeyDate) {
		this.journeyDate = journeyDate;
	}

	public Passengers() {

	}

	public Passengers(String name, String gender, String pnrNo, int custId, int destStnNum, int sourceStnNum,
			int trnNum, LocalDateTime bookingDate, int seatNo, int boogieNo, String status) {
		super();
		this.name = name;
		this.gender = gender;
		this.pnrNo = pnrNo;
		this.custId = custId;
		this.destStnNum = destStnNum;
		this.sourceStnNum = sourceStnNum;
		this.trnNum = trnNum;
		this.bookingDate = bookingDate;
		this.seatNo = seatNo;
		this.boogieNo = boogieNo;
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getBoogieNo() {
		return boogieNo;
	}

	public void setBoogieNo(int boogieNo) {
		this.boogieNo = boogieNo;
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

	public Passengers(String name, String gender, String pnrNo, int custId, int destStnNum, int sourceStnNum,
			int trnNum, LocalDateTime bookingDate, String status) {
		super();
		this.name = name;
		this.gender = gender;
		this.pnrNo = pnrNo;
		this.custId = custId;
		this.destStnNum = destStnNum;
		this.sourceStnNum = sourceStnNum;
		this.trnNum = trnNum;
		this.bookingDate = bookingDate;
		this.status = status;
	}

	public LocalDateTime getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDateTime bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPnrNo() {
		return pnrNo;
	}

	public void setPnrNo(String pnrNo) {
		this.pnrNo = pnrNo;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public int getDestStnNum() {
		return destStnNum;
	}

	public void setDestStnNum(int destStnNum) {
		this.destStnNum = destStnNum;
	}

	public int getsourceStnNum() {
		return sourceStnNum;
	}

	public void setsourceStnNum(int sourceStnNum) {
		this.sourceStnNum = sourceStnNum;
	}

	public int getTrnNum() {
		return trnNum;
	}

	public void setTrnNum(int trnNum) {
		this.trnNum = trnNum;
	}

	@Override
	public String toString() {
		return "Passengers [name=" + name + ", gender=" + gender + ", pnrNo=" + pnrNo + ", custId=" + custId
				+ ", destStnNum=" + destStnNum + ", sourceStnNum=" + sourceStnNum + ", trnNum=" + trnNum
				+ ", bookingDate=" + bookingDate + ", seatNo=" + seatNo + ", boogieNo=" + boogieNo + ", status="
				+ status + ", fair=" + fair + ", journeyDate=" + journeyDate + "]";
	}

	@Override
	public int compareTo(String o) {
		// TODO Auto-generated method stub
		if(this.gender.equals(o) == true)
		return 0;
		else return 1;
	}

}
