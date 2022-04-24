function run(){
			const myBar = document.getElementById('myBar');
			var width = 0;
			var timeInt = setInterval(frame, 10);

			function frame(){
				if (width >= 100) {
					clearInterval(timeInt);
				}else {
					width++;
					myBar.style.width = width + '%';
					myBar.innerHTML = width + '%';
				}
			}
	    }