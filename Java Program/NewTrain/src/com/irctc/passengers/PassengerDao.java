package com.irctc.passengers;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.irctc.DbConnection.DbQuery;
import com.irctc.DbConnection.DbUtil;

public class PassengerDao {
	private Connection con = null;
	private PreparedStatement showAllPsngrStmt = null;
	private PreparedStatement myDetailsStmt = null;
	private PreparedStatement psngrByCustIdStmt = null;

	public PassengerDao() throws Exception {
		// TODO Auto-generated constructor stub
		con = DbUtil.getConnection();
		psngrByCustIdStmt = con.prepareStatement(DbQuery.PsngrByCustIdSql);
		myDetailsStmt = con.prepareStatement(DbQuery.ShowMyDetailsSql);
		showAllPsngrStmt = con.prepareStatement(DbQuery.ShowAllPsngrSql);

	}

	public void close() throws SQLException {
		con.close();
		showAllPsngrStmt.close();
		psngrByCustIdStmt.close();
		myDetailsStmt.close();
	}
	private Passengers returnPsngr(ResultSet rs) throws SQLException {

		String name = rs.getString("pname");
		String gender = rs.getString("pgender");
		String pnrNo = rs.getString("PNRno");
		int custId = rs.getInt("cust_id");
		int destStnNum = rs.getInt("dest_stn_num");
		int SourceStnNum = rs.getInt("source_stn_num");
		int trnNum = rs.getInt("trn_num");
		int boogieNo = rs.getInt("Boogie_no");
		String status = rs.getString("seat_status");
		Timestamp bookingDate = rs.getTimestamp("booking_date");
		int seatNO = rs.getInt("seat_no");
		
		return(new Passengers(name, gender, pnrNo, custId, destStnNum, SourceStnNum, trnNum, bookingDate, seatNO, boogieNo, status));
		
	}
	public List<Passengers> showAllPsngr() throws SQLException {
		List<Passengers> list = new ArrayList<Passengers>();
		ResultSet rs = showAllPsngrStmt.executeQuery();
		while (rs.next()) {
			 list.add(returnPsngr(rs));
//			 long time = bookingDate.getTime();
//			LocalDateTime ld = null;
//			ld.of(bookingDate.getYear(), bookingDate.getMonth(), bookingDate.getDate(), bookingDate.getHours(), bookingDate.getMinutes(), bookingDate.getSeconds());
//			list.add(new Passengers(name, gender, pnrNo, custId, destStnNum, SourceStnNum, trnNum, bookingDate, seatNO,boogieNo,status));
		}
		return list;
	}
	
	public Passengers psngrByPnrNO(int pnrNO) throws SQLException {
		myDetailsStmt.setInt(1, pnrNO);
		ResultSet rs = myDetailsStmt.executeQuery();
		return returnPsngr(rs);
		
	}
    public Passengers psngrByCustId(int id) throws SQLException {
    	psngrByCustIdStmt.setInt(1, id);
    	ResultSet rs = psngrByCustIdStmt.executeQuery();
    	return returnPsngr(rs);
    }

}
