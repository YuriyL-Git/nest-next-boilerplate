"use client";

import { Box } from "@mui/material";
import { User } from "@next-nest-boilerplate/web/data-access-graphql";
import { useEffect, useState } from "react";
import { gqlClient } from "../../common/data-access/graphql-client";

export const TestComponent = () => {
  const [state, setState] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      gqlClient
        .GetUsers()
        .then((result) => {
          setState(result.users);
        })
        .catch((error) => {
          setError(JSON.stringify(error.response.errors));
        });

      // @ts-ignore
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <Box>
      {JSON.stringify(state)}
      {error}
    </Box>
  );
};
