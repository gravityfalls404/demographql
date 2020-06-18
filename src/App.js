import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag'
import {graphql}  from 'react-apollo'
import {listBlogs} from './graphql/queries'
import { Query } from 'react-apollo'

// const LIST_BLOGS =`{
//         listBlogs {
//     items {
//       name
//       id
//       createdAt
//     }
//   }
// }
      
// `


class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       bloglist:[]
    }
  }

  getBlogList() {
    this.props.client.query({
      query: gql(listBlogs)
  }).then(({ data }) => {
    this.setState({
      bloglist : data.listBlogs
    })
      console.log(data);
  });
  
  }
  
  render(){
    return(
      // <Query query={gql(LIST_BLOGS)}>
      //   {({ loading, error, data }) => {
      //     if (loading) return <div>Fetching</div>
      //     if (error) return <div>Error</div>
    
      //     const bloglist = data.listBlogs.items
    
      //     return (
      //       <div>
      //         {bloglist.map(blog =><p>{blog}</p> ) }
      //       </div>
      //     )
      //   }}
      // </Query>
      <div>
        {
          this.state.bloglist
        }
      </div>
    )
  }
}

export default App
