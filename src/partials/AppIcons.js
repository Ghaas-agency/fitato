import React from 'react'
import { withPrefix } from 'gatsby'

const AppIcons = props => (
  <div className="partial-app-icons">
    <a href="https://play.google.com/store/apps/details?id=fit.fitato.health&hl=en" 
      target="_blank" 
      rel="noopener noreferrer"
      className={(props.btnClass) ? props.btnClass + '-android' : ''}
    >
      <img src={withPrefix('/static/icons/google-play-store.svg')} className="partial-app-icon" alt="fitato on google play store" />
    </a>
    <a href="https://itunes.apple.com/in/app/fitato/id1300323768" 
      target="_blank" 
      rel="noopener noreferrer"
      className={(props.btnClass) ? props.btnClass + '-ios' : ''}
    >
      <img src={withPrefix('/static/icons/apple-app-store.svg')} className="partial-app-icon" alt="fitato on app store" />
    </a>
  </div>
)

export default AppIcons
