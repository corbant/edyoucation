declare module 'dante3' {
    
    interface DanteProps {
        widgets?: [{
            name: string,
            tag: string,
            component: React.Component,
            attributes?
        }],
        theme?: object,
        fixed?: boolean,
        content?: string | JSON,
        onUpdate?: Function,
        readOnly?: boolean,
        bodyPlaceholder?: string,
        extensions?: [object]
    }

    class Dante extends React.Component<DanteProps, any>{}

    export = Dante
}