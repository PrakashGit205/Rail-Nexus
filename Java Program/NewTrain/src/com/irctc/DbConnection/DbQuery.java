package com.irctc.DbConnection;

import java.sql.Connection;
import java.sql.SQLException;

public class DbQuery {
	public static String PsngrByCustIdSql = "select * from passengers where custId = ?";
	public static String canceTicketSql= "";
	public static String UserNameLoginSql = "select * from Users where username = ? and password = ?";
	public static String EmailLoginSql = "select * from Users where eMail = ? and password = ?";
	public static String MobileLoginSql = "select * from Users where mobile = ? and password = ?";
	public static String ChangePassSql = "update into Users set password = ? where username = ?";
	
//	we will take seat from Seat table and will insert it to passengers table
//	INSERT INTO passengers (passenger_name, seat_number, departure_time)
//	SELECT 'John Doe', seat_number, departure_time
//	FROM seats
//	will use these queries;
//	WHERE seat_id = 123;
	
	public static String ShowMyDetailsSql = "select * from passengers where PNRno = ?";
	public static String ShowAllStationSql = "select * from stations";
	public static String ShowAllPsngrSql = "select * from passengers"; 
	public static String AddNewUserSql = "INSERT INTO Users (fName, lName, address, mobile, eMail, gender, userName, password)"
			+ " VALUES"
			+ "(?,?,?,?,?,?,?,?)";
// reservation sql;	
	public static String ReservationSql = "insert into passengers (pname, pgender, PNRno, custId, destStnNum, sourceStnNum, trnNum, seatNo,boogieNo,seatStatus,userName) "
			+ " VALUES(?,?,?,?,?,?,?,?,?,?) ";
	public static String AddPassengerSql = "insert into ";
	public  static String SeatFairSql = "select Fair from fairs where trainNum";
	public static String getAvaialableTrainsSql = "";
	public static String getAvailableSeatsSql = "";
	public static String getFairOfSeatsSql = "";
	private Connection con;

	public DbQuery() throws Exception {
		con = DbUtil.getConnection();
	}

	public void close() throws SQLException {
		con.close();

	}
	
}
