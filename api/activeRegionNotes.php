<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header('Content-type: application/json');

    require_once('./apiConnect.php');

    $api = new apiConnect;

    if (isset($_GET['activeRegionId'])) {
        $activeRegionId = $_GET['activeRegionId'];
    } else {
        $activeRegionId = 1;
    }

    $sql = "
        SELECT 
            n.id,
            n.`character`,
            n.note_text,
            n.parent_note_id
        FROM 
            notes AS n 
        JOIN 
            region AS r 
            ON r.id = n.region_id 
        WHERE 
            r.deleted_at IS NULL 
            AND n.deleted_at IS NULL 
            AND r.id = ?
        ;
    ";

    $results = $api->getActiveRegionNotesByActiveRegionId($sql, $activeRegionId);

    echo json_encode($results);
?>