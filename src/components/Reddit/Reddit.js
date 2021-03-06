import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import { getRedditArticles } from './../../ducks/redditReducer'
import { connect } from 'react-redux'

class Reddit extends Component {

  componentDidMount(){
    this.props.getRedditArticles();
  }

  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./redditLogo.png" alt="" style={styles.logo} />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return reduxState.reddit;
}

export default connect(mapStateToProps, { getRedditArticles })(Reddit)


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}