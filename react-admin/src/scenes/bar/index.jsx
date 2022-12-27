import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="100vh"
                gap="20px"
            >
                <Box gridColumn="span 12" display="flex" alignItems="center" justifyContent="center">
                    <BarChart />
                </Box>
            </Box>
        </Box>
    )
}
export default Bar;