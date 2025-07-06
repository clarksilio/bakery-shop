import {useAppSelector} from "../../redux/hooks.ts";
import {DataGrid, type GridColDef} from "@mui/x-data-grid"
import Box from "@mui/material/Box";
import {Avatar} from "@mui/material";

const BreadProductsAdmin = () => {
    const {currProds} = useAppSelector(state => state.products);
    const rows = currProds
    const columns:GridColDef<(typeof rows)[number]>[] =[
    {field: 'id', headerName: 'ID', width: 90, flex:0.3},
        {field: 'title', headerName: 'Product Name', width: 90, flex:0.1},
        {field: 'category', headerName: 'Category', width: 90, flex:0.4},
        {field: 'unit', headerName: 'Unit', width: 90, flex:0.4},
        {field: 'price', headerName: 'Price in ILS', width: 90, flex:0.4},
        {field: 'image', width: 200, flex:0.5, renderCell: (params) => {
            return(
                <Avatar src={'./images/' + params.value} />
            )
            }},
    ]
    return (
        <Box>
            <DataGrid columns={columns} rows={rows}/>
        </Box>
    );
};

export default BreadProductsAdmin;