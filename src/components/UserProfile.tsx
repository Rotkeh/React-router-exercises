import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  return (
    <div>
      <h1>user id: {userId}</h1>
    </div>
  );
}
