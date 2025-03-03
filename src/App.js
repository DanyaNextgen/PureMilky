import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { element: _jsx(Home, {}), path: "/" }), _jsx(Route, { element: _jsx(Product, {}), path: "product" })] }) }));
}
export default App;
