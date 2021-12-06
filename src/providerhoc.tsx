import { ComponentType, FC } from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";

function storeProvided<T>(Comp: ComponentType<T>) {
  const resultComponent: FC<T> = (props) => (
    <Provider store={store}>
      <Comp {...props} />
    </Provider>
  );
  return resultComponent;
}
export default storeProvided;
