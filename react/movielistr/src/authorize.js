import React from 'react'
import { Redirect } from 'react-router-dom'

                    // HomeContainer
function authorize(RenderedComponent, otherProps) {
  return class extends React.Component {


    render() {
      // this.props => beef="steak"


      if (!localStorage.getItem('movieToken') && this.props.location.pathname == "/") {
        return (
          <Redirect to="/login"/>
        )
      } else if ((localStorage.getItem('movieToken')) && this.props.location.pathname== "/login" ){
        return (
          <Redirect to="/"/>
        )
      } else {
        return <RenderedComponent {...this.props} {...otherProps}/>
      }

    }

  }
}

export default authorize
