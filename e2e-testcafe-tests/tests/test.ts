import { homePage, appBackendApi } from '../services/inversify.config';

const USERNAME = "myUser";
const PASSWORS = "myPass"

fixture`Test structure`
    .page`http://localhost:4200/`
   

test('Login test', async t => {
    await homePage.login(USERNAME, PASSWORS);
    await t.expect(await homePage.lct_loginState.textContent).eql("loggedIn");
})

.before(async () => {
    // logout user before test start
    // do other stuff..
    await appBackendApi.callLogout(USERNAME);
});