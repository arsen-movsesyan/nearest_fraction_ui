import {serverHost, serverPort} from "../environments/environment";

export const backendServer = serverHost + serverPort;

export const ALGORITHMS_URL = backendServer + '/algorithms';
