import React from 'react';
import ReactDOM from 'react-dom';

// import hooks from './utils/mockHooks';

// 挂在根组件
// import App from './views/useState';
import App from './views/useEffect';
// import App from './views/useRef';
// import App from './views/useMemo';
// import App from './views/useContext';
// import App from './views/useReducer';


function RenderUI(){
    ReactDOM.render(<App />, document.getElementById('root'));
}

RenderUI();

// 在Tick上挂在render方法
// hooks.Tick.render = RenderUI;