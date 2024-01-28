import { Typography } from "@mui/material";

export const PercentageWithValue = ({ value, variant, customStyles }) => {
  return (
    <Typography
      sx={{
        ...customStyles,
      }}
      variant={variant || "owLabel"}
    >
      {value}
      <span
        style={{
          marginLeft: 2,
        }}
      >
        %
      </span>
    </Typography>
  );
};
