function addproduct(){
	
	var ul = document.getElementById("list");
	var product = document.getElementById("product");
	var li = document.createElement("li");
	li.setAttribute('id', product.value);
	li.appendChild(document.createTextNode(product.value));
	product.value = "";
	ul.appendChild(li);
	
	var foo = document.getElementById("counter").innerHTML;
	foo++;
	document.getElementById("counter").innerHTML = foo;
	
	if (foo == 0){
		document.getElementById("show").style.display = "none";
		}
	else {
		document.getElementById("show").style.display = "inline";
	}

}	

