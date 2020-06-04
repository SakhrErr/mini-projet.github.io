<?php

$host="localhost";
    $user = "root";
    $pass="";
    $bd="ligne";
    $con=mysqli_connect($host,$user,$pass,$bd);
   
      $id=$_POST['id_depart'];
    
     $query="SELECT * FROM `table_arrivee`WHERE `id_depart`= $id ORDER BY nom_arrivee";
      
     $do=mysqli_query($con,$query);
     
      echo '<option >Arrivée : Adresse</option>';
      while ($row = mysqli_fetch_array($do)) {
        
     		 echo '<option value="'.$row['id_arrivee'].'">'.$row["nom_arrivee"].' </option>';
      

}

 ?>