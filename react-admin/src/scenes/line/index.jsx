import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="75vh"
                gap="20px"
            >
                <Box gridColumn="span 12" display="flex" alignItems="center" justifyContent="center">
                    <LineChart />
                </Box>
            </Box>
        </Box>
    )
}
export default Line;