import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  //   Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetToQueryProduct } from "../../redux/prod/prod.action";

const ProductFunctionality = ({ sortFilterFunc }) => {
  const [value, setValue] = React.useState();
  const [allProdStatus, setAllProdStatus] = useState(false);

  useEffect(() => {
    sortFilterFunc(value);
  }, [value]);

  return (
    <Box mt="20px">
      <Flex justifyContent={"space-evenly"}>
        {" "}
        <Box>
          <Button>Sort</Button>
          <RadioGroup onChange={setValue} value={value} mt="10px">
            <Stack direction="column">
              <Radio value="1">Price Low</Radio>
              <Radio value="2">Price High</Radio>
              <Radio value="3">Rating High</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box>
          <Button onClick={() => setAllProdStatus(true)}>All Products</Button>
          <RadioGroup onChange={setValue} value={value} mt="10px">
            {allProdStatus ? (
              <Stack direction="column">
                <Radio value="4">Trending</Radio>
                <Radio value="5">Popular</Radio>
              </Stack>
            ) : null}
          </RadioGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductFunctionality;