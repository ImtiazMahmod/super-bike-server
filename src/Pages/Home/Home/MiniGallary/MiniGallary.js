import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MiniGallary() {
  return (
    <Box sx={{ my: 12 }}>
      <Typography variant="body1" sx={{ color: "tomato" }}>
        EXPERIENCE
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        DYNAMIC RIDING <br />
      </Typography>
      <ImageList
        sx={{ width: "auto", height: "auto" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
//

const itemData = [
  {
    img: "https://i.ibb.co/xD0WGtZ/photo-1591216105236-5ba45970702a.jpg",
    title: "bike",
    rows: 6,
    cols: 2,
  },
  {
    img: "https://i.ibb.co/VYV0b68/3163.jpg",
    title: "bike",
    rows: 6,
    cols: 2,
  },
];
