import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { NextPage } from 'next';
import { useState } from 'react';
import LayoutTemplate from '../../../templates/LayoutTemplate';

const GeneralForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');

  const updateProfile = (event: any) => {
    event.preventDefault();
    return;
  };

  return (
    <Paper className="border">
      <form onSubmit={updateProfile} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                type="email"
                id="emailAddress"
                name="emailAddress"
                label="Email Address"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(event) => setEmailAddress(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="country"
                name="country"
                label="Country"
                placeholder="Country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="state"
                name="state"
                label="State/Province"
                placeholder="State/Province"
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="city"
                name="city"
                label="City"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl fullWidth>
              <TextField
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </FormControl>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Button fullWidth type="submit" variant="contained">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </Paper>
  );
};

const PasswordForm: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const changePassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Paper className="border">
      <form onSubmit={changePassword} className="p-8">
        <div className="flex flex-col gap-8">
          <FormControl fullWidth>
            <TextField
              id="oldPassword"
              name="oldPassword"
              label="Old Password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="newPassword"
              name="newPassword"
              label="New Password"
              placeholder="New Password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </FormControl>
          <Button fullWidth type="submit" variant="contained">
            Save Changes
          </Button>
        </div>
      </form>
    </Paper>
  );
};

const ProfilePage: NextPage = () => {
  return (
    <LayoutTemplate>
      <div className="py-8">
        <Container>
          <div className="flex flex-col gap-8">
            <GeneralForm />
            <PasswordForm />
          </div>
        </Container>
      </div>
    </LayoutTemplate>
  );
};

export default ProfilePage;
