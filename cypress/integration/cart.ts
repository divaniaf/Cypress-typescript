import {LoginPage} from "./pages/login_pages"
import {AddToCart} from "./pages/add_to_cart"

let loginPage = new LoginPage()
let addToCart = new AddToCart()
const URL = 'https://www.saucedemo.com/'

it('Add product to cart', () =>{
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    addToCart.addCart()
    addToCart.assertAddCart()
})

it('Remove product from cart', () =>{
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    addToCart.addCart()
    addToCart.assertAddCart()
    addToCart.removeCart()
    addToCart.assertRemoveCart()
})