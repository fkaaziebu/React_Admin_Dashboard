import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="75vh"
                gap="20px"
            >
                <Box gridColumn="span 12" display="flex" alignItems="center" justifyContent="center">
                    <PieChart />
                </Box>
            </Box>
        </Box>
    )
}
export default Pie;