import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types' 
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:20,
    category: 'general',
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize:PropTypes.number,
  }
  
  constructor(){
    super();
    console.log("Heloo");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5fcd9a636f3494aae6d5be31b0d1106&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
     }
  
async  componentDidMount(){
 let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5fcd9a636f3494aae6d5be31b0d1106&page=1&pageSize=${this.props.pageSize}`;
 this.setState({loading:true});
 let data= await fetch(url);
 let parsedData=await data.json();
 console.log(parsedData);
 this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
  }
// this.updateNews();
// }
   handlePrevClick=async()=>{
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5fcd9a636f3494aae6d5be31b0d1106&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json()
    // console.log(parsedData);
    //  this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    //  })
    this.setState({page: this.state.page -1});
    this.updateNews();

   }
  
  handleNextClick= async()=>{
    // if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}

    // else{
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a5fcd9a636f3494aae6d5be31b0d1106&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json()
    //  this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.artiles,
    //   loading:false
    //  })
    this.setState({page: this.state.page +1});
    this.updateNews();
  }
  

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">AB Times News ~ top news headlines</h1> 
      {this.state.loading &&<Spinner/>}
        <div className="row">
        {this.state.articles?.map((element)=>{
        return  <div className='col-md-4' key={element.url}>
        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} 
        imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
        })}
         <div>
          <div className='rew my-3 d-flex justify-content-around'>
  <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Prev</button>
  <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
  <h4 className='text-center'>to go to next page hit next 2x and prev 1x</h4>
  <p className='text-center'>(takes time to fetch news from api)</p>
  </div>
  </div>
        </div>
        
    )
  }
}

export default News
