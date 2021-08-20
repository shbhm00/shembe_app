import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, StyleSheet,
    Image
} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
export const screenWidth = Dimensions.get('window').width;
import Carousel, { Pagination } from 'react-native-snap-carousel';
import One from '../assets/One.png'
import Two from '../assets/Two.png'
import Three from '../assets/Three.png'
import Four from '../assets/Four.png'
import Five from '../assets/Five.png'
import Six from '../assets/Six.png'
import { vh, vw, normalize, flexvalue, screenHeight } from '../dimension/dimension'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignIn from './SignIn'
import Gradient from '../components/horizontal'
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            data: [{
                image: One, sizew: vw(423), sizeh: vh(250), title: 'App Overview',
                content: "This platform let you access church daily contentsalong as other features such volunteer to an event,Donate for various causes, search for services and members within the church."
            },
            {
                image: Two, title: 'My Preference', sizew: vw(205), sizeh: vh(234),
                content: "Fill more preference to get the exact feeds of your interest. Tell us more about yourself to get more rewards."
            },
            {
                image: Three, title: 'Home', sizew: vw(230), sizeh: vh(214),
                content: "Get to view the product, events, fundraising and promotional events based on your location and the preference selected by you."
            },
            {
                image: Four, title: 'Members', sizew: vw(254.5), sizeh: vh(213),
                content: "Be a part of us and get noticed by others for the services you provide"
            },
            {
                image: Five, title: 'Donation', sizew: vw(224), sizeh: vh(205),
                content: "A description on donation toward a branch and or an NGO, search member and services"
            },
            {
                image: Six, title: 'Chat', sizew: vw(205), sizeh: vh(205),
                content: "Lorem ipsum dolor sit amet, eum laudem libris id, no pro wisi epicuri. Debet persecuti eos ei."
            },
            ]
        }
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={item.image}
                        style={{ height: (item.sizeh), width: (item.sizew) }}
                    />
                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.main2}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.data}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })}
                        autoplay={true}
                        autoplayInterval={2000}
                    />
                </View>
                <View style={styles.pageContainer}>
                    <Pagination

                        dotsLength={6}
                        activeDotIndex={this.state.activeIndex}
                        containerStyle={styles.largeContainer}
                        dotStyle={styles.dot}
                        inactiveDotStyle={styles.inactiveDots}
                        inactiveDotOpacity={0.9}
                        inactiveDotScale={0.7}
                    />

                    <Text style={styles.titleText}>
                        {this.state.data[this.state.activeIndex].title}
                    </Text>
                    <Text style={styles.contentText}>
                        {this.state.data[this.state.activeIndex].content}
                    </Text>
                </View>
                <View style={styles.main1}>
                   {this.state.activeIndex==5?<TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Gradient
                            h={30}
                            w={80}
                            name="Sign In"
                            br={5}
                            mtp={20}
                        />
                    </TouchableOpacity>
                    
                :<TouchableOpacity onPress={()=>this.setState({activeIndex:5})}>
                <Gradient
                    h={30}
                    w={80}
                    name="Skip"
                    br={5}
                    mtp={20}
                />
            </TouchableOpacity>} 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        top: vh(97),
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageContainer: {
        flex: 0.8
    },
    dot: {
        width: vw(10),
        height: vh(10),
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: 'rgb(1, 167, 163)'
    },
    largeContainer: {
        marginTop: vh(80),
        paddingVertical: 0
    },
    titleText: {
        marginTop: vh(31.5),
        fontSize: normalize(20),
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    inactiveDots: {
        backgroundColor: 'rgb(217,226 ,226)',
        width: vw(10),
        height: vh(10),
    },
    contentText: {
        marginRight: vw(35),
        marginLeft: vw(39),
        marginTop: vh(19),
        fontSize: normalize(14),
        color: 'rgb(89,89,89)',
        lineHeight: vh(20)
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    main1: {
        flex: 0.3,
        bottom: vh(30),
        left: vw(270)
    },
    main2: {
        marginTop:vh(70),
        flex: 1
    }
})

