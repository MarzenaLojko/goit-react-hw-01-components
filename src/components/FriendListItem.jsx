import FriendListItemCSS from './friendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={FriendListItemCSS.item}>
            <span
                className={isOnline
                    ? FriendListItemCSS.active
                    : FriendListItemCSS.status}
            >
            </span>
            <img
                className={FriendListItemCSS.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={FriendListItemCSS.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};