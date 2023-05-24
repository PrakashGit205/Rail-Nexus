package com.irctc.passengers;

import java.time.LocalDateTime;

public class Passengers {
	private String name;
	private String gender;
	private String pnrNo;
	private int custId;
	private int destStnNum;
	private int SourceStnNum;
	private int trnNum;
	LocalDateTime bookingDate;
	
	
	public Passengers(String name, String gender, String pnrNo, int custId, int destStnNum, int sourceStnNum,
			int trnNum, LocalDateTime bookingDate) {
		super();
		this.name = name;
		this.gender = gender;
		this.pnrNo = pnrNo;
		this.custId = custId;
		this.destStnNum = destStnNum;
		SourceStnNum = sourceStnNum;
		this.trnNum = trnNum;
		this.bookingDate = bookingDate;
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
	public int getSourceStnNum() {
		return SourceStnNum;
	}
	public void setSourceStnNum(int sourceStnNum) {
		SourceStnNum = sourceStnNum;
	}
	public int getTrnNum() {
		return trnNum;
	}
	public void setTrnNum(int trnNum) {
		this.trnNum = trnNum;
	}
	public Passengers(String name, String gender, String pnrNo, int custId, int destStnNum, int sourceStnNum,
			int trnNum) {
		super();
		this.name = name;
		this.gender = gender;
		this.pnrNo = pnrNo;
		this.custId = custId;
		this.destStnNum = destStnNum;
		SourceStnNum = sourceStnNum;
		this.trnNum = trnNum;
	}

	

}
