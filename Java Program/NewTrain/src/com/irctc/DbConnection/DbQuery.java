package com.irctc.DbConnection;

import java.sql.Connection;
import java.sql.SQLException;

public class DbQuery {
	public static String PsngrByCustIdSql = "select * from passengers where cust_id = ?";
	public static String ReservationSql = "insert into passengers (pname, pgender, PNRno, cust_id, dest_stn_num, source_stn_num, trn_num, seat_no,Boogie_no,seat_status) "
			+ "VALUES ";
//	we will take seat from Seat table and will insert it to passengers table
//	INSERT INTO passengers (passenger_name, seat_number, departure_time)
//	SELECT 'John Doe', seat_number, departure_time
//	FROM seats
//	WHERE seat_id = 123;
//	will use these queries;

	public static String ShowMyDetailsSql = "select * from passengers where PNRno = ?";
	public static String ShowAllStationSql = "select * from stations";
	public static String ShowAllPsngrSql = "select * from passengers"; 
	public static String UpdateAndSetSeatSql;
	private Connection con;

	public DbQuery() throws Exception {
		con = DbUtil.getConnection();
	}

	public void close() throws SQLException {
		con.close();

	}
	
}
