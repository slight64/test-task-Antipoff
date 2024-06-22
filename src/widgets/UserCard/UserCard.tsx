import { Link, useLocation } from 'react-router-dom';
import FavoriteBtn from '../../shared/ui/FavoriteBtn/FavoriteBtn';

interface UserCardProps {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
}

function UserCard({ id, avatar, firstName, lastName }: UserCardProps) {
  const location = useLocation();
  return (
    <div className="main__user-card">
      <img className="main__avatar" src={avatar} alt={firstName} />
      <Link
        to={`/profile/${id}`}
        state={{ from: location.pathname }}
        className="main__user-name"
      >{`${firstName} ${lastName}`}</Link>
      <div className="main__card-favorite">
        <FavoriteBtn />
      </div>
    </div>
  );
}

export default UserCard;
