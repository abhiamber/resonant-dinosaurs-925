import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsFrGift() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
      };

  return (
    <>
      <Box mt="40px">
        <Image m="auto" src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939614_get-free-gifts-web.gif" />
      </Box>
      <Box mt="40px" pl="120px" pr="120px">
        <Slider {...settings}>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971993_love-beauty-planet-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971996_o3-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673972002_sugar-pop-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971994_mars-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971998_renee-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673972000_streax-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971997_pilgrim-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971995_neutrogena-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673971995_mcaffeine-600x900.jpeg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h="370px"
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673972000_simple-600x900.jpeg"
            />
          </Box>
        </Slider>
      </Box>
      <SimpleGrid columns={2} pl="120px" pr="120px" mt="60px">
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674116626_joy.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674027574_glamrs-celeb-unto-50off-.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953619_sugar-pop-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953611_neuterogena-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953620_tfs.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953621_wella-professional-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953614_purito.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h="310px"
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953616_roundlab.gif?tr=f-gif"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
