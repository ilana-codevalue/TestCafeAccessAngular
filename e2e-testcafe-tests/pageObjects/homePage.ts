import { injectable } from "inversify";
import { Selector, t } from "testcafe";
import "reflect-metadata";

@injectable()
export class HomePage {

    lct_pageTitle: Selector;
    lct_username: Selector;
    lct_password: Selector;
    lct_loginButton: Selector;
    lct_logoutButton: Selector;
    lct_loginState: Selector;

    constructor() {

        this.lct_pageTitle = Selector("#pageTitle");
        this.lct_username = Selector("#username");
        this.lct_password = Selector("#password");
        this.lct_loginButton = Selector("#loginButton");
        this.lct_logoutButton = Selector("#logoutButton");
        this.lct_loginState = Selector("#loginState");
    }

    async login(username: string, password: string) {
        console.log(`login user ${username} from UI`)
        await t
            .typeText(this.lct_username, username)
            .typeText(this.lct_password, password)
            .click(this.lct_loginButton);
    }

    async logout(username: string) {
        console.log(`logout user: ${username}`)
        t.click(this.lct_logoutButton);
    }
}