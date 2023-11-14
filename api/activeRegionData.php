<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header('Content-type: application/json');

    require_once('./apiConnect.php');

    $api = new apiConnect;

    if (isset($_GET['activeGameId'], $_GET['activeRegionId'])) {
        $activeGameId = $_GET['activeGameId'];
        $activeRegionId = $_GET['activeRegionId'];
    } else {
        $activeGameId = 1;
        $activeRegionId = 1;
    }

    $sql = "
        SELECT 
            g.`name` AS activeGameTitle
            , r.`name` AS activeRegionTitle
            , r.lat AS activeRegionLat
            , r.`long` AS activeRegionLong
            , r.`desc` AS activeLocationText
        FROM 
            game AS g 
        JOIN 
            region AS r 
            ON r.game_id = g.id 
        WHERE 
            g.id = ?
            AND r.id = ?
        ;
    ";

    $results = $api->getRegionDataByActiveRegionId($sql, $activeGameId, $activeRegionId);

    echo json_encode($results[0]);
?>