import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Help({navigation}) {
    const [showr, setshow] = useState({cont:'flex', oth:'none'})
    const Steps=[
        {
            img: require('../assets/help/c1.png'),
            desc: `Open your Qoutes tab on MT5 and tap once on the pair or market you want`
        },
        {
            img: require('../assets/help/c2.png'),
            desc: `Click on Properties`
        },
        {
            img: require('../assets/help/c3.png'),
            desc: `The red label is the contract Number`
        },
    ]
  return (
    <View style={styles.body}>
        <View style={styles.headView}>
            <TouchableOpacity onPress={()=>{setshow({cont:'flex',oth:'none'})}} style={styles.btns}>
                <Text style={styles.txtbtn}>Contract Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setshow({cont:'none',oth:'flex'})}} style={styles.btns}>
                <Text style={styles.txtbtn}>Others</Text>
            </TouchableOpacity>
        </View>
              <View style={{flex:1}}>
      
            <FlatList
                    data={Steps}
                    style={{display:showr.cont}}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={({item})=>{
                      return(
                          <View style={styles.cover}>
                              <Image source={item.img} resizeMode='cover' style={styles.images} />
                              <Text style={styles.stext}>{item.desc}</Text>
                              <Sline/>
                          </View>
                      )
                    }} />
      
            <View style={[styles.cover,{display:showr.oth, justifyContent:'center',paddingBottom:70}]}>
                        <Image source={require('../assets/help/general.png')} resizeMode='contain' style={[styles.images,{height:200}]} />
                        <Text style={[styles.stext, {color:'red', fontSize:17}]}>Red : Lot size</Text>

                        <Text style={[styles.stext, {color:'#ba15c1', fontSize:17}]}>purple : Entry</Text>
                        <Text style={[styles.stext, {color:'#0fc007', fontSize:17}]}>Green : TP or SL</Text>
                        
            </View>
    
      </View>
      <StatusBar style='light' />
    </View>
  )
}
function Sline() {
    return ( 
        <View style={{width:'100%', height:1,backgroundColor:'white'}}></View>
     );
}


const styles = StyleSheet.create({
    body:{
        backgroundColor:'#18191a',
        flex:1,
        display:'flex',
        
    },

    //heading side
    headView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingVertical:15
    },
    btns:{
        backgroundColor:'white',
        padding:5,
        borderRadius:20,
        fontWeight:'bold',
        width:'30%',
        textAlign:'center',
        alignItems:'center'
    },
    txtbtn:{
        fontWeight:'bold'
    },
    //flatlist
    cover:{
        marginBottom:30,
        flex:1,
        // backgroundColor:'green',
        alignItems:'center',
        paddingHorizontal:'5%'
    },
    images:{
        width:'95%',
        height:250,
    },
    stext:{
        color:'white',
        margin:8,
        fontWeight:'bold',
        
    }
})