// set the target element
const fetchDataBtn = document.querySelector("#fetchdata");

// get data from API
async function getData() {
  let result="";
  try {
    const res = await fetch("https://api.github.com/users/sreedevi-sree/repos");
    const jsonResult = await res.json();
    let img= jsonResult[0].owner.avatar_url;
for(i=0;i<jsonResult.length;i++)
{
  result += `
  Repository= ${jsonResult[i].name}
  fork count= ${jsonResult[i].forks_count}
  star count = ${jsonResult[i].stargazers_count}
  Repository link= ${jsonResult[i].url}
  `; 
}

// sets the content of #result div     
    document.getElementById("result").innerText=result;

// sets the image content of #image div
    document.getElementById("image").src=img;
  } 

  // To catch error in the console
    catch (error) {
    console.log(error);
  }
}

// add event listener for #fetchdata button
fetchDataBtn.addEventListener("click", getData);