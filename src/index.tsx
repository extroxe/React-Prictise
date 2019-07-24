import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
// import { useStrict } from 'mobx';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
// 定义需要使用到的store来进行数据状态的管理
import {
    TokenStore,
    AuthStore,
} from './stores';
import registerServiceWorker from './registerServiceWorker';
import Sign from './Containers/Sign';
import './index.css';
import Container from './Containers/Container';
// 引入Echarts

// 开启mobx的严格模式，规范数据修改操作只能在action中进行
// useStrict(true);

const browserHistory = createBrowserHistory();
const routerStore = new RouterStore();
// 同步路由与mobx的数据状态
const history = syncHistoryWithStore(browserHistory, routerStore);
const rootStore = {
    token: new TokenStore(),
    auth: new AuthStore(),
    router: routerStore
};

ReactDOM.render(
    <Provider {...rootStore} >
        {/*<Root>*/}
        <Router history={history}>
            <Switch>
                {/*<IndexRoute component={Container}/>*/}
                <Route
                    path="/root"
                    component={Sign}/>
                <Route
                    path="/"
                    component={Container}
                />
            </Switch>
        </Router>
        {/*</Root>*/}
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/*import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();*/
