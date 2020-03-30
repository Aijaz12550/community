import { Provider } from 'react-redux'
import App,{ Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/configureStore'

export default withRedux(initStore, {debug:true})(
    class MyApp extends App {
        static async getInitialProps({Component,ctx}){
            return {
                pageProps : {
                   name:'Aijaz'
                }
            }
        }
        render() {
            const { Component, pageProps, store } = this.props
            return (
                <Container>
                    <Provider store={store} >
                        <Component data={'hello'} {...pageProps} />
                    </Provider>
                </Container>
            )
        }
    }
)