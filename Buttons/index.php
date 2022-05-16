<?php
    $conn = mysql_connect('localhost', 'root', '');
    $db = mysql_select_db('criar', $conn);

    $query = "select * from Restaurante";
    $result = mysql_query($query, $conn);

    //$restaurants = mysqli_fetch_all($result, MYSQLI_ASSOC);

    <span>ID:</span> <?php echo $row1['idRestaurante']; ?>
    <span>Name:</span> <?php echo $row1['nome']; ?>
    <span>Address: </span> <?php echo $row1['morada']; ?>
    <span>Type:</span> <?php echo $row1['tipo']; ?>
?>

