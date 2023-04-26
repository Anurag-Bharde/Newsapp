import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, newsurl,author,date} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" >
  <img src={!imageUrl?"https://i.ytimg.com/vi/7ZE6DAL0aCk/maxresdefault.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'> <small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
 
</div>
      </div>
    )
  }
}

export default NewsItem
