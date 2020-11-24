describe('woolworths shopping', () => {
	
	it('Visit woolworths page', () => {
		cy.visit('https://www.woolworths.com.au/');
	});
	it('Click the login/signup button', () => {
		// find the element that contains login/signup
		// then click the button
		cy.contains('Log in').click();
	});

	it ('Enters username and password into the input field', () => {
		// enter username
		cy.get('input[name="Email"]').type('patricksu213@gmail.com');
		// enter password
		cy.get('input[name="Password"]').type('xtock168');
		// click log in button
		cy.get('button[type="submit"]')
			.should('be.visible')
			.wait(2000)
			.click({waitForAnimations: false});
	});
	
	it ('Navigate to fruit section', () => {
		// click the Fruit & Veg categorys
		const categories = cy.contains('Browse Groceries')
		categories.click({
			waitForAnimations: false
		});
		cy.wait(2000);
		const fruitVeg = categories
			.get('ul[class="categoriesNavigation-list"]')
			.contains(' Fruit & Veg ');
		fruitVeg.should('be.visible').click();
		categories
			.get('ul[class="categoriesNavigation-list"]')
			.get('li.ng-star-inserted')
			.wait(2000)
			.eq(6)
			.should('be.visible')
			.click();

		categories
			.get('ul[class="categoriesNavigation-list"]')
			.get('li.ng-star-inserted')
			.wait(2000)
			.contains(' Melons & Mangoes ')
			.should('be.visible')
			.click();
	})

	it ('add water melon to cart', () => {
		/*  
			index is the index of the fruit in the item list
			if i click add cart button, the element of the add card selected is reduced
			since the button becomes an input field to show the number of item
		 	user wants to add to cart, therefore for each addcart button we click,
		 	we need to reduce the index by 1
		*/  
		var indexShift = 0;
		cy.visit('https://www.woolworths.com.au/shop/browse/fruit-veg/fruit/melons-mangoes');
		cy.get('a[class="shelfProductTile-descriptionLink"]')
			.each((element, index) => {
				cy.wrap(element).invoke('text').then((fruitName) => {
					if (fruitName.includes('Watermelon')) {
						console.log(fruitName);
						cy.get('span[class="cartControls-addCart"]').eq(index - indexShift).parent().click();
						indexShift += 1;
					}
				})
			})
	})
})