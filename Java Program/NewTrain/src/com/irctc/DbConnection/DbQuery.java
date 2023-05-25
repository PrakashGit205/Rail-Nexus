package com.irctc.DbConnection;

import java.sql.Connection;
import java.sql.SQLException;

public class DbQuery {
	public static String ShowAllStationSql = "select * from stations";
	public static String ShowAllPsngrSql = "select * from passengers"; 
	private Connection con;

	public DbQuery() throws Exception {
		con = DbUtil.getConnection();
	}

	public void close() throws SQLException {
		con.close();

	}
	
}
