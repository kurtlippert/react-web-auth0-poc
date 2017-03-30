import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'
import List from './Home/List'
import Details from './Home/Details'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props, context) {
    super()

    this.state = {
      potatoes: []
    }
  }

  componentDidMount() {
    fetch('https://bvpoc1.herokuapp.com/api/v1/item/', 
      {
          method: 'GET',
          headers: { authorization: 'bearer ' + this.props.route.auth.getToken() }
      }).then(response => {
          response.json().then(json => {
            this.setState({
              potatoes: json
            })
          })
      })
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    const currentPath = this.props.location.pathname
    return (
      <div>
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
          </h2>
          { children }
        </Jumbotron>
          <div className="container">
            { currentPath === "/home" &&
              <List potatoes={this.state.potatoes} />
            }
            { currentPath.includes("home/details/") &&
              <Details potatoes={this.state.potatoes.filter(p => p.id == `${currentPath.match(/home\/details\/\d/)}`.substr(-1))}  />
            }
          </div>
      </div>
    )
  }
}

export default Container;
