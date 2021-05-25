import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Login from '../src/components/views/Login/Login';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';
import HomePage from '../src/components/views/HomePage/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import NewBooking from '../src/components/views/NewBooking/NewBooking';
import BookingInfo from '../src/components/views/BookingInfo/BookingInfo';
import NewEvent from '../src/components/views/NewEvent/NewEvent';
import EventInfo from '../src/components/views/EventInfo/EventInfo';
import NewOrder from '../src/components/views/NewOrder/NewOrder';
import OrderInfo from '../src/components/views/OrderInfo/OrderInfo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
    secondary: {main: '#11cb5f'},
  },
});


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route component={NewBooking} exact path={process.env.PUBLIC_URL + '/tables/booking/new'} />
              <Route component={BookingInfo} exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} />
              <Route component={NewEvent} exact path={process.env.PUBLIC_URL + '/tables/events/new'} />
              <Route component={EventInfo} exact path={process.env.PUBLIC_URL + '/tables/events/:id'} />
              <Route compoent={NewOrder} exact path={process.env.PUBLIC_URL + '/waiter/order/new'} />
              <Route component={OrderInfo} exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} />          
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout> 
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
