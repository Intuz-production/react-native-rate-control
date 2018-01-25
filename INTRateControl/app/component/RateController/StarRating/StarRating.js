// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, {Component} from 'react';
import {View, StyleSheet, Image, PropTypes} from 'react-native';

import styles from './styles'

class StarRating extends Component {
  /**
   * Default props for
   * setting max star value,
   * default rating value
   */
  static defaultProps = {
    maxStars: 5,
    rating: 0,
    starSize: -1,
    interitemSpacing: 0,
    valueChanged: (index) => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      maxStars: this.props.maxStars,
      rating: this.props.rating,
      firstImageLayout: null,
      starSize: this.props.starSize
    };
    this._onLayout = this._onLayout.bind(this);
    this._onResponderMove = this._onResponderMove.bind(this);
    this._onResponderGrant = this._onResponderGrant.bind(this);
  }

  render() {
    var starArray = [];
    var imageSource = null;
    for (var i = 0; i < this.state.maxStars; i++) {
      if (i < this.state.rating) {
        imageSource = this.props.selectStar;
      } else {
        imageSource = this.props.unSelectStar;
      }

      var onLayoutFunc = null;
      if (i === 0) {
        onLayoutFunc = this._onLayout;
      }

      var styleArray = [];
      if (i !== this.state.maxStars - 1) {
        styleArray.push({marginRight: this.props.interitemSpacing});
      }
      if (this.state.starSize > 0) {
        styleArray.push({width: this.state.starSize, height: this.state.starSize});
      }

      //push Image
      starArray.push(<Image key={i} source={imageSource} style={styleArray} onLayout={onLayoutFunc}/>);
    }
    return (
      <View style={styles.container} onStartShouldSetResponder={this._onStartShouldSetResponder} onMoveShouldSetResponder={this._onMoveShouldSetResponder} onResponderGrant={this._onResponderGrant} onResponderMove={this._onResponderMove}>
        {starArray}
      </View>
    )
  }

  _onLayout(layoutInfo) {
    var starSize = layoutInfo.nativeEvent.layout.width;
    if (this.state.starSize > 0) {
      this.setState({containerLayout: layoutInfo.nativeEvent.layout});
    } else {
      this.setState({containerLayout: layoutInfo.nativeEvent.layout, starSize: starSize});
    }
  }

  _onStartShouldSetResponder(evt) {
    return true;
  }

  _onMoveShouldSetResponder(evt) {
    return true;
  }

  _onResponderGrant(evt) {
    this._updateChangeValue(evt);
  }

  _onResponderMove(evt) {
    this._updateChangeValue(evt);
  }

  _updateChangeValue(evt) {
    var starWidth = this.state.starSize + this.props.interitemSpacing;
    var rating = Math.ceil((evt.nativeEvent.pageX - this.state.containerLayout.x) / starWidth);
    if (rating < 0) {
      rating = 0;
    } else if (rating > this.state.maxStars) {
      rating = this.state.maxStars;
    }
    this.setState({rating: rating});
    //value changed
    this.props.valueChanged(rating);
  }
};

export default StarRating