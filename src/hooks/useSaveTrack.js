import { useLocationContext } from "../context/location";
import { useTrackContext } from "../context/track";

export default () => {
  const { createTrack } = useTrackContext();
  const {
    state: { name, locations },
    reset,
  } = useLocationContext();

  const saveTrack = async () => {
    if (name) {
      await createTrack(name, locations);
      reset();
    }
  };

  return [saveTrack];
};
