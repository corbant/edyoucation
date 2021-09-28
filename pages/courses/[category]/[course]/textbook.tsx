import { Layout } from 'antd'
import Navbar from '../../../../components/Navbar'
import TextbookSideNav from '../../../../components/TextbookSideNav'
const { Content } = Layout
import Dante from 'dante3'
import { useState } from 'react'

export default function Textbook() {

    const [isEditing, setIsEditing] = useState(false)

    return(
        <Layout>
            <Navbar/>
            <Layout style={{height: "100vh"}}>
                <TextbookSideNav/>

                <Content style={{background: "#fff", margin: "40px auto", maxWidth: "1200px"}}>
                    <div style={{margin: 40}}>
                        <Dante content={`<p>Testing! Hello world!</p>`} readOnly={!isEditing}/>
                    </div>

                </Content>

            </Layout>

        </Layout>
        
    )

}