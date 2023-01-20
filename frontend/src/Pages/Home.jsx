import AsBigBrand from "../components/AsBigBrand";
import AsBigDeals from "../components/AsBigDeals";
import AsBottomSection from "../components/AsBottomSection";
import AsBudgetBuy from "../components/AsBudgetBuy";
import AsCatGallery from "../components/AsCatGallery";
import AsCatSlider from "../components/AsCatSlider";
import AsCatStores from "../components/AsCatStores";
import AsDealGallery from "../components/AsDealGallery";
import AsDeals from "../components/AsDeals";
import AsFrGift from "../components/AsFrGift";
import AsImgGallery from "../components/AsImgGallery";
import AsSpLooks from "../components/AsSpLooks";
import AsSpLooksGallery from "../components/AsSpLooksGallery";

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