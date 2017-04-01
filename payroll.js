(function calc () {

  var number_of_hours = parseInt(window.prompt("How many hours did this employee works? \n"  +  "Enter '-1' to exit."));
        var employee_number = 0;
        var hourly_wage= parseInt(window.prompt("What is the Hourly Wage of the employee? \n"  +  "Enter '-1' to exit."));
        var overtime = 40;
        var pay = 0;
        var total = 0;

        while (number_of_hours >=0){
                employee_number += 1;
                if (number_of_hours > overtime)
                        pay = (overtime * hourly_wage) + 1.5 * (number_of_hours - overtime) * hourly_wage;
                else
                        pay = hourly_wage * number_of_hours;

                document.write("<tr><td>" + employee_number + "</td><td>" + number_of_hours + "</td><td>" + hourly_wage + "</td> <td> $" + pay + "</td></tr>");
                total += pay;

                number_of_hours = parseInt(window.prompt("How many hours did this employee work?\n"  +  "Enter '-1' to exit."));
                hourly_wage=parseInt(window.prompt("What is the Hourly Wage of the employee? \n"  +  "Enter '-1' to exit."));
        }
        document.write("</tbody>");
        document.write("</table>");
        document.write("</p> <center> The total salary to be paid is $" + total + "." +" </center></p> </font>");

}());


