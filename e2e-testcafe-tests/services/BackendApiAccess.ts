import { ClientFunction } from "testcafe";
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class BackendApiAccess {

    public async callLogout<T>(userame: string, returnPromise?: T): Promise<T> {
        const func = ClientFunction(_username => {
            return window["appComponentRef"].zone.run(() => {
                window["appComponentRef"].returnAuthenticationService().logout(_username)
            });
        });

        return await func(userame)
        .then(() => {
            console.log(`calling logout from angular service`);
            return returnPromise;
          })
          .catch((err) => {
            console.log(`fail calling logout, error: ${err.errMsg}`);
            return err; });
    }

    public async callLogin<T>(userame: string, password: string, returnPromise?: T): Promise<T> {
        
        // The same way implement Login or call other method from different service
        throw new Error("not implemented yet..");
    }
}
