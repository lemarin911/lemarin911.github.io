var colori = new Array();
  	var intervallo;
  	var rosso = "#ff0000";
  	var nero = "#000000";
  	var verde = "#00ff00";

  	colori[0] = verde;
  	colori[1] = rosso;
  	colori[2] = nero;
  	colori[3] = rosso;
  	colori[4] = nero;
  	colori[5] = rosso;
  	colori[6] = nero;
  	colori[7] = rosso;
  	colori[8] = nero;
  	colori[9] = rosso;
  	colori[10] = nero;
  	colori[11] = nero;
  	colori[12] = rosso;
  	colori[13] = nero;
  	colori[14] = rosso;
  	colori[15] = nero;
  	colori[16] = rosso;
  	colori[17] = nero;
  	colori[18] = rosso;
  	colori[19] = rosso;
  	colori[20] = nero;
  	colori[21] = rosso;
  	colori[22] = nero;
  	colori[23] = rosso;
  	colori[24] = nero;
  	colori[25] = rosso;
  	colori[26] = nero;
  	colori[27] = rosso;
  	colori[28] = nero;
  	colori[29] = nero;
  	colori[30] = rosso;
  	colori[31] = nero;
  	colori[32] = rosso;
  	colori[33] = nero;
  	colori[34] = rosso;
  	colori[35] = nero;
  	colori[36] = rosso;

  	var conta = 0;
  	var tempo;

  	function gioca(){// funzione per ritardare l'esecuzione della funzione successiva
  		if(document.modulo.puntata.value!="null"){
  			tempo=Math.round(Math.random()*4000+3000);
  			document.getElementById('estratto').innerHTML= "<img src='https://i.postimg.cc/mZt5GM9W/roulette.gif' width='200' height='200' />"
  			setTimeout("giuseppe()",tempo);
  			disabilita();
  		} else {
  			alert('Prima devi selezionare prima un numero!');
  		}

  	}

  	function disabilita() {
  		document.modulo.gioco.disabled=true;
  		document.getElementById("puntata").disabled=true;
  		document.getElementById("rosso").disabled=true;
  		document.getElementById("nero").disabled=true;
  		document.getElementById("pari").disabled=true;
  		document.getElementById("dispari").disabled=true;
  	}

  	function abilita(){
  		document.modulo.gioco.disabled=false;
  		document.getElementById("puntata").disabled=false;
  		document.getElementById("rosso").disabled=false;
  		document.getElementById("nero").disabled=false;
  		document.getElementById("pari").disabled=false;
  		document.getElementById("dispari").disabled=false;
  	}

  	function giuseppe(){
  		conta++;
  		giri=Math.round(Math.random()*50+10);//variabile per tempo di durata del giro
  		casuale=Math.round(Math.random()*36);// numero ramdom
  		document.getElementById('estratto').innerHTML = casuale;

  		clearInterval(intervallo);
  		conta=0;
  		document.getElementById("uscite").innerHTML=document.getElementById("uscite").innerHTML+"<div style='background-color:"+colori[casuale]+"; width:70px; height:70px; text-align:center; float:left; margin:5px;padding:5px;'><font size='7' color='#fff'>"+casuale+"</font></div>";//cronologia dei numeri
  		numero=document.modulo.puntata.value;

  		var messaggio="";

  		messaggio="<table border='0' align='center' width='600' style='margin:0 auto;'><tr><td>Numero</td><td>";

  		if (numero==casuale){
  			messaggio=messaggio+ "<img src='https://i.postimg.cc/B8M0TWfg/vinto.gif' /></td><td>Hai indovinato</td></tr>";
  		} else {
  			messaggio=messaggio+ "<img src='https://i.postimg.cc/WD2VqNCz/perso.gif' /></td><td>Non hai indovinato</td></tr>";
  		}

  		var colorescelto=document.modulo.colore.value; //valore del colore scelto dall'utente

  		messaggio=messaggio+"<tr><td>Colore</td><td>"

  		if(colorescelto==colori[casuale]){
  			messaggio=messaggio+ "<img src='https://i.postimg.cc/B8M0TWfg/vinto.gif' /></td><td>Hai indovinato</td></tr>";
  		} else {
  			messaggio=messaggio+ "<img src='https://i.postimg.cc/WD2VqNCz/perso.gif' /></td><td>Non hai indovinato</td></tr>";
  		}

  		var tipo=document.modulo.tipo.value;

  		messaggio=messaggio+"<tr><td>Pari / Dispari</td><td>";

  		if(casuale%2==tipo){
  			messaggio=messaggio+ "<img src='https://i.postimg.cc/B8M0TWfg/vinto.gif' /></td><td>Bravo, il numero è ";
  			if(casuale%2==0){
  				messaggio=messaggio+" pari";
  			} else {
  				messaggio=messaggio+"dispari";
  			}
  			messaggio=messaggio+"</td></tr>";
  		} else {
  			messaggio=messaggio+"<img src='https://i.postimg.cc/WD2VqNCz/perso.gif' /></td><td>Peccato, il numero è ";
  			if(casuale%2==0){
  				messaggio=messaggio+" pari";
  			} else {
  				messaggio=messaggio+" dispari";
  			}
  			messaggio=messaggio+"</td></tr>";
  		}

  		messaggio=messaggio+"</table><p>Durata della giocata "+Math.round(tempo/100)/10 +"s.";

  		//document.modulo.puntata.value="null";//riporta la selezione del numero a nulla

  		document.getElementById('esito').innerHTML=messaggio;
  		abilita();
  	}