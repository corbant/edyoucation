import { Grid } from 'antd'
const { useBreakpoint } = Grid
export function useScreenSize(): ScreenSize {
    const screens = Object.entries(useBreakpoint()).filter(screen => !!screen[1])
    if (screens.length < 1) {
        //When it is first called, useBreakpoint() returns an empty array for some reason so XS is returned while we wait for the actual size
        return ScreenSize.XS
    }
    const screenSize = <ScreenSizeStrings>screens[screens.length - 1][0].toUpperCase()
    const screenSizeEnum = ScreenSize[screenSize]
    return screenSizeEnum
}

type ScreenSizeStrings = keyof typeof ScreenSize

export enum ScreenSize {
    XS,
    SM,
    MD,
    LG,
    XL,
    XXL
}