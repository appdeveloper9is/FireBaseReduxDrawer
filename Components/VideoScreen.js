import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import YouTube from "react-native-youtube";
import {height} from "../Dimensions";
import {check} from "./ArticleScreen";


const VideoScreen =()=>{

    return(

        <SafeAreaView>
           <View>
               <YouTube
                   apiKey="AIzaSyCCn-f3qw2j65uvqb9bcxg2T-26XpDWq70"
                   videoId="Zfsg3oiPXGc"
                   play={false}
                   onReady={ e => console.log('ready')}
                   onChangeState={ e => console.log(e)}
                   onError={error => console.log(error)}

                   style={{alignSelf:'stretch',height:height/3}}
               />

               <View style={{}}>
                   <Text style={{fontSize: 20, fontWeight: "bold"}}>Lorem ipsum dolor sit amet, consectetur
                       adipiscing elit, sed do </Text>
               </View>

               <Text>
                   {check.replace(/<p>/g,"").replace(/<\/p>/g,"\n\n")}

               </Text>
           </View>
        </SafeAreaView>
    )

}


export default VideoScreen
