import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/configureStore";
import { register } from "next-offline/runtime";
import { withRouter } from "next/router";
import SignIn from "./signIn";
import "../styles/sidebar/index.scss"
import "../styles/assets/css/dashboard.css"

export default withRouter(
  withRedux(initStore, { debug: true })(
    class MyApp extends App {
      // static async getInitialProps({ Component, ctx }) {
      //   return {
      //     pageProps: {
      //       ...(Component.getInitialProps
      //         ? await Component.getInitialProps(ctx)
      //         : {})
      //     }
      //   };
      // }
      componentDidMount() {
        register();
      }
      render() {
        const { Component, pageProps, store, stars, ctx, router } = this.props;

        let user = store?.getState()?.AuthReducer?.user;
        console.log("user", user);

        if (user.access_token)
          return (
            <Provider store={store}>
              <Component store={store.getState()} stars={stars} ctx={ctx} />
            </Provider>
          );
        else {
          return (
            <Provider store={store}>
              <SignIn store={store.getState()} stars={stars} ctx={ctx} />
            </Provider>
          );
        }
      }
    }
  )
);
