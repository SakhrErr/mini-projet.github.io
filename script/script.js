const stationLigne = [
	["quartier AMOUNI", "SIDI BOUDHAB"],
	["SIDI BOUDHAB", "KARIAT CHEMS"],
	["XXXX", "YYYY"],
	["Place IDRISS II", "SIDI BOUZID"],
	["Place IDRISS II", "JANNANE ILANE"],
	["SIDI BOUDHEB", "KAWKI"],
	["AAAA", "BBBB"],
	["EL CORSSE", "CHANGUIT"],
	["SIDI BOUDHEB", "AVIATION"],
	["EL CORSSE", "BIADA"],
	["EL CORSSE", "SIDI ABDRAHMANE"],
	["EL CORSSE", "Unité UNIVERSITAIRE"]
];

let l = [];
for(let i = 0; i<12; i++){
	l[i] = document.getElementById( 'l' + (i+1) );
}



const searchBar = document.getElementById('ligneRecherche');

searchBar.addEventListener('keyup', function(e) {
    const station = e.target.value.toLowerCase();
    let border = 0;

	for(let i = 0; i < stationLigne.length; i++){
        
		for (let j = 0; j <  stationLigne[i].length ; j++) {
			if(stationLigne[i][j].toLowerCase().indexOf(station) == -1){
                l[i].style.display = 'none';
                border++;
			} else {
                l[i].style.display = '';
				break;
            }
            
            

            if(border >= 24){
                searchBar.style.border = 'thin solid red';
                searchBar.style.borderWidth = '3px';
            } else {
                searchBar.style.border = 'thin solid green';
                searchBar.style.borderWidth = '3px';
            }
		}
	}
});

searchBar.addEventListener('blur', () => {
    searchBar.style.border = '';
});