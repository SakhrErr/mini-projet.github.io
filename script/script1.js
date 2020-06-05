$(document).ready(function(){
     $('#depart').change(function(){
           var id_depart= $(this).val();
           $.ajax({
            url:"ajax.php",
            method:"POST",
            data:{id_depart:id_depart},
            dataType:"text",
            success:function(data)
            {
                $('#arrivee').html(data);
            }
           });

     });


   }); 
   
   
   $(document).ready(function(){
     $('#arrivee').change(function(){
           var id_arrivee= $(this).val();
           $.ajax({
            url:"ajax2.php",
            method:"POST",
            data:{id_arrivee:id_arrivee},
            dataType:"text",
            success:function(data)
            {
                $('#ligne').html(data);
            }
           });

     });


   }); 
