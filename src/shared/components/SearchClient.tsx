
import NavLayout from "../../shared/layout/NavLayout"
import { Button, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup } from "@chakra-ui/react";

interface Props {
    searchType: string
    setSearchType: (value: string) => void
    value: string
    setValue: (value: string) => void
    onSearch: () => void
}

export default function SearchClient({ searchType, setSearchType, value, setValue, onSearch }: Props) {
    return (
        <>
        
        <NavLayout>
             <Heading  mb={8} >
                Buscar Clientes
            </Heading>
            <RadioGroup  value={searchType}  onChange={setSearchType}  >
                <HStack mb={5}>
                    <Radio value="id">
                       ID
                    </Radio>
                    <Radio value="city">
                        Ciudad
                    </Radio>
                </HStack>
            </RadioGroup>
             <FormControl>
                <FormLabel>
                    {searchType === "id"
                        ? "ID Cliente"
                        : "Ciudad"}
                </FormLabel>
                <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </FormControl>
            <Button mt={5} colorScheme="green" onClick={onSearch}>
                Buscar
            </Button>
           
        </NavLayout>
        
       </> 
    )
}