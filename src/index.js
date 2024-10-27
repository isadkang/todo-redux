import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import store from "./redux/store";
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)