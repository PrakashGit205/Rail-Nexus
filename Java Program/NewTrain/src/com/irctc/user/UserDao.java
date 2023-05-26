package com.irctc.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.irctc.DbConnection.DbQuery;
import com.irctc.DbConnection.DbUtil;

public class UserDao {
	private Connection con = null;
	PreparedStatement addUserStmt = null; 
	public UserDao() throws Exception {
		// TODO Auto-generated constructor stub
		con = DbUtil.getConnection();
		addUserStmt = con.prepareStatement(DbQuery.AddNewUserSql);
		
	}
	public void close() throws SQLException {
		con.close();
	}
	public boolean addUser( User user) throws SQLException {
		addUserStmt.setString(1, user.getFirstName());
		addUserStmt.setString(2, user.getLastName());
		addUserStmt.setString(3, user.getAddress());
		addUserStmt.setString(4, user.getMobile());
		addUserStmt.setString(5, user.geteMail());
		addUserStmt.setString(6, user.getGender());
		addUserStmt.setString(7, user.getUserName());
		addUserStmt.setString(8, user.getPassword());
		if(addUserStmt.executeUpdate()==1)
			return true;
		else return false;
	}
	public User checkPassword( String password) {
		
		
		
		
		return new User();
	}
	

}
