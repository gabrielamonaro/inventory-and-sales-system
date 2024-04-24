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
import { useState } from "react";

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
  const [selectedCell, setSelectedCell] = useState<string>();
  return (
    <TableContainer marginLeft={"280px"} maxH="100%">
      <Table
        variant="simple"
        border="1px solid lightgray"
        borderRadius="25px"
        p={20}
      >
        <Box
          overflowY="scroll"
          maxH={"70vh"}
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: "11.42px",
              backgroundColor: "#eeeeee6e",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10px",
              backgroundColor: "#eeeeee",
            },
          }}
          overflowX="hidden"
          scrollMargin={20}
        >
          <Thead
            position="sticky"
            top={0}
            padding="12px"
            backgroundColor="white"
          >
            <Tr>
              {headers.map((item) => (
                <Th
                  isNumeric={item.isNumeric}
                  textTransform="uppercase"
                  fontSize={12}
                  p="8px"
                  fontFamily="Roboto"
                >
                  {item.name}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody padding="32px">
            {data.map((item) => (
              <Tr
                _hover={{ backgroundColor: "#F4F4F4", cursor: "pointer" }}
                color={selectedCell === item.id ? "coral" : "black"}
                onClick={() => setSelectedCell(item.id)}
              >
                {headers.map((i) => (
                  <Td
                    isNumeric={i.isNumeric}
                    alignContent="center"
                    justifyContent="center"
                    textAlign="center"
                    margin={0}
                    onClick={() => console.log(item.id)}
                    padding="8px"
                    sx={{
                      "&::hover": {
                        backgroundColor: "lightgray",
                      },
                    }}
                  >
                    {item[i.code]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
          <Tfoot position="sticky" bottom={0} backgroundColor="white">
            <Tr margin={8}>
              {headers.map((item) => {
                if (item.isNumeric) {
                  return (
                    <Th isNumeric textAlign="center">
                      {data.reduce((acc, curr) => acc + curr[item.code], 0)}
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
