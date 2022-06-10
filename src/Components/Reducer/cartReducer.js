import phone from "../images/apple.jpg";
import image from "../images/samsung.jpg";
import image1 from "../images/oneplus.jpg";
const initState = {
    items: [
        {id:1,title:'I-phone', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price:'$1000',img:phone},
        {id:2,title:'Samsung', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price:'$999',img: image},
        {id:3,title:'Oneplus', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:'$990',img: image1},
       
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;

