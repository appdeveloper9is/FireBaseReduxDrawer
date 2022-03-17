import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import { Tile } from 'react-native-elements';

const VideosScreen =({navigation})=>{

    const RednerContent =()=>{

        return(

            <View>
                <Tile
                    imageSrc={{uri:'https://picsum.photos/200/300'}}
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    icon={{ name:'play-circle',type:'font-awesome',color:'#fff',size:40}}
                    containerStyle={{paddingHorizontal:10, paddingVertical:10,shadowColor:'rgba(0,0,0,.2)'}}
                    titleStyle={{fontSize:15, textAlign:"left"}}
                    contentContainerStyle={{  backgroundColor:'#fff',
                        borderWidth:1,
                        borderColor:'#e1e8ee',
                        shadowColor:'rgba(0,0,0,.2)'
                    }}
                    onPress={()=> navigation.navigate('Video_screen')}
                />
            </View>
        )
    }

    return(

        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <RednerContent/>
            </ScrollView>
        </SafeAreaView>

    )

}


export default VideosScreen
