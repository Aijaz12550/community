import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/configureStore";
import { withRouter } from "next/router";
import Signin from "./signIn";
import Viewresidents from "./dashboard/[user]/[role].js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default withRouter(
  withRedux(initStore, { debug: true })(
    class MyApp extends App {
      state = {
        ComponentTorender: this.props.Component,
      };
      // static async getInitialProps({ Component, ctx }) {
      //   return {
      //     pageProps: {
      //       ...(Component.getInitialProps
      //         ? await Component.getInitialProps(ctx)
      //         : {}),
      //     },
      //   };
      // }

      componentDidUpdate(prevProps) {
        const { store, router } = this.props;
        let user = store?.getState()?.AuthReducer?.user;
        user.access_token = true
        if (
          prevProps.Component != this.props.Component &&
          user.access_token &&
          !router.pathname.startsWith("/signIn")
        ) {
          this.setState({
            ComponentTorender: this.props.Component,
          });
        } else if (
          !user.access_token &&
          router.pathname.startsWith("/signIn") &&
          prevProps.Component != this.props.Component
        ) {
          this.setState({
            ComponentTorender: Signin,
          });
        }

        if (
          router.pathname.startsWith("/signIn") &&
          !user.access_token &&
          prevProps.Component != this.props.Component
        ) {
          return false;
        } else if (
          !router.pathname.startsWith("/signIn") &&
          !user.access_token &&
          prevProps.Component != this.props.Component
        ) {
          this.setState(
            {
              ComponentTorender: Signin,
            },
            () => {
              router.push("/signIn");
            }
          );
        } else if (
          router.pathname.startsWith("/signIn") &&
          user.access_token &&
          prevProps.Component != this.props.Component
        ) {
          this.setState(
            {
              ComponentTorender: Viewresidents,
            },
            () => {
              router.push(
                "/dashboard/[user]/[role]",
                `/dashboard/user_role/view_residents`
              );
            }
          );
        }
      }

      componentDidMount() {
        const { store, router } = this.props;
        let user = store?.getState()?.AuthReducer?.user;
        if (router.pathname.startsWith("/signIn") && !user.access_token) {
          return false;
        } else if (
          !router.pathname.startsWith("/signIn") &&
          !user.access_token
        ) {
          this.setState(
            {
              ComponentTorender: Signin,
            },
            () => {
              router.push("/signIn");
            }
          );
        } else if (router.pathname.startsWith("/signIn") && user.access_token) {
          this.setState(
            {
              ComponentTorender: Viewresidents,
            },
            () => {
              router.push(
                "/dashboard/[user]/[role]",
                `/dashboard/user_role/view_residents`
              );
            }
          );
        }
      }
      render() {
        const { store } = this.props;
        let { ComponentTorender } = this.state;

        return (
          <Provider store={store}>
            <ToastContainer />
            <ComponentTorender />
          </Provider>
        );
      }
    }
  )
);
