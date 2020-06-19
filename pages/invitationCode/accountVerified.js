import React , {Fragment,useEffect} from 'react'
import AccountVerified from '../../components/invitationCode/accountVrified'
import "../../styles/invitaionCode/index.scss";
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

export default connect(state => state)(props => {
    let router = useRouter()
    let _condition_ = false

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/dashboard/user_role/view_residents')
        },3000)
    },_condition_)
    return(
        <Fragment>
            <AccountVerified />
        </Fragment>
    )
})