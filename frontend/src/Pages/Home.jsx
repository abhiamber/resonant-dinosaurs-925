import { useEffect } from "react";
import AsBigBrand from "../components/AsBigBrand";
import AsBigDeals from "../components/AsBigDeals";
import AsBottomSection from "../components/AsBottomSection";
import AsBudgetBuy from "../components/AsBudgetBuy";
import AsCatGallery from "../components/AsCatGallery";
import AsCatSlider from "../components/AsCatSlider";
import AsCatStores from "../components/AsCatStores";
import AsDealGallery from "../components/AsDealGallery";
import AsDeals from "../components/AsDeals";
import AsFooter from "../components/AsFooter";
import AsFrGift from "../components/AsFrGift";
import AsImgGallery from "../components/AsImgGallery";
import AsSpLooks from "../components/AsSpLooks";
import AsSpLooksGallery from "../components/AsSpLooksGallery";
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
            <AsFooter />
        </>
    )
}