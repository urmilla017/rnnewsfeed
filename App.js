/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';

import FeedPage from './src/components/FeedPage';
import Home from './src/components/Home';

// import { connect, Provider } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import fetchNewsAction from './src/actions/fetchNews';
// import {getNewsError, getNews, getNewsPending} from './src/reducers/index';
// import PropTypes from 'prop-types';
// import store from './src/store';


const GOOGLE = 'https://news.google.com/rss';
const CNN = 'http://rss.cnn.com/rss/edition_world.rss';
const GUARDIAN = 'http://www.theguardian.com/world/rss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.fetchData(GOOGLE, 'Google');
    this.fetchData(CNN, 'CNN');
    this.fetchData(GUARDIAN, 'Guardian');
  }

  fetchData(URL, feedName) {
    const targetURL = 'https://api.rss2json.com/v1/api.json?rss_url=';

    fetch(targetURL + URL)
      .then((response) => response.json())
      .then((responseData) => {
        // console.log('responseData' + JSON.stringify(responseData, null, 2));

        let jsonData = [];
        let respData = {};

        for (let i = 0; i < responseData.items.length; i++) {

          respData = {
            feedName: feedName,
            title: responseData.items[i].title,
            date: responseData.items[i].pubDate.substr(0, responseData.items[i].pubDate.indexOf(' ')),
            time: responseData.items[i].pubDate.substr(responseData.items[i].pubDate.indexOf(' ') + 1),
            desc: responseData.items[i].description,
            link: responseData.items[i].link
          }
          jsonData.push(respData);
        }

        const sortedObj = jsonData.sort((a, b) => {
          const aDate = new Date(a.date + ' ' + a.time)
          const bDate = new Date(b.date + ' ' + b.time)

          return bDate.getTime() - aDate.getTime()
        })

        this.setState({
          [feedName]: sortedObj
        });
      })
      .catch(error => console.log(error));
  }

  // Redux
  // constructor(props) {
  //   super(props);
  // }
  // componentWillMount() {
  //   const {fetchNews} = this.props;
  //   fetchNews(GOOGLE, 'Google');
  //   fetchNews(GUARDIAN, 'Guardian');
  //   fetchNews(CNN, 'CNN');
  // }


  render() {
    // const {news, error, pending} = this.props;
    return (
      <Router>
        <Stack key="root">
          <Scene key="Home" component={Home} title="RSS FEED" feedData={this.state} intial />
          <Scene key="FeedPage" component={FeedPage} title="Feed" />
        </Stack>
      </Router>
    );
  }
};

// Redux
// const mapStateToProps = state => ({
//   error: getNewsError(state),
//   news: getNews(state),
//   pending: getNewsPending(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchNews: fetchNewsAction
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
