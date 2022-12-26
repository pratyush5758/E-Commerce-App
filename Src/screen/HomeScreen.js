import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {IMAGES} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Brand = [
  {
    id: 'Shoe',
    new: 'New',
    image: IMAGES.NIKE,
    Name: 'Nike Shoes',
    Price: '$12.00',
    color: '#ECF4C5'
  },
  {
    id: 'Chair',
    new: 'New',
    image: IMAGES.CHAIR,
    Name: 'Chair',
    Price: '$20.00',
    color: '#F8E3E2'
  },
  {
    id: 'watch',
    new: 'New',
    image: IMAGES.WATCH,
    Name: 'Watch',
    Price: '$60.00',
    color:'#87cefa'
  },
  {
    id: 'Shirt',
    new: 'New',
    image: IMAGES.TSHIRT,
    Name: 'Shirt',
    Price: '$40.00',
    color:'#48d1cc'
  },
  {
    id: 'MacBook',
    new: 'New',
    image: IMAGES.LAPTOP,
    Name: 'MacBook',
    Price: '$120.00',
    color:`#7b68ee`
  },
  {
    id: 'Iphone',
    new: 'New',
    image: IMAGES.IPHONE14,
    Name: 'Iphone 14',
    Price: '$100.00',
    color:`#dda0dd`
  },
];
const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={styles.menuview}>
          <View>
            <Entypo name="menu" size={25} color={'black'} />
          </View>
          <View>
            <Text style={styles.menutext}>Home</Text>
          </View>
          <View style={styles.header}>
            <View style={styles.bellicon}>
              <AntDesign name="bells" size={25} color={'black'} />
            </View>
            <View>
              <Image source={IMAGES.PIC} style={styles.logo} />
            </View>
          </View>
        </View>

        <View style={styles.searchcontainer}>
          <View style={styles.imputview}>
            <TextInput placeholder="searching.." style={{marginLeft:15,}} />
            <EvilIcons
              name="search"
              size={30}
              color="gray"
              style={{padding: 6,marginRight:10}}
            />
          </View>
          <View style={styles.filtericon}>
            <Octicons name="filter" size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.offerview}>
          <View style={styles.discountview}>
            <Text style={styles.discounttext}>50% OFF</Text>
            <View>
              <Image source={IMAGES.SHOE} style={{height: 160}} />
            </View>
          </View>
        </View>
        <View style={styles.dots}>
          <Entypo name="dots-three-horizontal" size={30} color={'black'} />
        </View>
        
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.allicon}>
              <MaterialCommunityIcons
                name="dots-grid"
                size={25}
                color={`#b22222`}
              />
              <Text style={styles.itemtext}>All</Text>
            </View>
            <View style={styles.footwear}>
              <MaterialCommunityIcons
                name="shoe-sneaker"
                size={25}
                color={'black'}
              />
              <Text style={styles.itemtextpre}>Footwear</Text>
            </View>
            <View style={styles.watch}>
              <MaterialCommunityIcons
                name="watch-variant"
                size={25}
                color={'black'}
              />
              <Text style={styles.itemtextpre}>Watch</Text>
            </View>
            <View style={styles.cloth}>
              <MaterialCommunityIcons
                name="tshirt-crew"
                size={25}
                color={'black'}
              />
              <Text style={styles.itemtextpre}>cloth</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.popularview}>
          <TouchableOpacity>
            <Text style={styles.populartext}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.view}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={Brand}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={[styles.shoecontainer,{backgroundColor:item.color}]}>
                  <View style={styles.shoeview}>
                    <Text style={styles.shoetext}>{item.new}</Text>
                  </View>
                  <View style={styles.imgview}>
                    <Image source={item.image} style={styles.img} />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.Name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.Price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
          <AntDesign name='home' size={30} color={'black'}/>
          <AntDesign name='heart' size={30} color={'black'}/>
          <AntDesign name='shoppingcart' size={30} color={'black'}/>
          <AntDesign name='user' size={30} color={'black'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

       

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  menuview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  menutext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellicon: {
    marginRight: 10,
    backgroundColor: '#f8f8f8',
    padding: 7,
    borderRadius: 20,
  },
  searchcontainer: {
    marginHorizontal: 20,
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imputview: {
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent:'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  filtericon: {
    width: 40,
    height: 40,
    backgroundColor: '#FF7A86',
    padding: 10,
    borderRadius: 10,
  },
  offerview: {
    backgroundColor: `#9370db`,
    height: 150,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  discountview: {
    backgroundColor: `#ffe4e1`,
    height: 100,
    width: 130,
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  discounttext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 17,
    marginHorizontal: 10,
    width: 100,
    height: 70,
  },
  dots: {
    alignItems: 'center',
  },
  allicon: {
    flexDirection: 'row',
    backgroundColor: `#ffe4e1`,
    width: 60,
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  footwear: {
    flexDirection: 'row',
    backgroundColor: `#ffe4e1`,
    width: 120,
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  watch: {
    flexDirection: 'row',
    backgroundColor: `#ffe4e1`,
    width: 90,
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  cloth: {
    flexDirection: 'row',
    backgroundColor: `#ffe4e1`,
    width: 90,
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  item: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 10,
  },
  itemtext: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '500',
    color: `#b22222`,
  },
  itemtextpre: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '500',
    color: `black`,
  },
  popularview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  populartext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  view: {
    fontSize: 20,
    fontWeight: '300',
  },
  shoecontainer: {
    backgroundColor: '#ECF4C5',
    height: 230,
    width: 190,
    marginLeft: 10,
    borderRadius: 15,
    marginTop:10,
  },
  shoeview: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: 'white',
    width: 50,
    borderRadius: 5,
  },
  shoetext: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 160,
    height: 130,
    alignItems: 'center',
  },
  imgview: {
    alignItems: 'center',
    marginTop: 5,
  },
  
});
