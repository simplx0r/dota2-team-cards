import { MiddlewareAPI, Dispatch, Action } from "redux";

export const consoleLogger = (state: MiddlewareAPI<any>) => {
  const logs: Action[] = [];
  return (next: Dispatch<Action>) => (action: Action) => {
    logs.push(action);
    console.log(logs);
    next(action);
  };
};

export default consoleLogger;
