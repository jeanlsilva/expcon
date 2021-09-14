import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Pricing from '../pages/Pricing';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/payment" component={Payment} />
    </Switch>
)

export default Routes;