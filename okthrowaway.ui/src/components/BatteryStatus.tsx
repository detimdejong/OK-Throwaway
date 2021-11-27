import React from "react";
import {
    MdBattery20,
    MdBattery30,
    MdBattery50,
    MdBattery60,
    MdBattery80,
    MdBattery90
} from "react-icons/md";
import colors from "../constants/colors";


interface BatteryStatusProps {
    batteryPercentage: number;
}

export default function BatteryStatus(props: BatteryStatusProps) {
    const { batteryPercentage } = props;

    const iconProps = {
        size: "3%",
        style: {
            transform: 'rotate(90deg)'
        }
    }

    const batteryIcon = React.useMemo(() => {
        if (batteryPercentage < 20) return <MdBattery20 color={colors.red500} {...iconProps}/>
        if (batteryPercentage < 30) return <MdBattery30 color={colors.orange500} {...iconProps}/>
        if (batteryPercentage < 50) return <MdBattery50 color={colors.green500} {...iconProps}/>
        if (batteryPercentage < 60) return <MdBattery60 color={colors.green500} {...iconProps}/>
        if (batteryPercentage < 80) return <MdBattery80 color={colors.green500} {...iconProps}/>
        if (batteryPercentage < 90) return <MdBattery90 color={colors.green500} {...iconProps}/>
    }, [batteryPercentage]);

    return (
        <>
            {batteryIcon}
        </>
    );
}