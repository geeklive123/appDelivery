import { StyleSheet } from "react-native";
import { AdminProductCreateScreen } from "./ProductCreate";
const AdminProductCreateStyles=StyleSheet.create({
   
   container:{
    flex:1
   },
    imageContainer:{
            paddingTop:50,
            flexDirection:'row',
            justifyContent:'space-around'
    },
 image:{
    width:110,
    height:100,
    resizeMode:'contain'
 },
 form:{
    backgroundColor:'white',
    height:'65%',
    width:'100%',
    borderTopLeftRadius:40,
    borderRightRadius:40,
    paddingHorizontal:30,
    position:'absolute',
    bottom:0
 },
 buttonContainer:{
   marginTop:80
  //  position:'absolute',
   // bottom:20,
   // left:20,
   // right:20
 },
 categoryInfo:{
   
   marginTop:30,
   justifyContent:'center',
   alignItems:'center'
 },
 
 imageCategory:{
   width:50,
   height:50
 },
 textCategory:{
  color:'gray',
  fontSize:17,
  fontWeight:'bold'

 }
});
export default AdminProductCreateStyles