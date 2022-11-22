import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Layout from "../components/Layout";
import { Button } from "@mui/material";

export default function BasicTextFields() {
  return (
    <Layout>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
        className="flex flex-col justify-center items-center mt-6 "
      >
        <img
          src="https://media.discordapp.net/attachments/1023021901804753016/1044610344208826440/blog.jpg"
          alt=""
          className="rounded-lg mt-5"
        />
        <p className="text-3xl text-center">✰ New Blog ✰</p>{" "}
        <TextField id="outlined-basic" label="Title*" variant="outlined" />
        <TextField id="outlined-basic" label="Image URL*" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Content*"
          multiline
          rows={15}
          defaultValue=""
        />
        <Button variant="contained" sx={{ backgroundColor: "Black" }}>
          Submit
        </Button>
      </Box>
    </Layout>
  );
}
