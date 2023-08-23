import React from 'react';
import { Col, Card } from 'react-bootstrap';
// import { CardTitle, CardText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSidebar = styled(Col)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  border: 'none',
}));

// const StyledCardTitle = styled(CardTitle)(({ theme }) => ({
//   fontSize: '1.2rem',
//   marginBottom: theme.spacing(2),
// }));

// const StyledCardText = styled(CardText)(({ theme }) => ({
//   fontSize: '1rem',
//   lineHeight: 1.5,
//   color: theme.palette.text.primary,
// }));

const StyledStrong = styled('strong')(({ theme }) => ({
  color: theme.palette.primary.main, // Adjust to your desired color
}));

const MySidebar = ({ train, seat }) => {
  return (
    <StyledSidebar lg={3}>
      <StyledCard className="h-100">
        <Card.Body>
          {/* <StyledCardTitle>Selected Details</StyledCardTitle> */}
          {/* <StyledCardText> */}
            <StyledStrong>
              You are Travelling By {train.trainName} from {train.originStatioin} to {train.departStation} at{' '}
              {seat.destinationTime}
            </StyledStrong>
            <br />
            <br />
            <StyledStrong>In {seat.classType} Class Type</StyledStrong>
          {/* </StyledCardText> */}
        </Card.Body>
      </StyledCard>
    </StyledSidebar>
  );
};

export default MySidebar;
