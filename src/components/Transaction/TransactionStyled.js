import styled from 'styled-components';

export const TransactionTable = styled.table`
  max-width: 300px;
  /* border-collapse: collapse; */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  border: 1px solid #00000070;
  border-radius: 8px;
`;

export const TableHead = styled.thead`
  background-color: rgb(70 148 255);
`;

export const TableTitle = styled.th`
  padding: 10px;
  font-weight: bold;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;

export const TransactionKey = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  text-align: center;
`;

export const TransactionType = styled.td`
  padding: 10px;
`;

export const TransactionAmount = styled.td`
  padding: 10px;
`;

export const TransactionCurrency = styled.td`
  padding: 10px;
`;
