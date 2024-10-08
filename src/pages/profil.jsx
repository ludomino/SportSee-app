// Import the named functions you need from apiService.jsx
import useFetch from "../services/useFetch";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../variables";

const Container = styled.section`
  margin: 40px auto;
  padding: 0 5%;
  @media (max-width: 1024px) {
    margin: 20px auto;
    padding: 0 3%;
  }
`;

const Title = styled.section`
  margin-bottom: 40px;
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }
  h2 {
    font-size: 1.125rem;
    font-weight: 400;
  }
  span {
    color: ${colors.primary};
  }
  p {
    font-size: 1.125rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1320px) {
    flex-direction: column;
  }
`;

function Profil() {
  const { id } = useParams();
  const { fetchedData, isError, isLoading } = useFetch("user", id); // Make sure you're also tracking loading state

  if (isError) return <Navigate to="/NotFound" />;
  if (isLoading || !fetchedData.userInfos) return <div>Loading...</div>; // Handle loading and undefined data

  return (
    <Container>
      <Title>
        <h1>
          Bonjour <span>{fetchedData.userInfos.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier</h2>
      </Title>
      <Div>
      </Div>
    </Container>
  );
}

export default Profil;
