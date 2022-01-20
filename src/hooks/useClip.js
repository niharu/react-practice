import { useCallback, useState } from "react"
import { ulid } from "ulid";
import * as ClipAPI from "../api/ClipAPI";

export const useClip = () => {
  const [clips, setClips] = useState([]);

  const [filteredClips, setFilteredClips] = useState([]);

  const searchClips = useCallback((category) => {
    ClipAPI.searchClips(category).then((resultClips) => {
      setClips([...resultClips].reverse());
      setFilteredClips([...resultClips].reverse());
    });
  },[]);

  const addClip = async (category, command, description)  => {
    const newClip = {
      id: ulid(),
      category : category,
      command: command,
      description: description
    };

    const addClip = await ClipAPI.addClip(newClip);
    setClips([addClip, ...clips]);
  };

  const filterClips = (searchWord) => {
    setFilteredClips(clips.filter((clip) => {
      return clip.command.search(searchWord) !== -1;
    }));
  };

  return {
    clips,
    searchClips,
    addClip,
    filterClips,
    filteredClips
  };
};