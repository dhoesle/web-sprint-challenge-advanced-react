import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'Danny' } })
    fireEvent.change(lastNameInput, { target: { value: 'Hoesle' } })
    fireEvent.change(addressInput, { target: { value: '13960 Dexter Street' } })
    fireEvent.change(cityInput, { target: { value: 'Thornton' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipInput, { target: { value: '80602' } })



    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    
    const result = await screen.findByTestId('successMessage')
    expect(result).toBeInTheDocument()

});
