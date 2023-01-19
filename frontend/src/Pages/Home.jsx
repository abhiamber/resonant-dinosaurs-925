import { Box } from "@chakra-ui/react";
import AsCatSlider from "../components/AsCatSlider";
import AsImgSlider from "../components/AsImgSlider";

export default function Home() {
  return (
    <Box>
      <AsImgSlider />
      <AsCatSlider />
    </Box>
  );
}
