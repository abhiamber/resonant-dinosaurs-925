import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsBudgetBuy() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box mt="50px">
        <Image m="auto" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673943895_budget-buy-for-you-web_17_17.gif" />
      </Box>
      <SimpleGrid columns={4} pl="120px" pr="120px" mt="40px">
        <Box>
          <Image src="https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043771_web_01-1.gif" />
        </Box>
        <Box>
          <Image src="https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043770_web_02-1.gif" />
        </Box>
        <Box>
          <Image src="https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043768_web_03-1.gif" />
        </Box>
        <Box>
          <Image src="https://media6.ppl-media.com/tr:w-320,ar-1-2,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674043767_web_04-1.gif" />
        </Box>
      </SimpleGrid>
      <Box mt="10px">
        <Image m="auto" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1620711142_elite-web.png" />
      </Box>
      <Box mt="50px">
        <Slider {...settings}>
          <Box>
            <Image
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044098_paisa-vasool-elite-republic-l-1298x418.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044096_skin-care-web.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044100_makeup-web.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044105_hair-care-web.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674044102_korean-web.gif"
              m="auto"
            />
          </Box>
        </Slider>
      </Box>
    </>
  );
}
