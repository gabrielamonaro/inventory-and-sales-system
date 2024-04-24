import {
  StatGroup,
  StatLabel,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box,
  Text,
} from "@chakra-ui/react";

const StatBar: React.FC = () => {
  return (
    <StatGroup
      border="1px solid lightgray"
      borderRadius={"20px"}
      margin={"8px"}
      marginLeft="280px"
      padding="16px"
      display="flex"
      justifyContent="flex-end"
    >
      <Box>
        <Text fontSize={20} fontWeight="bold" color="coral">
          Estatísticas
        </Text>
      </Box>
      <Stat display="flex" justifyContent="flex-end" marginRight="20px">
        <StatLabel>Lucro</StatLabel>
        <StatNumber fontWeight="bold" padding="8px" paddingLeft={0}>
          345,670
        </StatNumber>
        <StatHelpText>
          <StatArrow type="increase" color="#6DC993" marginRight="8px" />
          23.36%
        </StatHelpText>
      </Stat>

      <Stat display="flex" justifyContent="flex-end" marginRight="32px">
        <StatLabel>Investido</StatLabel>
        <StatNumber fontWeight="bold" padding="8px" paddingLeft={0}>
          45
        </StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" color="#F78484" marginRight="8px" />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

export default StatBar;
