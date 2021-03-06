import React,{ Fragment, useState} from 'react'
import ContactUs from '../../components/contactUs'
import '../../styles/contactUs/index.scss'
import Head from 'next/head'
import { connect } from 'react-redux'
import { Send_Feedback } from '$middleware'

export default  connect(state=>state) ((props) => {
    const {dispatch} = props
    const [isLoading, setLoading] = useState(false)

    const sendFeedback = (payload) => {
        setLoading(true)
        dispatch(Send_Feedback(payload))
    }
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
            </Head>
            <ContactUs isLoading={isLoading} sendFeedback={sendFeedback} />
        </Fragment>
    )
})