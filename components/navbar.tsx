import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo-white.png'
import { Input, AutoComplete, SelectProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import debounce from 'debounce'
const { Search } = Input
const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [autoCompleteOptions, setAutoCompleteOptions] = useState<SelectProps<object>['options']>([])

    function handleSearch(search: string) {
    }

    async function handleAutoCompleteSearch(search: string) {
        setIsLoading(true)
        debounce(fetchSearchResults, 800)(search)
        setIsLoading(false)
    }

    function fetchSearchResults(search: string) {
        setAutoCompleteOptions([{value: search}])
    }
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <Link href="/" passHref>
                    <a style={{float: "left", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "24px"}}>
                        <Image layout="fixed" src={logo} height={30} width={196} loading="eager" priority alt="edYOUcation"/>
                    </a>
                </Link>

                <AutoComplete
                onSearch={handleAutoCompleteSearch}
                options={autoCompleteOptions}
                >
                    <Search placeholder="Search Site" enterButton loading={isLoading} onSearch={handleSearch}/>
                </AutoComplete>
            </div>

            <div>
                <a>
                    <UserOutlined style={{color: "white", fontSize: "30px"}} />
                </a>
            </div>
        </div>
    );
}

export default Navbar