// Import the named functions you need from apiService.jsx
import apiService from '../services/apiService'; // Import the default export
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
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

const Profil = () => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await apiService.getUserData(id); // Use apiService object
        setFetchedData(userData);
      } catch (error) {
        console.log('Error fetching user data:', error); // Log the error

        setIsError(true);
      }
    };

    fetchData();
  }, [id]);

  if (isError) return <Navigate to="/NotFound" />;
  if (!fetchedData) return <div>Loading...</div>;

  return (
    <Container>
       <Title>
        <h1>
          Bonjour <span>{fetchedData.userInfos.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier</h2>
      </Title>
      <Div></Div>
    </Container>
  );
};

export default Profil;
