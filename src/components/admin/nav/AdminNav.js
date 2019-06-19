import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import {firebase} from '../../../firebase';

const AdminNav = (props) => {
    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Add Match',
            linkTo: '/admin_matches/add_match'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        },
        {
            title: 'Add Players',
            linkTo: '/admin_players/add_players'
        },
    ]

    const style = {
        color: '#fff',
        fontWeight: '300',
        borderBottom: '1px solid #353535'
    }

    const renderItems = () => (
        links.map(link => (
            <Link key={link.title} to={link.linkTo}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    );

    const logoutHandler = () => {
        firebase.auth().signOut().then(() => {
            console.log('logout successful');
        }, (error) => {
            console.error('Error logging out', error);
        });
    };

    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={() => logoutHandler()}>Logout</ListItem>
        </div>
    );
};

export default AdminNav;