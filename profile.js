
var name=document.getElementById('name').value;
function hello()
{
   
   const message=`Hello ${name} thankyou for visting.
   Your feedback has been logged !! `;
   alert(message);
   return false;
}
function leavepage()
{
  alert(`Hey  you are moving out to an external site.`);
}
 function currentlydisabled()
{
  alert("Sorry!! This action has been disabled due to privacy concerns!!");
}

function viewpdf(a)
{
  switch(a)
  {
    case 1:
        document.getElementById("test_cert").src="./certificates/htmlcss_1.pdf#toolbar=0";
        break;
    
    case 2:
        document.getElementById("test_cert").src="./certificates/day1.2.pdf#toolbar=0";
        break;

    case 3:
        document.getElementById("test_cert").src="./certificates/day1.3.pdf#toolbar=0";
        break;
    
    case 4:
        document.getElementById("test_cert").src="./certificates/day3.pdf#toolbar=0";
        break;

    case 5:
        document.getElementById("test_cert").src="./certificates/db1.pdf#toolbar=0";
        break;

    case 6:
        document.getElementById("test_cert").src="./certificates/db2.pdf#toolbar=0";
        break;
  }
}