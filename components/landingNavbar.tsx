import Link from 'next/link'
import Image from 'next/image'
import { Menu, Button, Dropdown } from 'antd'
import { ArrowRightOutlined, MenuOutlined } from '@ant-design/icons'
import { useScreenSize, ScreenSize } from '../hooks/screen-size'
import logo from '../public/logo-white.png'
import logoImage from '../public/logo-image-white.png'

type LandingNavbarProps = {
    selectedKey: "home" | "about"
}

const LandingNavbar = ({selectedKey}: LandingNavbarProps) => {
    const screenSize = useScreenSize()
    return(
        <>
            <Link href="/" passHref>
                <a style={{float: "left", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "24px"}}>
                    {
                        (screenSize <= ScreenSize.SM && <Image layout="fixed" src={logoImage} height={36} width={36} loading="eager" priority alt="edYOUcation"/>)
                        ||
                        (<Image layout="fixed" src={logo} height={30} width={196} loading="eager" priority alt="edYOUcation"/>)
                    }
                </a>
            </Link>
            {
                screenSize <= ScreenSize.MD && (
                    <div style={{justifyContent: "center", height: "100%", float: "right"}}>
                        <Dropdown overlay={
                            <Menu mode="vertical" selectedKeys={[selectedKey]}>
                                <Menu.Item key="home">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="about">
                                    <Link href="/about">
                                        About
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        } placement="bottomRight" trigger={["click"]}>
                            <MenuOutlined style={{color: "white", fontSize: "25px"}}/>
                        </Dropdown>
                    </div>
                )
                ||
                (
                    <>
                        <div style={{float: "left"}}>
                            <Button type="link" style={{color: "white"}}>
                                <Link href="/">
                                    Home
                                </Link>
                            </Button>
                            <Button type="link" style={{color: "white"}}>
                                <Link href="/about">
                                    About
                                </Link>
                            </Button>   
                        </div>
                        <div style={{ float: "right"}}>
                            <Link href="/courses">
                                <Button shape="round" type="ghost" style={{color: "white"}}>
                                    Courses
                                    <ArrowRightOutlined />
                                </Button>
                            </Link>
                        </div>
                        
                    </>                
                )
            }
            
        </>
    )
}

export default LandingNavbar