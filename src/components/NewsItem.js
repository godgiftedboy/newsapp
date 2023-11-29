import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt,source } = this.props;
    return (
      <div>
        
        <div className="card" > 
        <div style={{display: 'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>

        <span className="badge rounded-pill bg-danger" >{source}</span>
        </div>

          <img src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By: {author?author:"Unknown author"}</small></p>
            <p className="card-text"><small className="text-muted">Published at: {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-dark">
              Read more
            </a>
          </div>


        </div>
      </div>
    );
  }
}

export default NewsItem;
