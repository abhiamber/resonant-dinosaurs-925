import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { GetToProduct } from "../../redux/prod/prod.action";
import { useDispatch, useSelector } from "react-redux";
// The default icon size is 1em (16px)

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [length, setLength] = useState(20);
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { prod } = useSelector((store) => store);
  //   console.log(prod);

  const setLengthFunction = () => {
    // let start = length === 20 ? 0 : length;
    // console.log(productData);
    // console.log(productData.slice(0, length));
    setMapData(prod.data.slice(0, length));
  };

  useEffect(() => {
    dispatch(GetToProduct());
  }, []);

  useEffect(() => {
    setProductData(prod.data);
    setLoading(true);

    setLengthFunction();
  }, [prod]);

  useEffect(() => {
    setLengthFunction();
  }, [length]);

  if (!productData.length > 0) {
    return (
      <Stack>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />

        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />

        <Skeleton height="20px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />

        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }

  return (
    <Box>
      {" "}
      <Grid
        templateColumns="repeat(4, 1fr)"
        p="38px"
        m="auto"
        //   justifyContent={"space-evenly"}
        justifyItems={"center"}
        gap={6}
      >
        {mapData &&
          mapData.map((prod) => {
            return (
              <GridItem
                w="100%"
                key={prod._id}
                m="auto"
                boxShadow="xs"
                p="6"
                rounded="md"
                // textAlign={"center"}
                cursor="pointer"
                height="100%"
              >
                <Image src={prod.image_link} alt="naruto" w="100%" h="70%" />
                <Text>{prod.name}</Text>
                <Text> Price - {prod.price}</Text>
                <Button
                  bg="#fd1d92"
                  borderRadius={"35px"}
                  fontSize="15px"
                  h="30px"
                  color={"white"}
                  fontWeight="light"
                >
                  {" "}
                  {prod.rating}{" "}
                  <StarIcon color={"white"} pl="5px" fontSize={"25px"} />
                </Button>
              </GridItem>
            );
          })}
      </Grid>
      <Box>
        <Button
          onClick={() => {
            setLength(length + length);
          }}
          bg="#fd1d92"
        >
          LoadMore
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
