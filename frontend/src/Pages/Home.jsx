import { useEffect } from "react";
import AsBigBrand from "../Components/AsBigBrand";
import AsBigDeals from "../Components/AsBigDeals";
import AsBottomSection from "../Components/AsBottomSection";
import AsBudgetBuy from "../Components/AsBudgetBuy";
import AsCatGallery from "../Components/AsCatGallery";
import AsCatSlider from "../Components/AsCatSlider";
import AsCatStores from "../Components/AsCatStores";
import AsDealGallery from "../Components/AsDealGallery";
import AsDeals from "../Components/AsDeals";
import AsFrGift from "../Components/AsFrGift";
import AsImgGallery from "../Components/AsImgGallery";
import AsSpLooks from "../Components/AsSpLooks";
import AsSpLooksGallery from "../Components/AsSpLooksGallery";
import BackendURL from "../BackendURL";
import { useState } from "react";

export default function Home () {
    const [user,setUser]=useState();
    useEffect(()=>{
        fetch(`${BackendURL}/cart/cartuser`,{
            headers:{
                'Content-Type':'application/json',
                'email':localStorage.getItem("email")
            }
        }).then(res=>res.json()).then((res)=>setUser(res._id)).catch(err=>console.log(err))
    },[])
    console.log(user)
    localStorage.setItem("userID",user)
    return (
        <>
            <AsImgGallery />
            <AsCatSlider />
            <AsDeals />
            <AsDealGallery />
            <AsCatStores />
            <AsCatGallery />
            <AsSpLooks /> 
            <AsSpLooksGallery />
            <AsFrGift />
            <AsBudgetBuy />
            <AsBigBrand />
            <AsBigDeals />
            <AsBottomSection />
        </>
    )
}