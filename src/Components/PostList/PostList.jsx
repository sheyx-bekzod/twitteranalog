import PostListItem from '../PostListItem/PostListItem'
import "./PostList.css"

function PostList({post,deleteItem,onToggleImportant,onToggleLiked}) {
  const elements = post.map((data) => {
    return (
        <PostListItem
            key={data.id}
            {...data}
            deleteItem={() => deleteItem(data.id)}
            onToggleLiked = {() => onToggleLiked(data.id)}
            onToggleImportant = {() => onToggleImportant(data.id)}
        />
    )
  })

  return (
    <ul className="post-list">
      {elements}
    </ul>
  );
}

export default PostList;