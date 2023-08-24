import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CustomInput = ({ id, label, value, onChange, error, helperText, required }) => {

  return (
    <TextField
      required={required}
      id={id}
      label={label}
      fullWidth
      variant="standard"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
};

export default function PaymentForm() {
    const history = useHistory();
  const [paymentData, setPaymentData] = React.useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveCard:false
  });

  const [errors, setErrors] = React.useState({
    cardName: false,
    cardNumber: false,
    expDate: false,
    cvv: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    for (const field in paymentData) {
      if (!paymentData[field]) {
        newErrors[field] = true;
      }
    }
    setErrors(newErrors);

    console.log(paymentData)
    history.push("/ticket")

    // Handle form submission logic here
  };

  const onTextChange = (e) => {
    const { id, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: false,
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <form onSubmit={onSubmit}>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CustomInput
              id="cardName"
              label="Name on card"
              value={paymentData.cardName}
              onChange={onTextChange}
              error={errors.cardName}
              helperText={errors.cardName ? 'Name is required' : ''}
              
            />
          </Grid>
          <Grid item xs={8}>
            <CustomInput
              id="cardNumber"
              label="Card number"
              value={paymentData.cardNumber}
              onChange={onTextChange}
              error={errors.cardNumber}
              helperText={errors.cardNumber ? 'Card number is required' : ''}
              
            />
          </Grid>
          <Grid item xs={8}>
            <CustomInput
              id="expDate"
              label="Expiry date"
              value={paymentData.expDate}
              onChange={onTextChange}
              error={errors.expDate}
              helperText={errors.expDate ? 'Expiry date is required' : ''}
              
            />
          </Grid>
          <Grid item xs={8}>
            <CustomInput
              id="cvv"
              label="CVV"
              value={paymentData.cvv}
              onChange={onTextChange}
              error={errors.cvv}
              helperText={errors.cvv ? 'CVV is required' : ''}
              
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value={paymentData.saveCard} onChange={onTextChange} />}
              label="Remember credit card details for next time"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
