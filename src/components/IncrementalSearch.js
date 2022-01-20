import { Input } from "@chakra-ui/input";

export const IncrementalSearch = ({ placeholder, searchWord, handleChangeSearchWord }) => {
  return (
    <Input mb="4" type="text" value={searchWord} placeholder={placeholder} onChange={handleChangeSearchWord} />
  );
}