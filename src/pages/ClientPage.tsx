import { Box} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import SearchClient from "../shared/components/SearchClient"
import ClientCard from "../shared/components/ClientCard"
import type { User } from "../module/dummyJson"
import { getUsers } from "../services/userService"

export default function ClientPage() {

    const [users, setUsers] = useState<User[]>([])
    const [results, setResults] = useState<User[]>([])
    const [searchType, setSearchType] = useState("id")
    const [value, setValue] = useState("")

    useEffect(() => {loadUsers() }, [])

    const loadUsers = async () => {
        const data = await getUsers()
        setUsers(data.users)

    }

    const search = () => {

        if (searchType === "id") {
            setResults(users.filter(
                    user => user.id === Number(value)
                )
            )

        }

        else {
            setResults(
                users.filter(user =>  user.address.city
                            .toLowerCase()
                            .includes(value.toLowerCase())
                )
            )
        }
    }

    return (

        <Box  >
            <SearchClient searchType={searchType}  setSearchType={setSearchType}
                value={value} setValue={setValue}  onSearch={search}  />
            {
                results.map((user) => (
                    <ClientCard key={user.id} user={user} />
                ))
            }
        </Box>

    )
}