import { Box, LinearProgress } from "@mui/material";
import { PercentageWithValue } from "./PercentageWithValue";

export const ProgressBarComponent = ({
  value,
  barHeight,
  showPercent,
  percentPosition,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {showPercent && percentPosition === "start" && (
        <PercentageWithValue
          value={value}
          variant="owLabel"
          customStyles={{
            marginRight: 2,
          }}
        />
      )}

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          backgroundColor: "#F0F1F2",
          width: "100%",
          height: `${barHeight * 4}px` || "4px",
          "> span": {
            background: `linear-gradient(90deg, #03DAC5 ${
              100 - value
            }%, #3697FF 100%)`,
          },
        }}
      />

      {showPercent && percentPosition === "end" && (
        <PercentageWithValue
          value={value}
          variant="owLabel"
          customStyles={{
            marginLeft: 2,
          }}
        />
      )}
    </Box>
  );
};
