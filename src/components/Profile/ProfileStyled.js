import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ecfdff;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
export const Description = styled.div`
  text-align: center;
`;
export const Username = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: 600;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 300;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 300;
`;
export const Stats = styled.ul`
  padding: 0;
  margin: 10px 0 0 0;
  height: 80px;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: rgb(198 236 240);
  align-items: center;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  margin: 5px;
`;
export const Quantity = styled.span`
  font-weight: 600;
`;
