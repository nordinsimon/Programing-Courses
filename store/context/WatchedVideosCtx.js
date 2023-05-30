import { createContext, useState } from "react";

export const WatchedVideosCtx = createContext({
  ids: [],
  addWatchedVideo: () => {},
  removeWatchedVideo: () => {},
});

const WatchedVideosCtxProvider = ({ children }) => {
  const [watchedVideoIds, setWatchedVideoIds] = useState([]);
  const addWatchedVideo = (id) => {
    setWatchedVideoIds((prev) => [...prev, id]);
  };
  const removeWatchedVideo = (id) => {
    setWatchedVideoIds((prev) => prev.filter((item) => item !== id));
  };
  const value = {
    ids: watchedVideoIds,
    addWatchedVideo,
    removeWatchedVideo,
  };
  return (
    <WatchedVideosCtx.Provider value={value}>
      {children}
    </WatchedVideosCtx.Provider>
  );
};

export default WatchedVideosCtxProvider;
