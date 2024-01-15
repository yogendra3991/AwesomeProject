/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import DashboardController, { Props } from './DashboardController';
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



class Dashboard extends DashboardController {
    constructor(props: Props) {
        super(props);
   
      }



      renderImageItem = ({ item }: { item: ImageData }) => (
        <TouchableOpacity style={styles.itemContainer}  onPress={()=>this.props.navigation.navigate('Saction',{'item':this.state.imagesData})}>
        {/* <View style={styles.itemContainer}> */}
          <Image source={{ uri: item.url }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
         </TouchableOpacity>

      );
    
    

  render() {


    return (
     <View>
    <View >
      <FlatList
        data={this.state.imagesData}
        renderItem={this.renderImageItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
      />
    </View>


    
         </View>
    );
  }
}

export default Dashboard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 2,
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

