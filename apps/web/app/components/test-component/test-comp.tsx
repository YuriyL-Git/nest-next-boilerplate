"use client";

import { Box } from "@mui/material";
import { User } from "@libs/web/data-access-graphql";
import { useEffect, useState } from "react";
import { gqlClient } from "../../common/graphql/graphql-client";

export const TestComponent = () => {
  const [state, setState] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    gqlClient
      .GetUsers()
      .then((result) => {
        setState(result.users);
      })
      .catch((error_) => {
        setError(JSON.stringify(error_.response.errors));
      });
  }, []);

  return (
    <Box>
      {JSON.stringify(state)}
      {error}
    </Box>
  );
};
