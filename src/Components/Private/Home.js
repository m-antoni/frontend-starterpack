import React from 'react'
import { connect } from 'react-redux';
import { logoutAlert } from '../../redux/actions/auth.actions';


function Home({ auth, logoutAlert }) {
    return (
        <div>
            <h4>Home</h4>
            <p>{auth.user_data.user}</p>
            <button onClick={() => logoutAlert()}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutAlert })(Home)
