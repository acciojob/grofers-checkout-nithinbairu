const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum=0
  const price=document.querySelectorAll(".price");
	for(let i=0;i<price.length;i++){
		sum+=parseInt(price[i].innerText,10)
	}
	const table=document.querySelector("table");
	const row=document.createElement("tr");
	row.innerHTML=`
	<td id="ans">${sum}</td>
	`;
	table.appendChild(row);
};


getSumBtn.addEventListener("click", getSum);

