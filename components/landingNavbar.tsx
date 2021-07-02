import Link from 'next/link'
import Image from 'next/image'
import { Menu, Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import logo from '../public/logo-white.png'

type LandingNavbarProps = {
    selectedKey?: "home" | "about" | undefined
}

const LandingNavbar = ({selectedKey}: LandingNavbarProps) => {
    return(
        <>
            <Link href="/" passHref>
                <a style={{float: "left", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "24px"}}>
                    <Image layout="fixed" src={logo} height={30} width={196} loading="eager" priority alt="edYOUcation"/>
                </a>
            </Link>
            <Menu theme="dark" mode="horizontal" style={{float: "left"}} selectedKeys={selectedKey ? [selectedKey] : undefined}>
            <Menu.Item key="home">
                <Link href="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link href="/about">
                    About Us
                </Link>
            </Menu.Item>
            </Menu>
            <div style={{ float: "right"}}>
            <Link href="/explore">
                <Button shape="round" type="primary" size="large">
                Explore
                <ArrowRightOutlined />
                </Button>
            </Link>
            </div>
        </>
    )
}

export default LandingNavbar