import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {AddToCart} from "./pages/add_to_cart"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let addToCart = new AddToCart()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

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