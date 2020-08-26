import React, { PureComponent } from 'react'
import './style.scss'

import { connect } from 'react-redux'
import SocialMediaIcon from '../SocialMediaIcon/'

import { socialmedias } from '../../redux/socialmedias/selectors'

import { updateSocialMedias } from '../../redux/socialmedias/actions'

class SocialMediaIcons extends PureComponent {
  componentDidMount() {
    this.props.updateSocialMedias()
  }

  renderIcons() {
    const { data } = this.props
    return data.map((item) => {
      return (
        <SocialMediaIcon
          key={item._id}
          image={item.icon}
          alt={item.name}
          link={item.link}
        />
      )
    })
  }

  render() {
    return <div className="SocialMediaIcons">{this.renderIcons()}</div>
  }
}

const mapStateToProps = (state) => ({
  data: socialmedias(state),
})

const mapDispatchToProps = (dispatch) => ({
  updateSocialMedias: () => dispatch(updateSocialMedias()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaIcons)
