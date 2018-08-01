import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import { ConnectedRouter } from 'connected-next-router';
import { configureStore } from '../src/store/configure-store'
import { fetchAssets } from '../src/actions';

class HomePage extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    store.dispatch(fetchAssets());
    return (
      <Container>
        <Provider store={store}>
          <ConnectedRouter>
            <Component { ...pageProps } />
          </ConnectedRouter>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(HomePage)
