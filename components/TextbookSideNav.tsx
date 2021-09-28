import { Layout, Tree } from 'antd'

const { Sider } = Layout



export default function TextbookSideNav() {
    return(
        <Sider theme="light" width={200} style={{height: "100%"}} collapsible>
            <Tree treeData={[{title: "Section 1", key: "section1", children: [ {title: "Part 1", key: "part1"}, {title: "Part 2", key: "part2"}]}]}/>

        </Sider>
    );
}