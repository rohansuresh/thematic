var storeIdPR = '10165';
var catalogIdPR = '26151';

var allPageTags = new Array(); 
function hideBRPopup(theClass) { 
	var allPageTags=document.getElementsByTagName("*"); 
	for (i=0; i<allPageTags.length; i++) { 
		if (allPageTags[i].className==theClass) { 
		 allPageTags[i].style.display='none'; 
		} 
	} 
} 
