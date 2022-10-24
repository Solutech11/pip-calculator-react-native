import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Button(props) {
    return ( <TouchableOpacity onPress={()=>{}}>
  <Ionicons name="help-circle" size={props.st} color="white" />
    </TouchableOpacity> );
  }