package com.irctc.tester;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class InsertStationDistance {
    // Database connection details
    private static final String DB_URL = "jdbc:mysql://your_host:your_port/your_database_name";
    private static final String DB_USERNAME = "your_username";
    private static final String DB_PASSWORD = "your_password";

    public static void main(String[] args) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            // Connect to the database
            conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);

            // Retrieve the list of station IDs from the Stations table
            List<Integer> stationIds = getStationIds(conn);

            // Generate all combinations of station IDs
            List<StationCombination> combinations = generateCombinations(stationIds);

            // Insert dummy values for distance and arrival time into StationDistance table
            insertDummyValues(conn, combinations);

            System.out.println("Data inserted successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close resources
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    // Retrieve the list of station IDs from the Stations table
    private static List<Integer> getStationIds(Connection conn) throws SQLException {
        List<Integer> stationIds = new ArrayList<>();
        String query = "SELECT id FROM Stations";

        try (PreparedStatement stmt = conn.prepareStatement(query)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    int stationId = rs.getInt("id");
                    stationIds.add(stationId);
                }
            }
        }

        return stationIds;
    }

    // Generate all combinations of station IDs
    private static List<StationCombination> generateCombinations(List<Integer> stationIds) {
        List<StationCombination> combinations = new ArrayList<>();

        for (int i = 0; i < stationIds.size(); i++) {
            for (int j = i + 1; j < stationIds.size(); j++) {
                int startStationId = stationIds.get(i);
                int endStationId = stationIds.get(j);
                combinations.add(new StationCombination(startStationId, endStationId));
            }
        }

        return combinations;
    }

    // Insert dummy values for distance and arrival time into StationDistance table
    private static void insertDummyValues(Connection conn, List<StationCombination> combinations) throws SQLException {
        String query = "INSERT INTO StationDistance (startStationId, endStationId, distance, arrivalTime) VALUES (?, ?, 'NA', 'NA')";

        try (PreparedStatement stmt = conn.prepareStatement(query)) {
            for (StationCombination combination : combinations) {
                stmt.setInt(1, combination.getStartStationId());
                stmt.setInt(2, combination.getEndStationId());
                stmt.addBatch();
            }

            stmt.executeBatch();
        }
    }

    // Helper class to represent a combination of start and end station IDs
    private static class StationCombination {
        private final int startStationId;
        private final int endStationId;

        public StationCombination(int startStationId, int endStationId) {
            this.startStationId = startStationId;
            this.endStationId = endStationId;
        }

        public int getStartStationId() {
            return startStationId;
        }

        public int getEndStationId() {
            return endStationId;
        }
    }
}
