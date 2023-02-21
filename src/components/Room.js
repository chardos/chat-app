import { useParams } from 'react-router-dom';
import { writeUserData } from '../firebase';

const Room = (props) => {
  const { roomId } = useParams();

  console.log('roomId', roomId);
  return (
    <div>
      <h1>This is room {roomId}</h1>
      <input />
      <button onClick={writeUserData}>Submit</button>
    </div>
  );
};

export default Room;
