import {AppBar, Box, Tab, Tabs} from "@mui/material";
import type {RouteType} from "../../utils/shop-types.ts";
import {type FC, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import * as React from "react";

type Props ={
    items: RouteType[]
    sub?:string
}

const NavigatorDesktop:FC<Props> = ({items}) => {
    const[value, setValue] = useState(0)
    const handleOnChange=(_e:React.SyntheticEvent, newValue:number ) =>{
        setValue(newValue)
    }

    return (
        <div>
            <Box sx={{mt:'50px'}}>
                <AppBar sx={{backgroundColor:'lightgray'}}>
                    <Tabs value={value} onChange={handleOnChange}>
                    {
                        items.map(item =>
                            <Tab key={item.path} component={Link} to={item.path} label={item.title}/>)
                    }
                    </Tabs>
                </AppBar>
                <Outlet/>
            </Box>
        </div>
    );
};

export default NavigatorDesktop;