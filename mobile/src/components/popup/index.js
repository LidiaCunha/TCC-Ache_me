import {Modal, TouchableWithoutFeedback, StyleSheet, View} from 'react-native'

import React from 'react';

export class Popup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        } 
    }

    show = () => {
        this.setState({show:true})
    }

    close = () => {
        this.setState({show:false})
    }

    renderOutsideTouchable(onTouch){
        const view = <View style={{flex: 1, width: '100%'}}/>
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderContent = () => {
        const {content} = this.props
        return (
          <View>
            {content}
          </View>
        )
    }

    render() {
        let {show} = this.state
        const {onTouchOutside} = this.props

        return(
            <Modal 
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    height: '100%',
                    backgroundColor: '#000000AA',
                  }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        height: 'auto',
                        alignSelf: 'center',
                        position: 'relative',
                    }}>
                        {this.renderContent()}
                    </View>
                    {this.renderOutsideTouchable(onTouchOutside)}
                </View>

            </Modal>
        )
    }
}