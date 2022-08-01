import "reflect-metadata";
import { Container } from "inversify";
import { HomePage } from '../pageObjects/homePage';
import { BackendApiAccess } from './BackendApiAccess';

const container = new Container();
container.bind<HomePage>(HomePage).toSelf().inSingletonScope();
container.bind<BackendApiAccess>(BackendApiAccess).toSelf().inSingletonScope();

export const homePage = container.get(HomePage);
export const appBackendApi = container.get(BackendApiAccess);
