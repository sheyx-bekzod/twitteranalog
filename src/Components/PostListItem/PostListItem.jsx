import {React,Component} from 'react';
import './PostLIstItem.css'

class  PostListItem extends Component {
  render() { 
    const {post,deleteItem,like,Important,onToggleImportant,onToggleLiked} = this.props

    let classItem = "app-list-item-label"
    let iconClass = "fa fa-star fs-5 "
    let iconHeart = 'fa fa-heart fs-5'

    if (Important){
      classItem += ' important'
    }
    else{
      iconClass += " important"
    }
    if (like){
      iconHeart += " liked"
    } else {
      iconHeart += " headen_item"
    }

    return (
      <div className="app-list-item d-flex justify-content-between my-3">
      <span className={classItem} onClick={onToggleLiked}>{post}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm " onClick={onToggleImportant}>
            <i className={iconClass}></i>
          </button>
          <button 
            className="btn-trash btn-sm mx-2" 
            onClick={deleteItem}
          >
            <i className="fa fa-trash text-danger fs-5"></i>
          </button>
          <i className={iconHeart}></i>
        </div>
      </div>
    );
  }
}
 
export default PostListItem;