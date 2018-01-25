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
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Animated
} from 'react-native';

import styles from './styles'
import StarRating from './StarRating';

class RateController extends Component {
    /**
     * Default props
     */
    static defaultProps = {   
        backgroundColor :"white",
        titleText:"Your Ratings",
        submitText:"Submit",
        placeHolderText:"Enter your comment here..."
    };


    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            comment:""
        };
    }

    /**
     * On value changes of rating star
     * @param {*Rate value} rating 
     */
    _valueChanged(rating) {
        console.log(rating);
        this.setState({stars: rating})
    }

    /**
     * Button submit pressed
     */
    btnSubmitPress() {
        if (this.state.stars == 0) {
            console.log("Please select rating");
        } else if(this.state.comment.length == 0){
            console.log("Please add comment");
        } else {
            this.props.callbackAfterRate(this.state.stars, this.state.comment, this.props.otherParamsToSend);
        }
    }

    /**
     * Button close pressed
     */
    btnClosePress(){
        this.props.callbackAfterRate(0, "", this.props.otherParamsToSend);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
                <TouchableOpacity style={styles.btnClose} activeOpacity={0.6} onPress={() => this.btnClosePress()}>
                        <Image source={require('./images/ic_delete.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>{this.props.titleText}</Text>
                    <View style={styles.starView}>
                        <StarRating maxStars={5} rating={this.state.stars} selectStar={require('./images/ic_star_o.png')} unSelectStar={require('./images/ic_star_gray.png')} valueChanged={this._valueChanged.bind(this)} interitemSpacing={5}/>
                        <View style={styles.inputView}>
                            <TextInput style={styles.inputText} placeholder={this.props.placeHolderText}
                            multiline={true} placeholderTextColor={'#3c3c3c'} keyboardType={'default'} autoCorrect={false} underlineColorAndroid={'transparent'} onChangeText={(comment) => this.setState({comment})} value={this.state.comment}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.btnCancel} activeOpacity={0.6} onPress={() => this.btnSubmitPress()}>
                            <Text style={styles.textCancel} numberOfLines={1}>
                               {this.props.submitText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default RateController
