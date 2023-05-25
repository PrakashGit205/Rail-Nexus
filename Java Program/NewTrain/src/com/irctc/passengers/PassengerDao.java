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

	public PassengerDao() throws Exception {
		// TODO Auto-generated constructor stub
		con = DbUtil.getConnection();
		showAllPsngrStmt = con.prepareStatement(DbQuery.ShowAllPsngrSql);

	}

	public void close() throws SQLException {
		con.close();
		showAllPsngrStmt.close();
	}

	public List<Passengers> showAllPsngr() throws SQLException {
		List<Passengers> list = new ArrayList<Passengers>();
		ResultSet rs = showAllPsngrStmt.executeQuery();
		while (rs.next()) {
			 String name = rs.getString("pname");
			 String gender = rs.getString("pgender");
			 String pnrNo = rs.getString("PNRno");
			 int custId = rs.getInt("cust_id");
			int destStnNum = rs.getInt("dest_stn_num");
			int SourceStnNum = rs.getInt("source_stn_num");
			 int trnNum = rs.getInt("trn_num");
			 Timestamp bookingDate = rs.getTimestamp("booking_date");
			 long time = bookingDate.getTime();
			LocalDateTime ld = null;
			ld.of(bookingDate.getYear(), bookingDate.getMonth(), bookingDate.getDate(), bookingDate.getHours(), bookingDate.getMinutes(), bookingDate.getSeconds());
			int seatNO = rs.getInt("seat_no");
			list.add(new Passengers(name, gender, pnrNo, custId, destStnNum, SourceStnNum, trnNum, bookingDate, seatNO));
		}
		return list;
	}

}
