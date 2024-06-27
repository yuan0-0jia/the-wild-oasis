import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { fetchStatus, isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && fetchStatus !== "fetching")
        navigate("/login");
    },
    [isAuthenticated, fetchStatus, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

export default ProtectedRoute;
