import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactDOM from 'react-dom/client';
import App from './App';

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.SCALE
}
  
const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>
)
  
ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
