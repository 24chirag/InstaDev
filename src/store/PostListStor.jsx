const { createContext } = require("react");

const PostList = createContext({});

const PostListProvider = () => {
  return PostList;
};
export default PostListProvider;
