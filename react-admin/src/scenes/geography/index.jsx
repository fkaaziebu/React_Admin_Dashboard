import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple Geography Chart" />
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="75vh"
                gap="20px"
            >
                <Box gridColumn="span 12" display="flex" alignItems="center" justifyContent="center">
                    <GeographyChart />
                </Box>
            </Box>
        </Box>
    )
}
export default Geography;