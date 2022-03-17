import React from "react";
import {ActivityIndicator, Image, SafeAreaView, Text, View} from "react-native";
import {height,width} from "../Dimensions";

export const check = `<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p><p>aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>`;

const ArticleScreen =()=>{

    return(

        <SafeAreaView style={{flex:1}}>
            <View >
                <View style={{height:height/6, width:width}}>
                    <Image  PlaceholderContent={<ActivityIndicator/>} style={{width:"100%", height:"100%"}}  source={{uri:'https://picsum.photos/300'}}  />
                </View>


                <View style={{marginHorizontal:10, marginTop:10}}>
                    <Text style={{ fontSize:25,
                        marginBottom:30,
                        fontWeight:'bold',

                        color:'#444444'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                    </Text>
                    <Text>
                        {check.replace(/<p>/g,"").replace(/<\/p>/g,"\n\n")}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )

}


export default ArticleScreen
