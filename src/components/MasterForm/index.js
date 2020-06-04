import React from "react";
import { Link } from 'react-router-dom';
import { useForm, useStep } from "react-hooks-helper";

import CustomerInfo from './components/Customer';
import Inventory from './components/Inventory';
import Property from './components/Property';
import Header from "./components/Header";
import EmailValidation from './components/Email';
import Preview from './components/Preview';

import './styles.scss';

const steps = [
  { id: "email", title: "Email" },
  { id: "customer", title: "Customer" },
  { id: "inventory", title: "Inventory" },
  { id: "property", title: "Property" },
  { id: "review", title: "Review" }
];

const defaultData = {
  firstName: "Jane",
  lastName: "Doe",
  nickName: "Jan",
  address: "200 South Main St",
  city: "Anytown",
  state: "CA",
  zip: "90505",
  email: "email@domain.com",
  phone: "+61 4252 454 332"
};


const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { index, step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  const headerProps = { index, steps };

  switch (id) {
    case "email":
      return (
        <>
          <Header {...headerProps} />
          <EmailValidation {...props} />
        </>
      );
    case "customer":
      return (
        <>
          <Header {...headerProps} />
          <CustomerInfo {...props} />
        </>
      );
    case "inventory":
      return (
        <>
          <Header {...headerProps} />
          <Inventory {...props} />
        </>
      );
    case "property":
      return (
        <>
          <Header {...headerProps} />
          <Property {...props} />
        </>
      );
    case "review":
      return (
        <>
          <Header {...headerProps} />
          <Preview {...props} />
        </>
      );

    default:
      return null;
  }
};


export default MultiStepForm;
