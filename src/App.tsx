import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import ModalTable from "./components/modal/ModalTable";

function App() {
  return (
    <div className="App bg-gradient-to-r from-cyan-400 to-blue-400 min-h-screen p-10 ">
      <ChakraProvider>
        <Box
          borderRadius="2xl"
          padding="6"
          width="80%"
          mx="auto"
          boxShadow="2xl"
          backgroundColor="white"
        >
          <TableContainer>
            <Table variant="striped" colorScheme="facebook">
              <TableCaption>Interviewee marks and feedback</TableCaption>
              <Thead>
                <Tr>
                  <Th>name</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Result</Th>
                  <Th>Feedback</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Shahadat Hossain</Td>
                  <Td>26-12-22</Td>
                  <Td>30m</Td>
                  <Td>70</Td>
                  <Td>
                    <ModalTable></ModalTable>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Imran Mridha</Td>
                  <Td>26-12-22</Td>
                  <Td>30m</Td>
                  <Td>70</Td>
                  <Td>
                    <ModalTable></ModalTable>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Ikbal Mondol</Td>
                  <Td>26-12-22</Td>
                  <Td>30m</Td>
                  <Td>70</Td>
                  <Td>
                    <ModalTable></ModalTable>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Md Riaj</Td>
                  <Td>26-12-22</Td>
                  <Td>30m</Td>
                  <Td>70</Td>
                  <Td>
                    <ModalTable></ModalTable>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Zahid Hasnan</Td>
                  <Td>26-12-22</Td>
                  <Td>30m</Td>
                  <Td>70</Td>
                  <Td>
                    <ModalTable></ModalTable>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
