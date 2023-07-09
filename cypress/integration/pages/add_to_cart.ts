export class AddToCart {
    btn_add_to_cart = '#add-to-cart-sauce-labs-backpack'
    cart_badge = ".shopping_cart_badge"
    btn_remove_cart = "[data-test='remove-sauce-labs-backpack']"

    // add product to card
    addCart(){
        cy.get(this.btn_add_to_cart).first().click();
    }

    // assert after click add to cart
    assertAddCart(){
        cy.get(this.cart_badge).should('be.visible');
    }

    // remove product from cart
    removeCart(){
        cy.get(this.btn_remove_cart).click();
    }

    // assert after remove from cart
    assertRemoveCart(){
        cy.get(this.cart_badge).should('not.exist');
    }
}