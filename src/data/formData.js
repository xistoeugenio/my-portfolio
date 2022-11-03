export const inputs = [
    {
        id: 1,
        name: "name",
        placeholder: "Your name",
        type: "text",
        label: "Name",
        required: true,
        errorMessage: "Your name should be 7-30 characters and shouldn't include any special characters.",
        pattern: "^[A-Za-z ]{7,30}$"
    },
    {
        id: 2,
        name: "email",
        placeholder: "Your email",
        type: "email",
        label: "Email",
        required: true,
        errorMessage: "It should be a valid email."
    }

];