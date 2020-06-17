"use strict";
//fetching jason data
fetch("./data.json").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length>0)
                {
                    var temp="";
                    data.forEach(u => {
                        temp+="<tr>";
                        temp+="<td>"+u.firstname+u.lastname+"</td>";
                        temp+="<td>"+u.role+"</td>";
                        temp+="<td>"+u.action+"</td>";
                        temp+="</tr>" 
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
)
function checkField(username)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(username.value.match(letters))
{
return true;
}
else
{
alert('Please input alphanumeric characters only');
username.value = "";
return false;
}
}

function myfunction(){
    alert('SUCCESS!!');
    return false;
}

$(document).ready(function(){
    $('.main').height($(window).height() - 120);
    $(window).on("resize", function(){
        $('.main').height($(window).height() - 120);
    });
});

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

$('#upload').on('change', function() 
  {
    var numb = $(this)[0].files[0].size/1024/1024;
   numb = numb.toFixed(2);
   if(numb > 1){
   alert('TRY AGAIN!!!, maximum is 1MB. You file size is: ' + numb +' MB');
   return true;
   } else {
   alert('SUCCESS!!, your file is ' + numb + 'MB')
   return false;
   }
});
