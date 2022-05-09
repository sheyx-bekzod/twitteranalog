import './AppHeader.css'

function AppHeader({posts,likes}) {
  return (
    <div className="app-header d-flex">
      <h1>Bekzod</h1>
      <h4>{posts} post, {likes} like</h4>
    </div>
  );
}

export default AppHeader;