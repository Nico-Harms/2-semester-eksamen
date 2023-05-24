fetch("produkter.json")
   .then(function (response) {
      return response.json();
   })
   .then(function (products) {
      let placeholder = document.querySelector("#produkt-udvalgt");
      let out = "";
      for (let product of products) {
         out += `
      <a href=""> 
	  <div class="produkt-kasser">
            <p>${product.navn}<p>
			<img src='${product.billede}'>
            
			<div class="produkt-tekst-baggrund">
            <p>${product.land}</p>
			<p>${product.område}</p>
			<p>${product.producent}</p>
			<p id="produkt-pris">${product.pris}</p>
			</div>
			</div>
         </a>
      `;
      }

      placeholder.innerHTML = out;
   });
