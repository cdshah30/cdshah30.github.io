    <!DOCTYPE html>  
         <html>   
         <head>   
      <title></title>  
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
      </head>  
      <body>   
      <h3>Checker Board using Nested For Loop</h3>  
       <table width="300px" cellspacing="1px" cellpadding="1px" border="1px">  
     
          <?php  
          for($row=1;$row<=8;$row++)  
          {  
              echo "<tr>";  
              for($col=1;$col<=8;$col++)  
              {  
              $total=$row+$col;  
              if($total%2==0)  
              {  
              echo "<td height=35px width=35px bgcolor=red></td>";  
              }  
              else  
              {  
              echo "<td height=35px width=35px bgcolor=black></td>";  
              }  
              }  
              echo "</tr>";  
        }  
              ?>  
      </table>  
      </body>  
      </html>  



  

