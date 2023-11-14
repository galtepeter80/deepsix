<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header('Content-type: application/json');

    require_once('./apiConnect.php');

    $api = new apiConnect;

    if (isset($_GET['activeGameId'])) {
        $activeGameId = $_GET['activeGameId'];
    } else {
        $activeGameId = 1;
    }

    $sql = "
        SELECT 
            r.`name` AS activeRegionTitle
            , r.`id` AS activeRegionId
        FROM 
            game AS g 
        JOIN 
            region AS r 
            ON r.game_id = g.id 
        WHERE 
            g.id = ?
            AND r.deleted_at IS NULL
        ;
    ";

    $results = $api->getRegionsByActiveGameId($sql, $activeGameId);

    echo json_encode($results);
?>