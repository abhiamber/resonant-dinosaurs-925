import { useEffect } from "react";
import AsBigBrand from "../Components/Home/AsBigBrand";
import AsBigDeals from "../Components/Home/AsBigDeals";
import AsBottomSection from "../Components/Home/AsBottomSection";
import AsBudgetBuy from "../Components/Home/AsBudgetBuy";
import AsCatGallery from "../Components/Home/AsCatGallery";
import AsCatSlider from "../Components/Home/AsCatSlider";
import AsCatStores from "../Components/Home/AsCatStores";
import AsDealGallery from "../Components/Home/AsDealGallery";
import AsDeals from "../Components/Home/AsDeals";
import AsFrGift from "../Components/Home/AsFrGift";
import AsImgGallery from "../Components/Home/AsImgGallery";
import AsSpLooks from "../Components/Home/AsSpLooks";
import AsSpLooksGallery from "../Components/Home/AsSpLooksGallery";

export default function Home () {

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