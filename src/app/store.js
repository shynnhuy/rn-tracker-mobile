import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";
import { api } from "./api";

const persistConfig = {
  key: "@@root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api })))
  );
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextRootReducer = require("./reducer").rootReducer;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
};
