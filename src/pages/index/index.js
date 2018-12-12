import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="index">
        <View className='logo'>
          <Image src='http://littlebug.oss-cn-beijing.aliyuncs.com/www.littlebug.vip/favicon.ico' />
        </View>
        <Text>Hello Little Bug!</Text>
      </View>
    )
  }
}

