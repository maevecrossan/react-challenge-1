import React, {Component} from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import css from './css/Content.module.css';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';

class Content extends Component {
        constructor(props) {
            super(props);

            this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [], //savedPosts will be used to store the full API GET request data so that we can return to the original array after filtering our results
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>
                        My Photos
                    </h1>

                    <form>
                        <label htmlFor='searchInput'>
                            Search
                        </label>

                        <input 
                        type='search'
                        id='searchInput' 
                        placeholder='By Author' 
                        onChange={(e) => this.handleChange(e)}
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                    this.state.isLoaded ?
                        <PostItemAPI savedPosts={this.state.posts} />
                    :<Loader />
                    }
                </div>
                
            </div>
        )
    }
}

export default Content;
