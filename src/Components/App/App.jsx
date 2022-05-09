import {React, Component} from "react";
import AppHeader from "../AppHeader";
import PostAdd from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatus from "../PostStatusFilter/PostFilter";
import Search from '../Search'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    post: 'I am going to learn React JS',
                    Important: true,
                    like: false,
                    id: 1
                },
                {
                    post: 'Hello world',
                    Important: false,
                    like: false,
                    id: 2
                },
                {
                    post: 'Hello how are you',
                    Important: false,
                    like: false,
                    id: 3
                },
            ],
            term: '',
            filter: 'all'
        };

        this.id = 4
        this.deleteItem = this.deleteItem.bind(this);
        this.onAddPost = this.onAddPost.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this)

    }

    //Delete Item

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const newArry = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ]

            return {data: newArry}
        })
    }

    //Add post

    onAddPost(body) {
        this.setState(({data}) => {
            const newArry = {
                post: body,
                Important: false,
                id: this.id++
            }
            const result = [
                ...data,
                newArry
            ]
            return {data: result}
        })
    }

    //Toggle Important

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            console.log(index)
            const oldItem = data[index]

            const newItem = {
                ...oldItem,
                Important: !oldItem.Important
            }

            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1)
            ]

            return {
                data: newArr
            }
        })
    }
    
    //Toggle Like

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]

            const newItem = {
                ...oldItem,
                like: !oldItem.like
            }
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1)
            ]

            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0){
            return items
        }

        return items.filter(item => {
            return item.post.indexOf(term) > -1
        })
    }

    getPost = (term) => {
        this.setState({term})
    }

    //  Filter POSt

    filterPost = (items,filter) => {
        if (filter === "like"){
            return items.filter( item => item.like)
        } else {
            return items
        }
    }

    filterStatus = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data,term,filter} = this.state
        const likes = data.filter(item => item.like).length
        const posts = data.length

        const visblePost = this.filterPost(this.searchPost(data,term),filter)

        return (
            <div className="app container">
                <AppHeader likes={likes} posts={posts}/>
                <div className="search-panel d-flex">
                    <Search search={this.getPost}/>
                    <PostStatus filter={filter} filterStatus={this.filterStatus}/>
                </div>
                <PostList
                    post={visblePost}
                    deleteItem={this.deleteItem}
                    onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleImportant}
                />
                <PostAdd addPost={this.onAddPost}/>
            </div>
        );
    }
}

export default App;