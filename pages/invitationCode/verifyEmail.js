import VerifyEmail from '../../components/invitationCode/verifyEmail'
import '../../styles/invitaionCode/index.scss';
import React,{Fragment, useState} from 'react'
import { connect } from 'react-redux';
import Head from 'next/head';

export default connect(state => state)(props => {

    const __reSendVerificationEmail = (email) => {
        console.log(' resend email')
    }
    return(
        <Fragment>
            <Head>
                <title>
                    Verify Email
                </title>
            </Head>

            <VerifyEmail />
        </Fragment>
    )
})