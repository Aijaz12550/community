import React , {Fragment} from 'react'
import AccountVerified from '../../components/invitationCode/accountVrified'
import "../../styles/invitaionCode/index.scss";
import { connect } from 'react-redux';

export default connect(state => state)(props => {
    return(
        <Fragment>
            <AccountVerified />
        </Fragment>
    )
})