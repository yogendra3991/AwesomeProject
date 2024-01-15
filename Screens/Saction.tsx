import React from 'react';
import { View, Text, Image,Dimensions,Modal,TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import SactionController, { Props } from './SactionController';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const dimensions = Dimensions.get('window');




class Saction  extends SactionController {



   number(index:number){
    let height=1;
    if(index==0){
       height=100*1
    }else{
       height=Math.round(dimensions.width * index * 9 / 16)
    }
    return height
   }


   margin(index:number){
    // let height=1;
    // if(index==0){
    //    height=100*1
    // }else{
    //    height=Math.round(dimensions.width * index * 9 / 16)
    // }
    // return height
    let height=1;
    if (index % 2 === 0&& index!=0) {
      height=-55*index
    } else {
     height=0
  }
  return height 

   }

  renderImageItem = ({ item,index }) => (

        

    <TouchableOpacity style={styles.itemContainer}  onPress={()=>this.setState({modal:true,image:item.url,title:item.title})} >
    {/* <View style={styles.itemContainer}> */}
      <Image source={{ uri: item.url }} style={[{height:this.number(index),marginTop:this.margin(index)},styles.image]} />
      <Text style={styles.title}>{item.title}{index}</Text>
     </TouchableOpacity>

  );


    render() {
      // const {
      //   children,
      //   indexValue,
      //   title,
      //   tabLabel,
      //   tabProp,
      //   onChangeTab,
      // } = this.props;

      //console.log('props',this.props.route.params)
  
      let  imagesData= this.props.route.params.item
  
      return (
            <View>
              <View style={styles.main_view}>
              <FlatList
        data={imagesData}
        renderItem={this.renderImageItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
      />
              </View>

              {this.state.modal &&
            <Modal
            transparent={true}
            animationType={'slide'}
            visible={true}
            onRequestClose={() => { this.setState({modal:false})}}>
               <View style={{flexDirection:'row'}}>
                <Image source={{ uri: this.state.image }} style={{height:50,width:50,borderRadius:50}} />
                <Text style={{fontSize:20,backgroundColor:'#ffff',padding:10,color:'#000'}}>{this.state.title}</Text>
               <Text style={{color:'#000',backgroundColor:'#fff',padding:10,fontSize:20,marginLeft:'40%'}}>Follow</Text>
               </View>
              <Image source={{ uri: this.state.image }} style={{height:dimensions.height,width:dimensions.height}} />

      </Modal>}
        </View>
      );
    }
  }
  export default Saction;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    main_view:{
     borderColor:'#000',
     borderWidth:1,
     margin:10,
     backgroundColor:'lightgrey'
    },
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      margin: 8,
    },
    image: {
      width: '100%',
      // height: 150,
      borderRadius: 8,
      marginBottom: 8,
    },
    title: {
      fontSize: RFValue(12), // Responsive font size
      textAlign: 'center',
    },
    addButton: {
      backgroundColor: 'blue',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    addButtonText: {
      color: 'white',
      fontSize: RFValue(14), // Responsive font size
    },
  });