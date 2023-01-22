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
import AsFooter from "../Components/AsFooter";
import AsFrGift from "../Components/AsFrGift";
import AsImgGallery from "../Components/AsImgGallery";
import AsSpLooks from "../Components/AsSpLooks";
import AsSpLooksGallery from "../Components/AsSpLooksGallery";

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
            <AsFooter />
        </>
    )
}