import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo-white.png'
import logoImage from '../public/logo-image-white.png'
import { Input, AutoComplete, SelectProps, Drawer } from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import debounce from 'debounce'
import { ScreenSize, useScreenSize } from '../hooks/screen-size'
const { Search } = Input
const Navbar = () => {
    const screenSize = useScreenSize()
    const [isLoading, setIsLoading] = useState(false)
    const [autoCompleteOptions, setAutoCompleteOptions] = useState<SelectProps<object>['options']>([])
    const [searchDrawerVisible, setSearchDrawerVisible] = useState(false)

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
                    <a style={{float: "left", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {
                            (screenSize <= ScreenSize.SM && <Image layout="fixed" src={logoImage} height={36} width={36} loading="eager" priority alt="edYOUcation"/>)
                            ||
                            <Image layout="fixed" src={logo} height={30} width={196} loading="eager" priority alt="edYOUcation"/>
                        }
                    </a>
                </Link>
            </div>

            {screenSize >= ScreenSize.MD && <div style={{width: "100%", alignItems: "center", display: "flex", justifyContent: "center", padding: "0 32px"}}>
                <AutoComplete
                onSearch={handleAutoCompleteSearch}
                options={autoCompleteOptions}
                style={{width: "100%"}}
                >
                    <Search placeholder="Search Site" enterButton loading={isLoading} onSearch={handleSearch} style={{width: "100%"}}/>
                </AutoComplete>

            </div>}

            <div>
                {
                    screenSize <= ScreenSize.SM &&
                    <> 
                        <a>
                            <SearchOutlined style={{color: "white", fontSize: "24px", marginRight: "24px"}} onClick={() => setSearchDrawerVisible(true)}/>
                        </a>
                        <Drawer visible={searchDrawerVisible} placement="top" height="100vh" closable={true} onClose={() => setSearchDrawerVisible(false)} destroyOnClose={true} title={<Search placeholder="Search Site" style={{width: "90%"}}/>}>
                            <p>Search Results</p>
                        </Drawer> 
                    </>
                }
                <a>
                    <UserOutlined style={{color: "white", fontSize: "24px"}} />
                </a>
            </div>
        </div>
    );
}

export default Navbar