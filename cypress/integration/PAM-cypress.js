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
		cy.get('shared-button[buttontype="submit"]').should('be.visible').click();
	});
	/*
	it ('Navigate to fruit section', () => {
		// click the Fruit & Veg categorys
		const fruitVeg = cy.contains(' Fruit & Veg ');
		fruitVeg.click();
		fruit.contains(' Melons & Mangoes ').click({
			force: true 
		});
	})
	*/
})