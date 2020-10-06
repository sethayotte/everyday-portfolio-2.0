import React from "react";
import { NavMenu } from "./NavComponent";
import Today from "./TodayComponent";
import Portfolio from "./PortfolioComponent";
import Profile from './ProfileComponent';
import AddNew from './AddNewComponent';
// import finnhub from 'finnhub';
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import AddNewForm from "./AddNewPositionFormComponent";

const { Content, Sider } = Layout;

const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "btmgh5v48v6uocf2o8mg" // Replace this

const symbolCall = "https://finnhub.io/api/v1/quote?symbol=" + "AAPL" + "&token=btmgh5v48v6uocf2o8mg";

class Main extends React.Component {

  state = {
    loading: true,
    currentPrice: null,
    marketList: [],
    id: null,
    posType: null,
    symbol: null,
    numShares: null
  };

async componentDidMount() {
  const response1 = await fetch(symbolCall);
  const priceQuote = await response1.json();
  this.setState({ currentPrice: priceQuote.c, loading: false });
  console.log(this.state.currentPrice);

  const marketCall = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=btmgh5v48v6uocf2o8mg";
  const response2= await fetch(marketCall);
  const market = await response2.json();
  const marketArr = market.map(m => m.symbol);
  this.setState({ marketList: marketArr });
  console.log(this.state.marketList);

  const response3 = await fetch('http://localhost:3001/user-positions');
  const listContent = await response3.json();
  const id = listContent.map(id => id.id)
  const groups = listContent.map(label => label.posType);
  const ticker = listContent.map(ticker => ticker.symbolInput);
  const shares = listContent.map(num => num.numShares);
  this.setState({ id: id, posType: groups, symbol: ticker, numShares: shares });
  console.log(this.state.posType);

}


  render() {
    return (
      <React.Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <NavMenu />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "25px 15px" }}>
              <Switch>
                <Route path="/today" component={Today} />
                <Route exact path="/portfolio" render={(props) => ( <Portfolio {...props} state={this.state} /> )} />
                <Route exact path="/add-new-form" render={(props) => ( <AddNewForm {...props} state={this.state} /> )} />
                <Route exact path="/add-new" render={(props) => ( <AddNew {...props} state={this.state} /> )} />
                <Route exact path="/profile" component={Profile} />
                <Redirect to="/" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Main;
