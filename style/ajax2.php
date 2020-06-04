<?php

$host="localhost";
    $user = "root";
    $pass="";
    $bd="ligne";
    $con=mysqli_connect($host,$user,$pass,$bd);
   
      $id=$_POST['id_arrivee'];
    
     $query="SELECT * FROM `table_ligne`WHERE `id_arrivee`= $id ORDER BY num_ligne";
      
     $do=mysqli_query($con,$query);
     
      
      while ($row = mysqli_fetch_array($do)) {
     		 echo '<p value="'.$row['id_ligne'].'">'.$row["num_ligne"].' </p>';
      

}

 ?>