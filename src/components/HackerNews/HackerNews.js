import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import { requestArticles } from './../../ducks/hackerNewsReducer';
import { connect } from 'react-redux';

class HackerNews extends Component {


  componentDidMount(){
    this.props.requestArticles();
  }

  render() {
    console.log(this.props)
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps (reduxStoreState){
  console.log(reduxStoreState)
  return reduxStoreState.hackerNews;
} // in this function, we have access to redux store
// whatever is returned can be accessed via THIS.PROPS


// UNDER THE HOOD: this.props = {...this.props, ...reduxStoreState} (BE CAREFUL WITH KEY VALUE CONFLICTS)

export default connect(mapStateToProps, {requestArticles} )(HackerNews); // connect method 'hooks' us in the the PROVIDER (including subscribe and dispatch)
 // SECOND connect argument: an action creator that will also get added to this.props

const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}