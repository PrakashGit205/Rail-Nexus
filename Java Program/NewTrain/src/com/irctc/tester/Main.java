package com.irctc.tester;

import java.sql.SQLException;
import java.util.List;

import com.irctc.passengers.PassengerDao;
import com.irctc.passengers.Passengers;
import com.irctc.station.StationDao;
import com.irctc.station.Stations;
import com.mysql.cj.protocol.x.SyncFlushDeflaterOutputStream;

public class Main {
	
	public static void main(String[] args) throws SQLException {
//		try {
//		StationDao sd = new StationDao();
//		List<Stations> list = sd.showAllStations();
//		for (Stations stations : list) {
//			System.out.println(stations);
//		}
//		}catch (Exception e) {
//			e.printStackTrace();
//			// TODO: handle exception
//		}
//		PassengerDao pd = null;
//		try {
//			pd = new PassengerDao();
//			pd.showAllPsngr().forEach(System.out::println);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println("passenger by custid");
//		List<Passengers> list = pd.psngrByCustId(1);
//		list.forEach(System.out::println);
//	}
		String s1 = new String("abc")
				;
		String s2 =new String("abc");
		System.out.println( s1.equals(s2));
				
	}
}
