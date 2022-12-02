function valider()
{
	var password=document.getElementById("password").value;
	if (password=="CEOUI"){
		alert("Bien Vu");
		window.location.assign("SiteYann.html");
		return false;
	}
	else{
		alert("bien essayé");
		return;
	}
}

function openPopup(){
	let popup = document.getElementById("popup");
	popup.classList.add("open-popup");
}