import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { IOrder } from "../../interfaces/IOrder";
import { useCallback } from "react";

interface IField {
  name: string;
  isNumeric?: boolean;
  code: string;
}

interface IMainTableProps {
  headers: IField[];
  data: IOrder[];
}
const MainTable: React.FC<IMainTableProps> = ({ headers, data }) => {
  const sumAll = useCallback(
    ({ key }: { key: string }) => {
      let sum = 0;

      data.forEach((item) => {
        sum = sum + item[key];
      });
      return sum;
    },
    [data]
  );

  return (
    <TableContainer marginLeft={"300px"} maxH="100%">
      <Table
        // variant="simple"
        variant="striped"
        colorScheme="teal"
        border="1px solid lightgray"
        borderRadius="25px"
        p={20}
      >
        <Box overflowY="scroll" maxH={"500px"} overflowX="hidden">
          <Thead
            position="sticky"
            top={0}
            padding="12px"
            border="1px solid red"
          >
            <Tr>
              {headers.map((item) => (
                <Th
                  isNumeric={item.isNumeric}
                  textTransform="uppercase"
                  fontSize={12}
                  p="0px 8px"
                >
                  {item.name}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr>
                {headers.map((i) => (
                  <Td
                    isNumeric={i.isNumeric}
                    alignContent="center"
                    justifyContent="center"
                    textAlign="center"
                  >
                    {item[i.code]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          <Tfoot position="sticky" bottom={0}>
            <Tr margin={8}>
              {headers.map((item) => {
                if (item.isNumeric) {
                  return (
                    <Th isNumeric textAlign="center">
                      {sumAll({ key: item.code })}
                    </Th>
                  );
                }
                return <Th></Th>;
              })}
            </Tr>
          </Tfoot>
        </Box>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
