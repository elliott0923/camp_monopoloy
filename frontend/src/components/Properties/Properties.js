import React, { useContext, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Stack, Paper, Box } from "@mui/material";
import RoleContext from "../useRole";
import PropertyCard from "./PropertyCard";
import Loading from "../Loading";
import axios from "../axios";

const Properties = () => {
  const { buildings, setBuildings } = useContext(RoleContext);
  const [scrolled, setScrolled] = useState(false);
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"), 10);
  
  // Use memoized refs
  const refs = useMemo(
    () => Array.from({ length: 41 }, () => React.createRef()),
    []
  );

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.get("/land");
        setBuildings(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    getProperties();
    const intervalId = setInterval(getProperties, 5000);
    
    return () => clearInterval(intervalId);
  }, [setBuildings]);

  useEffect(() => {
    if (!isNaN(id) && !scrolled && refs[id]?.current) {
      const position = refs[id].current.getBoundingClientRect().top;
      const offset = window.innerHeight / 2;
      window.scrollTo({
        top: position - offset,
        // behavior: "smooth",
      });
      window.focus();
      setScrolled(true);
      console.log("scrolled");
    }
  }, [id, scrolled, refs]);

  const cardComponents = buildings.map((item) => (
    <PropertyCard key={item.id} {...item} ref={refs[item.id]} />
  ));

  if (buildings.length === 0) {
    return <Loading />;
  } else {
    return (
      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          paddingTop: "80px",
          paddingBottom: "1vh",
          margin: "auto",
        }}
      >
        <Box sx={{ margin: "auto" }} />
        <Stack
          spacing={2}
          sx={{
            marginLeft: "5vw",
            marginRight: "5vw",
            width: "90vw",
          }}
        >
          {cardComponents}
        </Stack>
        <Box
          sx={{
            marginBottom: "80px",
            marginLeft: "5vw",
            marginRight: "5vw",
          }}
        />
      </Paper>
    );
  }
};

export default Properties;
