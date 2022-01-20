import { List } from "@chakra-ui/react";
import { Clip } from "./Clip";

export const Clips = ({clips}) => {
  return (
    <>
      {clips.length !== 0 && (
        <>
          <List w="full" mt="3" spacing={-8}>
            {clips.map((clip) => (
              <Clip
                key={clip.id}
                clip={clip}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};