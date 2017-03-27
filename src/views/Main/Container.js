import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'
import List from './Home/List'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
          </h2>
          {children}
        </Jumbotron>
        <div className="container">
          <List userId={this.props.route.auth.getProfile().user_id.split('|')[1]} />
        </div>
      </div>
    )
  }
}

export default Container;
