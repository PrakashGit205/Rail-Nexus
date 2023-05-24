package com.irctc.station;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.irctc.DbConnection.DbQuery;
import com.irctc.DbConnection.DbUtil;
//import com.mysql.cj.protocol.Resultset;

public class StationDao {
	Connection con = null;
	PreparedStatement showAllStmt = null;

	public StationDao() throws Exception {
		con = DbUtil.getConnection();
		 showAllStmt = con.prepareStatement(DbQuery.ShowAllStationSql);
	}
	public void close() throws SQLException {
		con.close();
		showAllStmt.close();
	}

	public List<Stations> showAllStations() throws SQLException {
		ResultSet rs = showAllStmt.executeQuery();
		List<Stations> list = new ArrayList<Stations>();
		while(rs.next()) {
			list.add(new Stations(rs.getString("sname"), rs.getInt("sid"), rs.getString("city_name")));
		}
		
		return list;
	}

}
