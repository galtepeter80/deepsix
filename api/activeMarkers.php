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
            m.id, 
            m.`name`,
            m.`desc`, 
            m.image_url,
            m.lat,
            m.`long`
        FROM 
            markers AS m 
        WHERE 
            m.deleted_at IS NULL 
            AND m.region_id = ?
        ;
    ";

    $results = $api->getMarkersByActiveRegionId($sql, $activeRegionId);

    echo json_encode($results);
?>