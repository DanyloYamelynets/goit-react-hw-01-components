import styled from 'styled-components';

export const StatsSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(230 251 236);
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;
export const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
  text-transform: uppercase;
  font-size: 20px;
`;
export const StatsList = styled.ul`
  width: 90%;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 10px 0 10px 0;
`;
export const Label = styled.span`
  flex-direction: column;
  align-items: center;
  display: flex;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 18px;
`;
