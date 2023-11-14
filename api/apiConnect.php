<?php

class ApiConnect {
    private $servername;
    private $username;
    private $password;
    private $database;
    private $conn;

    public function __construct() {
        include_once('../_config/_config.php');

        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;

        $this->conn = new mysqli(
            $this->servername, 
            $this->username, 
            $this->password, 
            $this->database
        );

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function close() {
        $this->conn->close();
    }

    public function get($sql = NULL) {
        if ($sql) {
            $stmt = $this->conn->prepare($sql);

            $stmt->execute();

            $result = $stmt->get_result();

            $rows = $result->fetch_all(MYSQLI_ASSOC);

            $this->close();

            return $rows;
        } 
    }

    public function getGamesByUserId($sql, $userId) {
        if ($sql) {
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("i", $userId);
            $stmt->execute();

            $result = $stmt->get_result();
            $rows = $result->fetch_all(MYSQLI_ASSOC);

            $this->close();

            return $rows;
        } 
    }

    public function getRegionsByActiveGameId($sql, $activeGameId) {
        if ($sql) {
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("i", $activeGameId);
            $stmt->execute();

            $result = $stmt->get_result();
            $rows = $result->fetch_all(MYSQLI_ASSOC);

            $this->close();

            return $rows;
        } 
    }

    public function getRegionDataByActiveRegionId($sql, $activeGameId, $activeRegionId) {
        if ($sql) {
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("ii", $activeGameId, $activeRegionId);
            $stmt->execute();

            $result = $stmt->get_result();
            $rows = $result->fetch_all(MYSQLI_ASSOC);

            $this->close();

            return $rows;
        } 
    }

    public function getActiveRegionNotesByActiveRegionId($sql, $activeRegionId) {
        if ($sql) {
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("i", $activeRegionId);
            $stmt->execute();

            $result = $stmt->get_result();
            $rows = $result->fetch_all(MYSQLI_ASSOC);

            $this->close();

            return $rows;
        } 
    }

    public function getMarkersByActiveRegionId($sql, $activeRegionId) {
        if ($sql) {
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("i", $activeRegionId);
            $stmt->execute();

            $result = $stmt->get_result();
            $rows = $result->fetch_all(MYSQLI_ASSOC);

            $this->close();

            return $rows;
        } 
    }
}        
?>