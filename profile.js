
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
  if(a===1)
  {
    document.getElementById("test_cert").src="./certificates/htmlcss_1.pdf";
  }
}