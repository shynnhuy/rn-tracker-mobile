import { useDispatch } from "react-redux";
import { useLocationContext } from "../context/location";
import { createTrack } from "../features/track";

export default () => {
  const dispatch = useDispatch();

  const {
    state: { name, locations },
    reset,
  } = useLocationContext();

  const saveTrack = () => {
    if (name) {
      dispatch(createTrack(name, locations));
      reset();
    }
  };

  return [saveTrack];
};
