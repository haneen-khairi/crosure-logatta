import { Table, TableContainer, Thead, Tbody , Tr, Th , Td } from '@chakra-ui/react'
import ShowMoreButton from './buttons/ShowMore'

// export default function TableComponent({
//     data,
//     setShowDetails,
//     tableName = "Table Name"
// }: any) {
//   return (
//     <TableContainer>
//     <Table variant='striped'>
//       <TableCaption>{tableName}</TableCaption>
//       <Thead>
//         <Tr>
//           <Th>#</Th>
//           <Th>Price Range</Th>
//           <Th>Average Living Costs</Th>
//           {tableName === "Properties" && <Th>Show details</Th>}
//         </Tr>
//       </Thead>
//       <Tbody>
//         {data.map((property:any) => <Tr>
//           <Td isNumeric>{property.id}</Td>
//           <Td>{property.price_with_currency}</Td>
//           <Td>{property.avg_living_costs_with_currency}</Td>
//           {tableName === "Properties" && <Td><ShowMoreButton onClick={() => setShowDetails(property.id)} /></Td>}
//         </Tr>)}

//       </Tbody>

//     </Table>
//   </TableContainer>
//   )
// }

export default function TableComponent({
  data,
  setShowDetails,
  tableName = 'Table Name',
  headers = [], // New prop to define table headers
}: any) {
  return <>
  <h3 style={{
    textAlign:'center',
    fontWeight: 700,
    color: '#842888'
  }}> {tableName}</h3>
    <TableContainer overflowY={'auto'} maxHeight={'500px'}>
      <Table variant="striped">
        {/* <TableCaption>{tableName}</TableCaption> */}
        <Thead>
          <Tr>
            {headers.map((header: any, index: number) => (
              <Th key={index}>{header.name}</Th>
            ))}
            {tableName === 'Properties' && <Th>Show details</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((property: any) => (
            <Tr key={property.id}>
              {headers.map((header: any, index: number) => (
                <Td key={index} isNumeric={header.isNumeric}>
                  {property[header.key]}
                </Td>
              ))}
              {tableName === 'Properties' && (
                <Td>
                  <ShowMoreButton onClick={() => setShowDetails(property.id)} />
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </>
    
  
}

