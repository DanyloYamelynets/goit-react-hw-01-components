import styled from 'styled-components';

export const MyFriend = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  background-color: rgb(216 216 216);
  margin-bottom: 6px;
  padding: 4px 0 4px 0;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;
export const FriendStatus = styled.span`
  margin: 0 10px 0 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.color ? 'green' : 'red')};
`;
export const FriendName = styled.p`
  font-size: 18px;
  margin-left: 8px;
`;
