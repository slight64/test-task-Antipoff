import FavoriteBtn from "../../shared/ui/FavoriteBtn";

interface UserCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
}

function UserCard({ avatar, firstName, lastName }: UserCardProps) {
  return (
    <div className="main__user-card">
      <img className="main__avatar" src={avatar} alt={firstName} />
      <button className="main__user-name">{`${firstName} ${lastName}`}</button>
      <div className="main__card-favorite">
        <FavoriteBtn />
      </div>
    </div>
  );
}

export default UserCard;
