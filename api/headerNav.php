<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header('Content-type: application/json');

    require_once('./apiConnect.php');

    $api = new apiConnect;

    if (isset($_GET['userId'])) {
        $userId = $_GET['userId'];
    } else {
        $userId = 1;
    }

    $sql = "
        SELECT 
            g.id AS 'game_id'
            , g.name AS 'label'
            , MIN(r.`id`) AS 'initial_region_id'
        FROM 
            game AS g
        LEFT JOIN 
            game_users AS gu 
            ON gu.game_id = g.id 
        LEFT JOIN 
            users u 
            ON gu.user_id = u.id 
        LEFT JOIN 
            region AS r 
            ON r.game_id = g.id 
        WHERE
            g.deleted_at IS NULL 
            AND u.deleted_at IS NULL 
            AND gu.deleted_at IS NULL
            AND r.deleted_at IS NULL
            AND u.id = ?
        GROUP BY 
            g.id 
        ;
    ";

    $results = $api->getGamesByUserId($sql, $userId);

    echo json_encode($results);
?>