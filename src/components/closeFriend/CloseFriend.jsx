import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendimg" src={user.profilePicture} alt="" />
      <span className="sidebarFrindName">{user.username}</span>
    </li>
  );
}
