import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag'
import {graphql}  from 'react-apollo'
// import {listBlogs} from './graphql/queries'
import { Query } from 'react-apollo'

const listBlogs =`
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      
    }
  }
`;


class App extends Component{
  constructor(props) {
    super(props)
  
   
  }

  
  render(){
    return(
      <div>
        <h2>HI</h2>
        {
          this.props.client.query({
            query: gql(listBlogs)
          }).then(({ data }) => {
            console.log(data) 
          }
        )
        }
      </div>
      
      
    )
  }
}

export default App
