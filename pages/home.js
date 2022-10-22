import { View, Text,StyleSheet, TextInput, Keyboard, Pressable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    const [slTP, setSLTP]= useState(0)
    const [entry, setentry] = useState(0)
    const [contract, setcontract] = useState(0)
    const [lot, setlot] = useState(0)
    const [ans, setAns] = useState('fill the form well')
    function calccontract(text, ) {
        setcontract(text)
        
        try{
            const answer=(slTP-entry)*text*lot
            setAns(Math.abs(answer).toFixed(1))
        }catch(e){
            setAns('fill form well!!')
        }
    }
    function calcentry(text, ) {
        setentry(text)
        
        try{
            const answer=(slTP-text)*contract*lot
            setAns(Math.abs(answer).toFixed(1))
        }catch(e){
            setAns('fill form well!!')
        }
    }
    function calcsltp(text ) {
        setSLTP(text)
        
        try{
            const answer=(text-entry)*contract*lot
            setAns(Math.abs(answer).toFixed(1))
        }catch(e){
            setAns('fill form well!!')
        }
    }
    function calclot(text ) {
        setlot(text)
        
        try{
            const answer=(slTP-entry)*contract*text
            setAns(Math.abs(answer).toFixed(1))
        }catch(e){
            setAns('fill form well!!')
        }
    }
  return (
    <Pressable onPress={()=>Keyboard.dismiss()} style={styles.body}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-evenly'
        }}>
        <TextInput style={styles.TInput} onChangeText={(text)=>{calcsltp(text)}} value={slTP} placeholder='SL / TP' keyboardType='numeric' textAlign='center' autoFocus={true} />
        <TextInput style={styles.TInput} onChangeText={(text)=>{calcentry(text)}} value={entry} placeholder='Entry Point'keyboardType='numeric' textAlign='center' />
        <TextInput style={styles.TInput} onChangeText={(text)=>{calccontract(text)}} value={contract} placeholder='Contract' keyboardType='numeric' textAlign='center' />
        <TextInput style={styles.TInput} onChangeText={(text)=>{calclot(text)}} value={lot} placeholder='Lot Size' keyboardType='numeric' textAlign='center' />

        </View>
        <TouchableOpacity android_ripple={0.9} onPress={()=>{
            setAns('fill the form')
            setSLTP(0)
            setcontract(0)
            setlot(0)
            setentry(0)
        }}>
            <Text style={{color:'white', marginTop:30,fontWeight:'bold',textDecorationLine:'underline', fontSize: 18,}}>Risk: $ {ans}</Text>
        </TouchableOpacity>
        <StatusBar style='light' />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#18191a',
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    TInput:{
        backgroundColor:'white',
        width:'22%',
        borderRadius:19,
        height:45,
        fontWeight:'bold',
        fontSize:13
    }
});